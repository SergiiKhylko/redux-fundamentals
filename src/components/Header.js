import classes from "./Header.module.css";
import {useDispatch, useSelector} from "react-redux";
import {userAuthActions} from "../store/user-auth-slice";

const Header = () => {
  const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);
  const dispatcher = useDispatch();

  const signOutHandler = () => {
    dispatcher(userAuthActions.signOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Main</a>
          </li>
          {isUserLoggedIn && (
            <li>
              <a href="/">My profile</a>
            </li>
          )}
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contacts</a>
          </li>
          <li>
            {isUserLoggedIn && <button onClick={signOutHandler}>Exit</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
