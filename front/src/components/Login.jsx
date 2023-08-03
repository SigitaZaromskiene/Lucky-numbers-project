import styles from "../css/Login.module.css";
import Button from "./Button";
import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  return (
    <div className={styles["login-form-container"]}>
      <form className={styles.form}>
        <h5>Please login</h5>
        <div className={styles.border}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "20px",
            marginTop: "30px",
          }}
        >
          <div className={styles["login-details"]}>
            <label>Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
          </div>
          <div className={styles["login-details"]}>
            <label>Password</label>
            <input onChange={(e) => setPsw(e.target.value)} value={psw}></input>
          </div>
        </div>
        <Button text="Login"></Button>
      </form>
    </div>
  );
}

export default Login;
