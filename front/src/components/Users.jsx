import styles from "../css/List.module.css";
import Button from "./Button";

function Users() {
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
