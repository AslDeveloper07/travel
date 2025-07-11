import Button from "./UI/Button";

const Hero = () => {
  return (
    <main className="Hero">
      <div className="HeroPage container">
        <h1>Discover the World's Most Amazing Places</h1>
        <p>
          Experience unforgettable journeys to breathtaking destinations. Let us
          take care of your travel dreams.
        </p>
        <div className="btnDiv">

          <button className="expBtn">Explore Destinations</button>
          <button className="LearnBtn">Learn More</button>

        </div>
      </div>
    </main>
  );
};

export default Hero;
