
import SectionTitle from "./components/SectionTitle";
import Categories from "./components/Categories";
import GuideDetails from "./components/GuideDetails";
const CategoriesAndGuide = () => {
  return (
    <section className="light-bg">
      <div className="category-guide-info">
        <div className="category-info">
          <SectionTitle text="Categories" />
          <Categories />
        </div>
        <div className="travel-guide">
          <SectionTitle text="Travel guide" />
          <GuideDetails />
        </div>
      </div>
    </section>
  );
};
export default CategoriesAndGuide;
