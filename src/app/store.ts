import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../redux/slice/user.slice';

export const store = configureStore({
    reducer: {
        user: UserReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
