import { createApi } from "@reduxjs/toolkit/query/react";
import type { IBook, IBookshelf } from "./types";
import { baseQuery } from "./api";

export const bookshelfApi = createApi({
  reducerPath: "bookshelfApi",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    register: builder.mutation<IBookshelf, IBookshelf>({
      query: (data) => ({
        url: "signup",
        data,
        method: "post",
      }),
    }),
    books: builder.query<IBook, string>({
      query: (title) => ({
        url: `/books${title ? ":" + title : ""}`,
        method: "get",
        headers: {
          Key: "Mason",
          Sign: "MySecret",
        },
      }),
    }),
    createBook: builder.mutation<void, IBook>({
      query: (data) => ({
        url: `books`,
        data,
        method: "post",
      }),
    }),
    editBook: builder.mutation<void, IBook>({
      query: (data) => ({
        url: `books/${data?.id}`,
        data,
        method: "patch",
      }),
    }),

    deleteBook: builder.mutation<void, number>({
      query: (id) => ({
        url: `books/:${id}`,
        method: "delete",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useBooksQuery,
  useCreateBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = bookshelfApi;
