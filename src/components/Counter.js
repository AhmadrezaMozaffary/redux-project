import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counterVal = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incHandler = () => {
    if (show) dispatch(counterActions.increment());
  };

  const decHandler = () => {
    if (show) dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterVal}</div>}
      <div>
        <button onClick={incHandler}>+1</button>
        <button onClick={decHandler}>-1</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
