import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../env";

interface AuthState {
  accessToken?: string;
}

interface AuthData {
  access: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as { auth: AuthState }).auth?.accessToken || null;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    } else {
      const authData = localStorage.getItem("auth");
      if (authData) {
        const parsedAuthData: AuthData = JSON.parse(authData);
        if (parsedAuthData?.access) {
          headers.set("authorization", `Bearer ${parsedAuthData.access}`);
        }
      }
    }

    return headers;
  },
});

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["users"],
  endpoints: () => ({}),
});
