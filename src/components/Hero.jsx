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
          <Button name="Explore Destinations" className="expBtn" />
          <Button name="Learn More" className="LearnBtn" />
        </div>
      </div>
    </main>
  );
};

export default Hero;