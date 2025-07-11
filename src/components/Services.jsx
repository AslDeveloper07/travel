import { ServiceData } from "./data";

const Services = () => {
  return (
    <div className="services">
      <div className=" container">
        <h1 className="Serves_text">Our Services</h1>
        <p className="Serves_text_p">
          We provide comprehensive travel services to make your journey seamless
        </p>
        <div className="setvice_contain">
          {ServiceData.map((Serves, inx) => {
            return (
              <div className="Service_card" key={inx}>
               <div className="airIcons">
                 {Serves.airIcon}
               </div>

                <h2>{Serves.title}</h2>
                <p>{Serves.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
