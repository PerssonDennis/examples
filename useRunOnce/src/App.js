import "./styles.css";
import useRunOnce from "./useRunOnce.js";

export default function App() {
  useRunOnce({
    fn: () => {
      console.log("Runs once on mount");
    }
  });

  useRunOnce({
    fn: () => {
      // This will not rerun when reloading the page.
      console.log("Runs once per session");
    },
    // Try to change this key.
    sessionKey: "changeMeAndFnWillRerun"
  });

  return (
    <div className="App">
      <h1>useRunOnce Hook</h1>
      <p>
        Run a hook once, either when a component is mounted or once per session.
      </p>
      <p>Look in console to see output.</p>
    </div>
  );
}
