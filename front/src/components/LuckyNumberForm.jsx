import Button from "./Button";
import styles from "../css/Numbers.module.css";
import { Global } from "./Global";
import { useContext, useState } from "react";

function LuckyNumberForm() {
  const [luckyNumber, setLuckyNumber] = useState(1);
  const { setCreateNumber } = useContext(Global);

  const setLuckyNumberHandler = () => {
    setCreateNumber({
      number: parseInt(luckyNumber),
    });
    setLuckyNumber(1);
  };

  // useEffect(() => {
  //   if (numberList === null) {
  //     return;
  //   }
  //   axios
  //     .post(URL, numberList, { withCredentials: true })
  //     .then((res) => setResponseNumber(res.data));
  // }, [numberList]);

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
        <Button action={setLuckyNumberHandler} text="Add"></Button>
      </div>
    </form>
  );
}

export default LuckyNumberForm;
