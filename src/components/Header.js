import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Main</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contacts</a>
          </li>
          <li>
            <button>Exit</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
