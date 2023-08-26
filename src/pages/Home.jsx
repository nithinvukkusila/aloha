import Categories from "../sections/Categories";
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
      <Categories />
      <Footer />
    </>
  );
};
export default Home;
