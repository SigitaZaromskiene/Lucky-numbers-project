import { Global } from "./Global";
import { useContext } from "react";
import styles from "../css/Button.module.css";

function ButtonRemove({ li }) {
  const { setEditNumber } = useContext(Global);

  const addToNumberHandler = () => {
    setEditNumber({
      number: parseInt(li.number - 1),
      id: li.id,
    });
  };

  return (
    <button className={styles.button} onClick={addToNumberHandler}>
      Remove
    </button>
  );
}

export default ButtonRemove;
