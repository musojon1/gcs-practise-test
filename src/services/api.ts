import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = () =>
  fetchBaseQuery({
    baseUrl: "https://no23.lavina.tech",
    prepareHeaders: (headers) => {
      try {
        const token = localStorage.getItem("accessToken");
        const authorization = headers.get("Authorization");
        if (token && authorization === null) {
          headers.set("Authorization", `Bearer ${token}`);
        }
      } catch (e) {
        // console.error(e);
      }
      return headers;
    },
  });
