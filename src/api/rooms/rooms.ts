import { GetRoomDto, GetRoomsDto } from '../../common';
import { api } from '../api';

const extendedRoomApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query<GetRoomsDto[], void>({
      query: () => {
        const token = localStorage.getItem('token');

        const request = {
          url: 'rooms',
          headers: new Headers(
            token ? { Authorization: `Bearer ${token}` } : {},
          ),
        };

        return request;
      },
    }),
    getRoom: builder.query<GetRoomDto, string>({
      query: (roomId) => {
        const token = localStorage.getItem('token');

        const request = {
          url: `rooms/${roomId}`,
          headers: new Headers(
            token ? { Authorization: `Bearer ${token}` } : {},
          ),
        };

        return request;
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetRoomsQuery, useGetRoomQuery } = extendedRoomApi;
