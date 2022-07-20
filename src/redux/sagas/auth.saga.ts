import {PayloadAction} from '@reduxjs/toolkit';
import {put, takeEvery} from 'redux-saga/effects';
import {fetchDetails} from '../service/service';
import authSlice from '../slice/auth.slice';

function* search(action: PayloadAction<{name: string}>) {
  console.log('Loggin zzzzzzzzzzzzz ');
  const data = yield fetchDetails(action.payload.name);
  yield put(authSlice.actions.setSearchedItem({user: data}));
  console.log('action', action);
}

export function* authSaga() {
  yield takeEvery('auth/search', search);
}
