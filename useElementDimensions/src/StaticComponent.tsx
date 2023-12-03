import "./styles.css";
import useStaticElementDimensions from "./useStaticElementDimensions";

const StaticComponent = () => {
  const { dimensions, ref } = useStaticElementDimensions();
  const { height, width, x, y } = dimensions ?? {};

  return (
    <>
      <div ref={ref} className="box"></div>
      <h2>useStaticElementDimensions Hook</h2>
      <p>(values will not update on resize/scroll)</p>
      <p>Height: {height}</p>
      <p>Width: {width}</p>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </>
  );
};

export default StaticComponent;
