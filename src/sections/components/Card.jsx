import surfing from "../../assets/images/surfing.jpeg";
import rightArrow from "../../assets/images/right_arrow.svg";
const Card = ({ title, desc, image }) => {
  return (
    <div className="card">
      <img src={image} />
      <div className="info">
        <h2>{title}</h2>
        <p>{desc}</p>
          <img className="right-arrow" src={rightArrow} />
      </div>
    </div>
  );
};

export default Card;
