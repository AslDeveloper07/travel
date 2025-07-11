import { cardData } from "./data";
import Button from "./UI/Button";

const rate = [1, 2, 3, 4, 5];
const Popular = () => {
  return (
    <div className="popular container">
      <div className="text">
        <h1 className="card_text">Popular Destinations</h1>

        <p className="card_text_p">
          Explore our handpicked selection of the world's most breathtaking
          locations
        </p>
      </div>
      <div className="card_container ">
        {cardData.map((card, inx) => {
          return (
            <div className="cards" key={inx}>
              <div className="relative">
                <img src={card.image} alt={card.country} />
                <div className="absalute">
                  <h4 className="countrys">{card.country}</h4>
                  <p className="price">{card.price}</p>
                </div>
              </div>
              <div className="cardInfo">
                <div className="star">
                  {rate.map((_, inx) => {
                    return <span key={inx}>{card.starIcon}</span>;
                  })}
                  <p className="ratings">{card.rating}</p>
                </div>
                <Button name={'Details'} className="detailsBtn" />
              </div>
            </div>
          );
        })}
      </div>
      <Button name={'View All Destinations'} className="expBtn" />
    </div>
  );
};

export default Popular;
