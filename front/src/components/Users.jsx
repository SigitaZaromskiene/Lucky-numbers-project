import { useContext } from "react";
import styles from "../css/List.module.css";
import Button from "./Button";
import { Global } from "./Global";

function Users() {
  const { usersList, setDeleteUsers } = useContext(Global);

  return (
    <div className={styles["users-container"]}>
      <ul className={styles["list-container"]}>
        {usersList?.map((li) => (
          <div key={li.id} className={styles.list}>
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
