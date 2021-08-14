import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from 'redux-devtools-extension';

import usersReducer from './usersReducers';

const rootReducer = combineReducers({
    users: usersReducer,
});
export const store = configureStore({
    reducer: rootReducer,
    devTools:[ devToolsEnhancer({ realtime: true }) ]
});
