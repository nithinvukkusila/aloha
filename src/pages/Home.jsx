import CategoriesAndGuide from "../sections/CategoriesAndGuide";
import Footer from "../sections/Footer";
import Highlights from "../sections/Highlights";
import Navbar from "../sections/Navbar";

const Home = () => {
  return (
    <>
      <div className="banner">
        <Navbar />
        <div className="heading">
          <p>Welcome</p>
          <p>to Hawaii</p>
        </div>
      </div>
      <Highlights />
      <CategoriesAndGuide />
      <Footer />
    </>
  );
};
export default Home;
