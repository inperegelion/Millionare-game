import { useParams } from 'react-router-dom';
import { getQuestion } from '../config';
import { QUESTION_INDEX } from '../constants';
import { IQuestion } from '../interfaces';

export function useQuestionIndex(): number {
  const params = useParams();
  const questionIndex = Number(params[QUESTION_INDEX]);
  if (Number.isNaN(questionIndex)) throw new Error('DO NOT PLAY WITH ME!');
  return questionIndex;
}

export function useQuestion(index?: number): IQuestion | null {
  let questionIndex: number;

  if (index === undefined) {
    questionIndex = useQuestionIndex();
  } else {
    questionIndex = index;
  }

  const question = getQuestion(questionIndex);
  return question;
}
