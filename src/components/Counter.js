import classes from "./Counter.module.css";
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {

  const dispatcher = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatcher({type: "INCR"})
  };

  const decrementHandler = () => {
    dispatcher({type: "DECR"})
  };

  const increaseHandler = () => {
    dispatcher({
      type: "ADD",
      number: 10
    })
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Counter</h1>
      <div className={classes.value}>{counter}</div>
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
