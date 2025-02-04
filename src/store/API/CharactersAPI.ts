import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const charactersAPI = createApi({
  reducerPath: 'charactersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: ({ page = 1 }) => `character?page=${page}`,
    }),
  }),
});

export const { useGetAllCharactersQuery } = charactersAPI;
