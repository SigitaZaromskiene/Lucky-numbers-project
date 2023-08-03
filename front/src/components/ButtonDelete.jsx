import { Global } from "./Global";
import { useContext } from "react";
import styles from "../css/Button.module.css";

function ButtonDelete({ li }) {
  const { setDeleteNumber } = useContext(Global);

  const deleteNumberHandler = () => {
    setDeleteNumber(li);
  };
  return (
    <button className={styles.button} onClick={deleteNumberHandler}>
      Delete
    </button>
  );
}

export default ButtonDelete;
