import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  id: number;
  name: string;
}

const initialState: UserState = {
    id: 0,
    name: '',
};

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.name = action.payload.name;
            state.id = action.payload.id;
        },
    },
});

export const { setUserInfo } = UserSlice.actions;

export default UserSlice.reducer;
