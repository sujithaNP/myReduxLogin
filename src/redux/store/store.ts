import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../slice/auth.slice';
import createSagaMiddleware from '@redux-saga/core';
import {rootReducer} from './root.reducer';
import {rootSaga} from './root.saga';

const sagaMiddleWare = createSagaMiddleware();

const middleWare = [sagaMiddleWare];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleWare,
});
sagaMiddleWare.run(rootSaga);
