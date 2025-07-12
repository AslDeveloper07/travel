import { travel } from "./data";
import Button from "./UI/Button";

const Travelers = ({ travel }) => {
  return (
    <div className="searchBar">
      {travel.map((srch, i) => (
        <div className="searchGroup" key={i}>
          <label>{srch.label}</label>
          <div className="inputWrapper">
            <span className="icon">
              {srch.icon}
            </span>
            <input type="text" placeholder={srch.placeholder}/>
          </div>
        </div>
      ))}
      <Button />
    </div>
  );
};

export default Travelers;
