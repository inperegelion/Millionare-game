import { useQuestion } from '../../hooks/useQuestion';
import Answers from './Answers';
import Stages from './Stages';
import './style.scss';

export default function Game(): JSX.Element {
  const question = useQuestion();

  return (
    <div className="GamePage">
      <h2>{question?.questionText}</h2>
      <Answers />
      <Stages />
    </div>
  );
}
