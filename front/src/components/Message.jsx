import styles from "../css/Message.module.css";

function Message({ message }) {
  return (
    <div className={styles["message-container"]}>
      <div className={styles.message}>{message}</div>
    </div>
  );
}

export default Message;
