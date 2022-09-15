import axios from 'axios';
import { put } from 'redux-saga/effects';
import { fetchUserError, fetchUserSuccess } from './slice';

export interface getUsersAction {
    payload: any;
    type: string;
}

export function* getUsers(action: getUsersAction) {
    try {
        // @ts-ignore
        const response = yield axios.get(
            `https://jsonplaceholder.typicode.com/users/${action.payload}`
        );
        yield put(fetchUserSuccess(response.data));
    } catch (error: any) {
        console.log(error.message);
        yield put(fetchUserError());
    }
}
