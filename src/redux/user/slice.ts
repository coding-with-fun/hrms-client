import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { UserRole } from '../../utils/enums';

export interface UserState {
    user: {
        id: number;
        firstName: string;
        lastName: string;
        contactNumber: string;
        email: string;
        role: UserRole;
        joiningDate: string;
        isActive: boolean;
        isDeleted: boolean;
        isConfirmed: boolean;
        currentLeaveBalance: number;
    };
    status: 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
    user: {
        id: 0,
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        role: UserRole.EMPLOYEE,
        joiningDate: '',
        isActive: true,
        isDeleted: false,
        isConfirmed: false,
        currentLeaveBalance: 0,
    },
    status: 'idle',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        fetchUser: (state, action) => {
            state.status = 'loading';
        },

        fetchUserSuccess: (state, action) => {
            state.status = 'idle';
            state.user = {
                ...action.payload,

                // id: _.get(action, 'payload.id'),
                // firstName: _.get(action, 'payload.firstName'),
                // lastName: _.get(action, 'payload.lastName'),
                // contactNumber: _.get(action, 'payload.contactNumber'),
                // email: _.get(action, 'payload.email'),
                // role: _.get(action, 'payload.role'),
                // joiningDate: _.get(action, 'payload.joiningDate'),
            };
        },

        fetchUserError: (state) => {
            state.status = 'failed';
        },
    },
});

export const { fetchUser, fetchUserSuccess, fetchUserError } =
    userSlice.actions;

export const user = (state: RootState) => state.user;

export default userSlice.reducer;
