import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducer';
import { createApi } from '../services/index';
import { redirect } from './redirect';

const api = createApi();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument : api,
      },
    }).concat(redirect)
});


export { api, store };


