import { useContext } from "react";
import styles from "../css/List.module.css";
import Button from "./Button";
import { useEffect } from "react";
import { Global } from "./Global";

function Users() {
  const { setUsersList } = useContext(Global);
  return (
    <div className={styles["users-container"]}>
      <ul className={styles["list-container"]}>
        <div className={styles.list}>
          <li>efww</li>
          <div className={styles["list-buttons"]}>
            <Button text="Delete"></Button>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Users;
