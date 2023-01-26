import { useState } from 'react';

import MenuButton from '../../../components/MenuButton';
import { getRemunerations } from '../../../config';
import { useQuestionIndex } from '../../../hooks/useQuestion';
import './style.scss';

export default function Stages(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const questionIndex = useQuestionIndex();
  const remunerations = getRemunerations();

  if (!isOpen) {
    return (
      <div className="Stages">
        <MenuButton
          isOpen={isOpen}
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </div>
    );
  }

  return (
    <div className="Stages">
      <MenuButton
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <div className="Remunerations">
        {remunerations.map((remuneration, i) => {
          const classNames = ['Remuneration'];
          if (questionIndex === i) classNames.push('Active');
          else if (questionIndex > i) classNames.push('Passed');
          return (
            <p
              // eslint-disable-next-line react/no-array-index-key
              key={`stage-${i}-${remuneration}`}
              className={classNames.join(' ')}
            >
              {remuneration}
            </p>
          );
        })}
      </div>
    </div>
  );
}
