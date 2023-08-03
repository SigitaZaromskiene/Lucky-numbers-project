import { Global } from "./Global";
import { useContext } from "react";
import styles from "../css/Button.module.css";

function ButtonDeleteUser({ li }) {
  const { setDeleteUsers } = useContext(Global);

  const deleteUserHandler = () => {
    setDeleteUsers(li);
  };
  return (
    <button className={styles.button} onClick={deleteUserHandler}>
      Delete
    </button>
  );
}

export default ButtonDeleteUser;
