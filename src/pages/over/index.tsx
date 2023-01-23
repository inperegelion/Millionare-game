import { useNavigate } from 'react-router-dom';

import ICON_HandThumbUp from '../../assets/hand_thumb_up.svg';
import ActionButton from '../../components/ActionButton';
import { ROUTE_GAME } from '../../constants';
import './style.scss';

export default function Over(): JSX.Element {
  const navigate = useNavigate();
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
        <h1 className="Title">Game Over</h1>
        <ActionButton action={onTryAgain} text="Try Again" />
      </div>
      <div className="Triangle" />
    </div>
  );
}
