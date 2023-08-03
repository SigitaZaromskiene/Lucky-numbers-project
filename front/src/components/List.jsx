import { useContext, useEffect } from "react";
import styles from "../css/List.module.css";
import Button from "./Button";
import { Global } from "./Global";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function List() {
  const { numberList } = useContext(Global);

  return (
    <ul className={styles["list-container"]}>
      {numberList?.map((li) => (
        <div className={styles.list} key={li.id}>
          <li>{li.number}</li>
          <div className={styles["list-buttons"]}>
            <Button text="Add"></Button>
            <Button text="Remove"></Button>
            <Button text="Delete"></Button>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default List;
