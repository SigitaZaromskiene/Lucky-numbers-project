import Button from "./Button";
import styles from "../css/Numbers.module.css";
import { Global } from "./Global";
import { useContext } from "react";

function LuckyNumberForm() {
  const { luckyNumber, setLuckyNumber, setRoute, numbersList, setNumbersList } =
    useContext(Global);

  const setLuckyNumberHandler = () => {
    setNumbersList({
      luckyNumber: parseInt(luckyNumber),
    });
    setLuckyNumber(1);
  };

  console.log(numbersList);

  return (
    <form className={styles.luckyNumbersForm}>
      <h5>Please select your lucky number</h5>
      <div className={styles.border}></div>
      <div className={styles.numberForm}>
        <h4>Your number is: {luckyNumber}</h4>
        <label>Slide your number</label>
        <input
          type="range"
          min="0"
          max="99"
          value={luckyNumber}
          onChange={(e) => setLuckyNumber(e.target.value)}
        ></input>
        <Button text="Add" action={setLuckyNumberHandler}></Button>
      </div>
    </form>
  );
}

export default LuckyNumberForm;
