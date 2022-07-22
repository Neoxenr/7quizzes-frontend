import { GetRulesDto } from '../../common';
import { api } from '../api';

const extendedRulesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRules: builder.query<GetRulesDto, void>({
      query: () => {
        const token = localStorage.getItem('token');

        const request = {
          url: 'rules',
          headers: new Headers(
            token ? { Authorization: `Bearer ${token}` } : {},
          ),
        };

        return request;
      },
    }),
  }),
});

export const { useGetRulesQuery } = extendedRulesApi;
