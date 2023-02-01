const ProgressBar = ({ progress }) => {
  /* Random colors
  const colors = ["yellow", "red", "blue", "green"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  */
  // Color based on progress
  let color;
  if (progress < 10) {
    color = "red";
  } else if (progress < 33) {
    color = "yellow";
  } else if (progress < 66) {
    color = "turquoise";
  } else if (progress < 100) {
    color = "lightgreen";
  } else if (progress === 100) {
    color = "green";
  }
  console.log(progress, "-", color);
  return (
    <div className="outer-bar">
      <div
        className="inner-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: `${color}`,
          borderRadius: "7px",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
