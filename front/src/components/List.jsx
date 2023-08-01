import styles from "../css/List.module.css";
import Button from "./Button";

function List() {
  return (
    <ul className={styles["list-container"]}>
      <div className={styles.list}>
        <li>efww</li>
        <div className={styles["list-buttons"]}>
          <Button text="Add"></Button>
          <Button text="Remove"></Button>
          <Button text="Delete"></Button>
        </div>
      </div>
      <li className={styles.list}>rwawe</li>
      <li className={styles.list}>rw3e</li>
      <li className={styles.list}>rwer</li>
      <li className={styles.list}>rw3eq</li>
    </ul>
  );
}

export default List;
