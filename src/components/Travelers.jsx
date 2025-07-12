import { travel } from "./data";

import Button from "./UI/Button";

const Travelers = () => {
  return (
    <div className="searchBar container">
      {travel.map((srch, i) => (
        <div className="searchGroup" key={i}>
          <label className="label">{srch.label}</label>
          <div className="inpFlex">
            <div className="inputWrapper">
              <span className="icon">{srch.srchIcon}</span>
              <input
                className="inpust"
                type="text"
                placeholder={srch.placeholder}
              />
            </div>

          </div>
        </div>
      ))}
      <Button name={"Seach"}  className="seacbtn" />
    </div>
  );
};

export default Travelers;
