import styles from "../css/Message.module.css";
import { Global } from "./Global";
import { useContext } from "react";

function Message() {
  const { message } = useContext(Global);
  return <div className={styles.message}>{message}</div>;
}

export default Message;
