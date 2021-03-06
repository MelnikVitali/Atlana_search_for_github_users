import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import { APIUrls } from '../configs/APIUrls';
import { gitHubConfigs } from '../configs/gitHubConfigs';

export const initialState = {
    loading: false,
    error: null,
    queriedUsers: [],
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
            state.isCurrentUsers = false;
            state.loading = false;
            state.errorMessage = null;
        },
        getCurrentUsersSuccess: (state, {payload}) => {
            const newUsers = payload.reduce((acc, item) => {
                acc[item.login] = {user: item, repos: []};
                return acc;
            }, {});

            state.users = {...state.users, ...newUsers};
            state.isOpenDisplayUser = false;
            state.loading = false;
            state.isCurrentUsers = true;
            state.error = null;
        },
        getCurrentUserReposSuccess: (state, {payload: {repos, login}}) => {
            if (repos.length === 0) {
                state.users[login].repos = null;
            } else {
                state.users[login].repos = repos;
            }

            state.loading = false;
            state.error = null;
            state.isOpenDisplayUser = true;
            state.isCurrentUserRepos = true;
            state.currentUser = login;
        },
        getCurrentUser: (state, {payload}) => {
            state.currentUser = payload;
            state.isCurrentUsers = true;
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
        toggleDisplayCurrentUser: (state, {payload}) => {
            if (payload) {
                state.isOpenDisplayUser = payload;
            } else {
                state.isCurrentUsers = false;
                state.currentUser = null;
                state.isCurrentUserRepos = false;
                state.isOpenDisplayUser = false;
            }
        }
    }
});

export const {
    startLoading,
    getUsersSuccess,
    getCurrentUsersSuccess,
    getCurrentUser,
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
            const response = await axios.get(`${APIUrls.searchUsers}${searchParams}${APIUrls.gitHubQuerySettingsUsers}`, {
                headers: {
                    Authorization: `token ${gitHubConfigs.githubToken}`,
                }
            });

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
                        const response = await axios.get(`${APIUrls.searchUser}${user.login}?${APIUrls.gitHubQuerySettingsUsers}`, {
                            headers: {
                                Authorization: `token ${gitHubConfigs.githubToken}`,
                            }
                        });

                        currentUsers = [...currentUsers, response.data];
                    }
                }

                return Promise.all(currentUsers);
            };

            await getUsers(queriedUsers, users).then(data => dispatch(getCurrentUsersSuccess(data)));
        } catch (error) {

            dispatch(getError(error?.message));
        }
    };
};

export const fetchCurrentUserRepos = (login, users) => {
    return async dispatch => {
        dispatch(startLoading());

        try {
            if ((users[login].repos && users[login].repos.length === 0) || !(users.hasOwnProperty(login))) {
                const response = await axios.get(`${APIUrls.searchUser}${login}${APIUrls.gitHubQuerySettingsRepos}`, {
                    headers: {
                        Authorization: `token ${gitHubConfigs.githubToken}`,
                    }
                });

                if (response) {
                    await dispatch(getCurrentUserReposSuccess({login, repos: response.data}));
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
