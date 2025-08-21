"use client";
import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { rootEpic } from './epics';
import placesReducer from './placesSlice';

const persistConfig = {
  key: 'historical-places',
  storage,
  whitelist: ['places'] // reducer keys to persist
};

const epicMiddleware = createEpicMiddleware();

const rootReducer = (state, action) => ({
  places: placesReducer(state?.places, action)
});

const persistedReducer = persistReducer(persistConfig, (state, action) => rootReducer(state, action));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefault) =>
    getDefault({ serializableCheck: false }).concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export const persistor = persistStore(store);
