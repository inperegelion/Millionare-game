import { useNavigate } from 'react-router-dom';

import ICON_HandThumbUp from '../../assets/hand_thumb_up.svg';
import ActionButton from '../../components/ActionButton';
import { ROUTE_GAME } from '../../constants';
import './style.scss';

export default function Start(): JSX.Element {
  const navigate = useNavigate();
  const onStart = (): void => {
    console.log('start');

    navigate(ROUTE_GAME);
  };

  return (
    <div className="StartPage">
      <img className="HandThumbUp" src={ICON_HandThumbUp} alt="a hand showing thumb up" />
      <div className="PageContent">
        <h1 className="Title">Who wants to be a millionare?</h1>
        <ActionButton action={onStart} text="Start" />
      </div>
      <div className="Triangle" />
    </div>
  );
}
