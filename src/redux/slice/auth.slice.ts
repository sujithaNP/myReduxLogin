import {createSlice, PayloadAction, CaseReducer} from '@reduxjs/toolkit';

export type InitialState = {
  user: undefined | Iuser;
};
export type Iuser = {
  name: string;
  age: number;
};

const initialState: InitialState = {
  user: undefined,
};

type AuthReducer<Payload> = CaseReducer<InitialState, PayloadAction<Payload>>;

const search: AuthReducer<{name: string}> = (state, action) => {
  console.log('state', state);
  return state;
};
export const setSearchedItem: AuthReducer<{user: Iuser}> = (state, action) => {
  state.user = action.payload.user;
  console.log('action11', action);
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    search,
    // getSearchedItem,
    setSearchedItem,
  },
});
export default authSlice;
