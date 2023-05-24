import { combineReducers, configureStore } from '@reduxjs/toolkit';
import massageReducer from './reducers/massage';
import userReducer from './reducers/user';
import accountReducer from './reducers/myAccount';


import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  massage: massageReducer,
  user: userReducer,
  account: accountReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

