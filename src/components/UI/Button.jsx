// ./UI/Button.jsx
import "./UI.css"; // stylelar shu faylda bo'lsa

const Button = ({ name, className = ""}) => {
  return (
    <button className={className ? className : "btn"}>{ name }</button>

  );
};

export default Button;