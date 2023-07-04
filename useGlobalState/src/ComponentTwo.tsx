import useGlobalState from "./useGlobalState";

const PUBSUB_UNIQUE_KEY = "someUniqueKey";

const ComponentTwo = () => {
  const [count, setCount] = useGlobalState<number>({
    initialState: 0,
    shareKey: PUBSUB_UNIQUE_KEY
  });

  return (
    <div>
      <h2>Component two</h2>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count - 1)}>Subtract 1</button>
    </div>
  );
};

export default ComponentTwo;
