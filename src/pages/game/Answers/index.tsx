import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQuestion, useQuestionIndex } from '../../../hooks/useQuestion';
import { getConfig, getQuestionLength } from '../../../config';
import './style.scss';
import { ROUTE_GAME, ROUTE_OVER } from '../../../constants';

export default function Answers(): JSX.Element {
  const navigate = useNavigate();
  const question = useQuestion();
  const questionIndex = useQuestionIndex();
  const { answerNames } = getConfig();
  const questionLength = getQuestionLength();
  const [isSubmited, setIsSumbited] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>();
  const isThereANextQuestion = questionLength > questionIndex + 1;

  function resetState(): void {
    setIsSumbited(false);
    setSelectedAnswerIndex(undefined);
  }

  function gameOver(): void {
    navigate(ROUTE_OVER);
  }

  function goNext(): void {
    resetState();
    if (isThereANextQuestion) {
      navigate(`${ROUTE_GAME}${questionIndex + 1}`);
    } else gameOver();
  }

  function handleAnswer(answerIndex: number): void {
    // first click select an answer
    setSelectedAnswerIndex(answerIndex);
    // second click submits an answer
    if (selectedAnswerIndex === answerIndex) {
      setIsSumbited(true);
    }
    // third click navigates to the next answer or game over
    if (isSubmited) {
      if (question?.correctAnswersIndexes === selectedAnswerIndex) {
        goNext();
      } else gameOver();
    }
  }

  return (
    <div className="Answers">
      {question?.answers.map((answerText, answerIndex) => {
        const classNames: string[] = ['Answer'];
        const isCorrect = answerIndex === question.correctAnswersIndexes;
        const isSelected = answerIndex === selectedAnswerIndex;
        const isWrong = !isCorrect && isSelected;

        if (isSelected) classNames.push('Selected');
        if (isSubmited) {
          if (isCorrect) { classNames.push('Correct'); }
          if (isWrong) classNames.push('Wrong');
        }

        return (
          <button
            key={`answer-${answerNames[answerIndex]}`}
            type="button"
            onClick={() => { handleAnswer(answerIndex); }}
            className={classNames.join(' ')}
          >
            <span>{answerNames[answerIndex]}</span>
            <span>{`-${answerText}`}</span>
          </button>
        );
      })}
      <br />
    </div>
  );
}
