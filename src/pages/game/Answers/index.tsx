import { useState } from 'react';
import { useQuestion } from '../../../hooks/useQuestion';
import { getConfig } from '../../../config';
import './style.scss';

export default function Answers(): JSX.Element {
  const question = useQuestion();
  const { answerNames } = getConfig();
  const [isSubmited, setIsSumbited] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>();

  function handleAnswer(answerIndex: number): void {
    setSelectedAnswerIndex(answerIndex);
    if (selectedAnswerIndex === answerIndex) {
      setIsSumbited(true);
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
