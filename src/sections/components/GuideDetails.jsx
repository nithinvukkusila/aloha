import guide from "../../assets/images/guide.jpeg";
import Button from "./Button";

const GuideDetails = () => {
    const customStyle = {
        background: "white",
        color: "#008080",
        border: "1px solid #008080",
      };
  return (
    <div className="guide">
      <div className="guide-details">
        <h2>Hadwin Malone</h2>
        <p>Guide since 2012</p>
        <Button text="Contact" customStyle={customStyle} />
      </div>
      <img src={guide} alt="guide pic" />
    </div>
  );
};
export default GuideDetails;
