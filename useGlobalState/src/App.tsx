import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Two Componentents with shared global state</h1>
      <ComponentOne />
      <ComponentTwo />
    </div>
  );
}
