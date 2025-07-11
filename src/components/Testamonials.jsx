import { testamonialData } from "./data";
const yulduz = [1, 2, 3, 4, 5];

const Testamonials = () => {
  return (
    <div className="testamonial container">
      <h1 className="Testa_text">What Our Travelers Say</h1>
      <p className="Testa_text_p">
        Read testimonials from our satisfied customers
      </p>
      <div className="Test_container">
        {testamonialData.map((test, inx) => (
          <div className="TestamonialCard" key={inx}>
            <div className="stars">
              {yulduz.map((_, index) => (
                <span key={index}>{test.yulduzchalar}</span>
              ))}
            </div>
            <p className="about">{test.about}</p>
            <div className="usernameText">
              <img src={test.usrImage} alt={test.userName} />
              <div className="nameText">
                <h3 className="usename">{test.userName}</h3>
                <p className="location">{test.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testamonials;
