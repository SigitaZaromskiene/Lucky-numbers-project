import { useContext } from "react";
import styles from "../css/List.module.css";
import { Global } from "./Global";
import ButtonDelete from "./ButtonDelete";
import ButtonAdd from "./ButtonAdd";
import ButtonRemove from "./ButtonRemove";

function List() {
  const { numberList } = useContext(Global);

  return (
    <ul className={styles["list-container"]}>
      {numberList?.map((li) => (
        <div className={styles.list} key={li.id}>
          <li>{li.number}</li>
          <div className={styles["list-buttons"]}>
            <ButtonAdd li={li}></ButtonAdd>
            <ButtonRemove li={li}></ButtonRemove>
            <ButtonDelete li={li}></ButtonDelete>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default List;
