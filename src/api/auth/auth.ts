import {
  SignInRequestDto,
  SignInResponseDto,
  SignUpRequestDto,
} from '../../common/dto/auth/types';
import { api } from '../api';

const extendedAuthApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<boolean, SignUpRequestDto>({
      query: (dto) => ({
        url: 'signup',
        body: dto,
        method: 'POST',
      }),
    }),
    signIn: builder.mutation<SignInResponseDto, SignInRequestDto>({
      query: (dto) => ({
        url: 'signin',
        body: dto,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation, useSignUpMutation } = extendedAuthApi;
