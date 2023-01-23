import './style.scss';

interface Props {
  action: () => void
  text: string
}

export default function ActionButton(props: Props): JSX.Element {
  const { action, text } = props;
  return (
    <button
      className="Button" //
      type="button"
      onClick={action}
    >
      {text}
    </button>
  );
}
