import { RootState } from "../redux/store";
import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Home = () => {
  const count = useAppSelector((state: RootState) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-6">
      <button
        onClick={() => dispatch(increment())}
        className="btn btn-active btn-primary"
      >
        Increment
      </button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())} className="btn">
        Decrement
      </button>
      <button
        onClick={() => dispatch(incrementByValue(3))}
        className="btn btn-secondary"
      >
        IncrementValue
      </button>
    </div>
  );
};

export default Home;
