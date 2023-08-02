import { useContext } from "react";
import styles from "../css/List.module.css";
import Button from "./Button";
import { useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";
import { useRead } from "./useRead";

function Users() {
  const { usersList } = useContext(Global);

  return (
    <div className={styles["users-container"]}>
      <ul className={styles["list-container"]}>
        {usersList?.map((li) => (
          <div className={styles.list}>
            <li>{li.name}</li>
            <div className={styles["list-buttons"]}>
              <Button text="Delete"></Button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Users;
