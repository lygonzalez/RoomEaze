const colors = ["#B9DDE3", "#FED4C1", "#F5E1FD", "#FFD700"];

const CircleChoice = ({ selectedColor, onColorSelect }) => {
  return (
    <div className="color-bar-wrapper">
      {colors.map((color) => (
        <div
          key={color}
          className="small-circles"
          style={{
            backgroundColor: color,
            border: selectedColor === color ? "3px solid black" : "2px solid transparent",
          }}
          onClick={() => onColorSelect(color)}
        />
      ))}
    </div>
  );
};

export default CircleChoice;

