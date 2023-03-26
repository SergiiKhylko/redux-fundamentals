import classes from "./Auth.module.css";
import {useDispatch} from "react-redux";
import {userAuthActions} from "../store";

const Auth = () => {

  const dispatcher = useDispatch();

  const logInHandler = (event) => {
    event.preventDefault();
    dispatcher(userAuthActions.logIn());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={logInHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Enter</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
