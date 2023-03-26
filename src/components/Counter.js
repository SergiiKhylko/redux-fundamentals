import classes from "./Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store/counter-slice";

const Counter = () => {
  const dispatcher = useDispatch();
  const counter = useSelector(state => state.counter.value);
  const isCounterVisible = useSelector(state => state.counter.isCounterInvisible);

  const incrementHandler = () => {
    dispatcher(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatcher(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatcher(counterActions.increase(10))
  };

  const toggleCounterHandler = () => {
    dispatcher(counterActions.toggleCounterVisibility());
  };

  return (
    <main className={classes.counter}>
      <h1>Counter</h1>
      {!isCounterVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+10</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Hide / Show</button>
    </main>
  );
};

export default Counter;
