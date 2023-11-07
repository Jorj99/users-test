import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../interfaces/User";
import initialUsersState from "../users.json";

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: initialUsersState,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users = [...state.users, action.payload];
    },
    deleteUserByEmail: (state, action: PayloadAction<string>) => {
      const debatedItemIndex = state.users.findIndex(
        (user) => user.email === action.payload
      );

      const newUserState = [...state.users];
      newUserState.splice(debatedItemIndex, 1);
      state.users = newUserState;
    },
  },
});

export const { addUser, deleteUserByEmail } = usersSlice.actions;
export default usersSlice.reducer;
