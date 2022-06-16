export type GetQuestionDto = {
  questionId: string;
  questionText: string;
  answersList: [
    {
      answerId: string;
      answerText: string;
    },
  ];
};

export type AnswerQuestionRequestDto = {
  answerId: string | undefined;
};

export type AnswerQuestionNormalResponseDto = {
  correctAnswerId: string;
  questionId: string;
  totalScore: number;
  questionScore: number;
};

export type AnswerQuestionBadResponseDto = {
  questionId: string;
  totalScore: number;
};
