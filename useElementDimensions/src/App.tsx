import "./styles.css";
import DynamicComponent from "./DynamicComponent";
import StaticComponent from "./StaticComponent";

export default function App() {
  return (
    <div className="App">
      <h4>Resize window or scroll to see updates of values</h4>
      <StaticComponent />
      <DynamicComponent />
    </div>
  );
}
