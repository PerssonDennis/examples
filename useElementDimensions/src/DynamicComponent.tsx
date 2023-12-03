import "./styles.css";
import useElementDimensions from "./useElementDimensions";

const DynamicComponent = () => {
  const { dimensions, ref } = useElementDimensions();
  const { height, width, x, y } = dimensions ?? {};

  return (
    <>
      <div ref={ref} className="box"></div>
      <h2>useElementDimensions Hook</h2>
      <p>(values does update on resize/scroll)</p>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </>
  );
};

export default DynamicComponent;
