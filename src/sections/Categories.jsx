import { categories } from "../consts";
import rightArrow from "../assets/images/right_arrow.svg";
import guide from "../assets/images/guide.jpeg";
import Button from "./components/Button";
import SectionTitle from "./components/SectionTitle";
const Categories = () => {
  const customStyle = {
    background: "white",
    color: "#008080",
    border: "1px solid #008080",
  };
  return (
    <section className="light-bg">
      <div className="category-guide-info">
        <div className="category-info">
          <SectionTitle text="Categories" />
          <ul className="categories">
            {categories.map((category, index) => {
              return (
                <li key={index}>
                  <span>{category}</span>
                  <img src={rightArrow} alt="right arrow" />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="travel-guide">
          <SectionTitle text="Travel guide" />
          <p className="section-title"></p>
          <div className="guide">
            <div className="guide-details">
              <h2>Hadwin Malone</h2>
              <p>Guide since 2012</p>
              <Button text="Contact" customStyle={customStyle} />
            </div>
            <img src={guide} alt="guide pic" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Categories;
