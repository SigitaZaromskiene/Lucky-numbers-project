import { useContext } from "react";
import styles from "../css/List.module.css";
import Button from "./Button";
import { Global } from "./Global";
import { v4 as uuidv4 } from "uuid";

function List() {
  const { numberList, setNumberList } = useContext(Global);
  return (
    <ul className={styles["list-container"]}>
      <div className={styles.list}>
        {numberList.map((li) => (
          <div key={uuidv4}>
            <li>{li.name}</li>
            <div className={styles["list-buttons"]}>
              <Button text="Add"></Button>
              <Button text="Remove"></Button>
              <Button text="Delete"></Button>
            </div>
          </div>
        ))}
      </div>
    </ul>
  );
}

export default List;
