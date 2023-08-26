import surfing from "../assets/images/surfing.jpeg";
import { highlights } from "../consts";
import Card from "./components/Card";
const Highlights = () => {
  return (
    <section>
      <div className="container">
        <p className="section-title">Highlights</p>
        <div className="highlights">
          {highlights.map((highlight, index) => {
            return <Card key={index} {...highlight} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Highlights;
