import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { bookshelfApi } from "./services/bookshelf";

export const store = configureStore({
  reducer: {
    [bookshelfApi.reducerPath]: bookshelfApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookshelfApi.middleware),
});

setupListeners(store.dispatch);
