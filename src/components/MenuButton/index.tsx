import { PropsWithChildren } from 'react';
import burgir_open_menu from '../../assets/burgir_open_menu.svg';
import cross_close_menu from '../../assets/cross_close_menu.svg';

type MenuButtonProps = PropsWithChildren<{
  isOpen: boolean
  onClick: () => void
}>;
export default function MenuButton({ onClick, isOpen }: MenuButtonProps): JSX.Element {
  return (
    <button className="Menu" type="button" onClick={onClick}>
      {
          isOpen
            ? <img src={cross_close_menu} alt="" />
            : <img src={burgir_open_menu} alt="" />
        }
    </button>
  );
}
