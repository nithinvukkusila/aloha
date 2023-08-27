import { categories } from "../../consts";
import rightArrow from '../../assets/images/right_arrow.svg'
const Categories = () => {
    
  return (
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
  );
};

export default Categories
