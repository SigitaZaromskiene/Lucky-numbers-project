import { useContext } from "react";
import styles from "../css/Navigation.module.css";
import { Global } from "./Global";
import Logout from "./Logout";

function Nav() {
  const { setRoute, route, logged, loggedUserName } = useContext(Global);
  return (
    <div className={styles["navigation-bar"]}>
      <div>
        <h2>LuckyNumbers</h2>
      </div>
      <div className={styles.nav}>
        <li
          className={route === "home" ? styles.active : ""}
          onClick={() => setRoute("home")}
        >
          Home
        </li>
        <li
          className={route === "numbers" ? styles.active : ""}
          onClick={() => setRoute("numbers")}
        >
          Numbers
        </li>
        <li
          className={route === "users" ? styles.active : ""}
          onClick={() => setRoute("users")}
        >
          Users
        </li>
      </div>
      <div className={styles.nav}>
        {logged ? (
          <>
            <p style={{ fontSize: "24px", color: "red" }}>
              Hello {loggedUserName}
            </p>
            <Logout></Logout>
          </>
        ) : (
          <>
            <li
              className={route === "login" ? styles.active : ""}
              onClick={() => setRoute("login")}
            >
              Login
            </li>
            <li
              className={route === "register" ? styles.active : ""}
              onClick={() => setRoute("register")}
            >
              Register
            </li>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
