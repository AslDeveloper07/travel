import Button from "./UI/Button";

const Advinture = () => {
  return (
    <div className="advinture">
      <div className="container">
        <h1 className="advinture_text">Ready for Your Next Adventure?</h1>
        <p className="advinture_text_p">
          Sign up for our newsletter to receive exclusive travel deals and
          inspiration.
        </p>
        <div className="search">
          <input type="text" placeholder="Enter Your email" />
          <Button name={"Subscribe"} className="LearnBtn"/>
        </div>
        <span className="inputbottom">
          We respect your privacy. Unsubscribe at any time.
        </span>
      </div>
    </div>
  );
};

export default Advinture;
