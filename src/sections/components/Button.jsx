const Button = ({ text, customStyle}) => {
 
  return (
    <button className="btn" style={customStyle}>
      {text}
    </button>
  );
};
export default Button;
