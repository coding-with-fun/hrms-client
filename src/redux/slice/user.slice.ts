import { createSlice } from '@reduxjs/toolkit';
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
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            console.log({
                payload: action.payload,
            });
            state.user = { ...action.payload };
        },
    },
});

export const { setUserData } = UserSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const userData = (state: { user: UserState }) => state.user.user;

export default UserSlice.reducer;
