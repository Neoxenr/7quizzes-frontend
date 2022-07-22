import { api } from '../api';
import {
  AnswerQuestionBadResponseDto,
  AnswerQuestionNormalResponseDto,
  AnswerQuestionRequestDto,
  GetQuestionDto,
  PostGameDto,
} from '../../common/dto';

const extendedGameApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postGame: builder.mutation<PostGameDto, string | undefined>({
      query: (roomId) => {
        const token = localStorage.getItem('token');

        const request = {
          url: `rooms/${roomId}/game/start`,
          headers: new Headers(
            token ? { Authorization: `Bearer ${token}` } : {},
          ),
          method: 'POST',
        };

        return request;
      },
    }),
    getQuestion: builder.query<
      GetQuestionDto,
      { roomId: string | undefined; questionId: string | undefined }
    >({
      query: ({ roomId, questionId }) => {
        const token = localStorage.getItem('token');

        const request = {
          url: `rooms/${roomId}/game/question/${questionId}`,
          headers: new Headers(
            token ? { Authorization: `Bearer ${token}` } : {},
          ),
        };

        return request;
      },
    }),
    answerQuestion: builder.mutation<
      AnswerQuestionNormalResponseDto & AnswerQuestionBadResponseDto,
      {
        roomId: string | undefined;
        questionId: string | undefined;
        dto: AnswerQuestionRequestDto;
      }
    >({
      query: ({ roomId, questionId, dto }) => {
        const token = localStorage.getItem('token');

        const request = {
          url: `rooms/${roomId}/game/question/${questionId}/answer`,
          headers: new Headers(
            token ? { Authorization: `Bearer ${token}` } : {},
          ),
          body: dto,
          method: 'POST',
        };

        return request;
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  usePostGameMutation,
  useGetQuestionQuery,
  useAnswerQuestionMutation,
  usePrefetch,
} = extendedGameApi;
