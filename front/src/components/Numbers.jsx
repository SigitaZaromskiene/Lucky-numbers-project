import LuckyNumberForm from "./LuckyNumberForm";
import styles from "../css/Numbers.module.css";
import List from "./List";

function Numbers() {
  return (
    <div className={styles.luckyNumbersContainer}>
      <LuckyNumberForm></LuckyNumberForm>
      <List></List>
    </div>
  );
}

export default Numbers;
