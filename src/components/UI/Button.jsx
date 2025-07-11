import "./UI.css";
export const Button = ({ name, style }) => {
  return <button className="btn" style={style}>{(name )}</button>;
};

export default Button;
