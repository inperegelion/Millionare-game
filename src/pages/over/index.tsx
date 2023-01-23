import { useNavigate, useParams } from 'react-router-dom';

import ICON_HandThumbUp from '../../assets/hand_thumb_up.svg';
import ActionButton from '../../components/ActionButton';
import { ROUTE_GAME, YOUR_REMUNERATION } from '../../constants';
import './style.scss';

export default function Over(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const yourRemuneration = String(params[YOUR_REMUNERATION]);

  const onTryAgain = (): void => {
    navigate(`${ROUTE_GAME}0`);
  };

  return (
    <div className="StartPage">
      <img
        className="HandThumbUp"
        src={ICON_HandThumbUp}
        alt="a hand showing thumb up"
      />
      <div className="PageContent">
        <h2 className="Title">Total Score</h2>
        <h1 className="Title">
          {yourRemuneration}
          {' earned'}
        </h1>
        <ActionButton action={onTryAgain} text="Try Again" />
      </div>
      <div className="Triangle" />
    </div>
  );
}
