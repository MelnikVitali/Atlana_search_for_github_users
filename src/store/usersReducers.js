import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import { APIUrls } from '../configs/APIUrls';

export const initialState = {
    loading: false,
    error: null,
    queriedUsers: [],
    currentUsers: [],
    isCurrentUsers: false,
    currentUser: null,
    isCurrentUserRepos: false,
    isOpenDisplayUser: false,
    users: {}
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        startLoading: state => {
            state.loading = true;
        },
        getUsersSuccess: (state, {payload}) => {
            state.queriedUsers = payload;
            state.isOpenDisplayUser = false;
            state.loading = false;
            state.errorMessage = null;
        },
        getCurrentUsersSuccess: (state, {payload}) => {
            const newUsers = payload.reduce((acc, item) => {
                acc[item.login] = {user: item, repos: []}
                return acc;
            }, {});

            state.users = {...state.users, ...newUsers};
            // state.queriedUsers = [];
            state.loading = false;
            state.error = null;
        },
        getCurrentUserSuccess: (state, {payload}) => {
            state.users = {
                ...state.users,
                [payload.login]: {
                    user: {
                        ...payload
                    },
                    repos: []
                }
            };
            state.loading = false;
            state.error = null;
            // state.isCurrentUserRepos = true;
        },
        getCurrentUserReposSuccess: (state, {payload}) => {
            if (payload.length !== 0) {
                const login = payload[0].owner.login;

                state.users[login].repos = payload;
            }

            state.loading = false;
            state.error = null;
            state.isCurrentUserRepos = true;
        },

        getCurrentUser: (state, {payload}) => {
            state.currentUser = payload;
            state.isCurrentUserRepos = false;
        },
        getError: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        clearResults: state => {
            state.loading = false;
            state.error = null;
            state.queriedUsers = [];
            state.isCurrentUsers = false;
            state.isCurrentUserRepos = false;
            state.isOpenDisplayUser = false;
        },
        toggleDisplayCurrentUser: state => {
            state.isOpenDisplayUser = true
        }
    }
});

export const {
    startLoading,
    getUsersSuccess,
    getCurrentUsersSuccess,
    getCurrentUser,
    getCurrentUserSuccess,
    getCurrentUserReposSuccess,
    getError,
    clearResults,
    toggleDisplayCurrentUser
} = usersSlice.actions;

export const usersSelector = state => state.users;

export default usersSlice.reducer;

export const fetchQueriedUsers = (searchParams) => {
    return async dispatch => {
        dispatch(startLoading());
        try {
            const response = await axios.get(`${APIUrls.searchUsers}${searchParams}&${APIUrls.gitHubQuerySettingsUsers}`);

            if (response) {
                dispatch(getUsersSuccess(response.data.items));
            }
        } catch (error) {
            toast.error(error?.message);

            dispatch(getError(error?.message));
        }
    };
};


export const fetchCurrentUsers = (queriedUsers, users) => {
    return async dispatch => {
        dispatch(startLoading());

        try {
            const getUsers = async (queriedUsers, users) => {
                let currentUsers = [];

                for (let user of queriedUsers) {
                    if (Object.entries(users).length === 0 || !(users.hasOwnProperty(user.login))) {
                        const response = await axios.get(`${APIUrls.searchUser}${user.login}?${APIUrls.gitHubQuerySettingsUsers}`);

                        currentUsers = [...currentUsers, response.data];
                    }
                }

                return await Promise.all(currentUsers);
            };

            await getUsers(queriedUsers, users).then(data => dispatch(getCurrentUsersSuccess(data)));
        } catch (error) {

            dispatch(getError(error?.message));
        }
    };
};

// export const fetchCurrentUser = (login) => {
//     return async dispatch => {
//         dispatch(startLoading());
//         try {
//             const response = await axios.get(`${APIUrls.searchUser}${login}?${APIUrls.gitHubQuerySettingsUsers}`);
//
//             if (response) {
//                 dispatch(getCurrentUserSuccess(response.data));
//             }
//         } catch (error) {
//             toast.error(error?.message);
//
//             dispatch(getError(error?.message));
//         }
//     };
// };

export const fetchCurrentUserRepos = (login, users) => {
    console.log('5555', login);
    return async dispatch => {
        dispatch(startLoading());
        try {
            if (users[login].repos.length === 0 || !(users.hasOwnProperty(login))) {
                const response = await axios.get(`${APIUrls.searchUser}${login}${APIUrls.gitHubQuerySettingsRepos}`);

                if (response) {
                    dispatch(getCurrentUserReposSuccess(response.data));
                }
            } else {
                return false;
            }
        } catch (error) {
            toast.error(error?.message);

            dispatch(getError(error?.message));
        }
    };
};
