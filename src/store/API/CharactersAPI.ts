import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from '../../types/Character';

export const charactersAPI = createApi({
  reducerPath: 'charactersAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query<
      { results: Character[]; info: { pages: number } },
      { page: number }
    >({
      query: ({ page }) => `character?page=${page}`,
    }),

    getCharacterById: builder.query<Character, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } =
  charactersAPI;
