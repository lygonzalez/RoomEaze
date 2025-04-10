import "./styling.css";

const circleStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  margin: "10px",
  display: "inline-block"
};

const Circle = ({ color }) => {
  return (
    <div style={{ ...circleStyle, backgroundColor: color }}></div>
  );
};

const CircleChoice = () => {
  return (
    <div className="color-bar-wrapper" style = {{width: 300, height: 75}}>
      <Circle color="pink" />
      <Circle color="blue" />
      <Circle color="green" />
      <Circle color="purple" />
    </div>
  );
};

export default CircleChoice;
