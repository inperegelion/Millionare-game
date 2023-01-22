// import './style.scss';

import { getRemunerations } from '../../../config';
import useQuestionIndex from '../../../hooks/useQuestion';

export default function Stages(): JSX.Element {
  const questionIndex = useQuestionIndex();
  const remunerations = getRemunerations();
  return (
    <div className="Stages">
      {remunerations.map((remuneration, i) => (
        <p
          // eslint-disable-next-line react/no-array-index-key
          key={`stage-${i}-${remuneration}`}
          style={questionIndex === i ? { fontWeight: 'bold' } : {}}
        >
          {remuneration}
        </p>
      ))}
    </div>
  );
}
