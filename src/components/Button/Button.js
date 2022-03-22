import "./Button.css";

export const Button = (props) => {
  return (
    <button
      className={`button ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
