import { TOKEN } from '../config';

localStorage.setItem('token', TOKEN);

export const getRulesRequest = async () => fetch('http://7quizzes.local/api/rules', {
  headers: new Headers({
    Authorization:
      `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
});

export const getRoomsRequest = async () => fetch('http://7quizzes.local/api/rooms', {
  headers: new Headers({
    Authorization:
    `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
});

export const postNewGameRequest = async (roomId) => fetch(`http://7quizzes.local/api/rooms/${roomId}/game/start`, {
  method: 'POST',
  headers: new Headers({
    Authorization:
      `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
});

export const getQuestionRequest = async (roomId, questionId) => fetch(
  `http://7quizzes.local/api/rooms/${roomId}/game/question/${questionId}`,
  {
    headers: new Headers({
      Authorization:
        `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  }
);

export const postAnswerQuestionRequest = async (roomId, questionId, answerId) => fetch(
  `http://7quizzes.local/api/rooms/${roomId}/game/question/${questionId}/answer`,
  {
    method: 'POST',
    headers: new Headers({
      Authorization:
        `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({ answerId }),
  },
);
