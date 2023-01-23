import { useQuestion } from '../../hooks/useQuestion';
import Answers from './Answers';
import Stages from './Stages';
import './style.scss';

export default function Game(): JSX.Element {
  const question = useQuestion();

  return (
    <div className="GamePage">
      {/* <div className="Question"> */}
      <h2 className="QuestionText">{question?.questionText}</h2>
      <Answers />
      {/* </div> */}
      <Stages />
    </div>
  );
}
