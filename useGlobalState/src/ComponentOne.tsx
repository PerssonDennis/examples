import useGlobalState from "./useGlobalState";

const PUBSUB_UNIQUE_KEY = "someUniqueKey";

const ComponentOne = () => {
  const [count, setCount] = useGlobalState<number>({
    initialState: 0,
    shareKey: PUBSUB_UNIQUE_KEY
  });

  return (
    <div>
      <h2>Component one</h2>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
};

export default ComponentOne;
