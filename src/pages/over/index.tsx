import { useNavigate, useParams } from 'react-router-dom';

import ICON_HandThumbUp from '../../assets/hand_thumb_up.svg';
import ActionButton from '../../components/ActionButton';
import { ROUTE_ROOT, YOUR_REMUNERATION } from '../../constants';
import './style.scss';

export default function Over(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const yourRemuneration = String(params[YOUR_REMUNERATION]);

  const onTryAgain = (): void => {
    navigate(`${ROUTE_ROOT}`);
  };

  return (
    <div className="OverPage">
      <img
        className="HandThumbUp"
        src={ICON_HandThumbUp}
        alt="a hand showing thumb up"
      />
      <div className="PageContent">
        <h2 className="ScoreLabel">Total Score</h2>
        <h1 className="Score">
          {yourRemuneration}
          {' earned'}
        </h1>
        <ActionButton action={onTryAgain} text="Try Again" />
      </div>
    </div>
  );
}
