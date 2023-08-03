import Button from "./Button";
import styles from "../css/Login.module.css";
import { useState, useContext } from "react";
import { Global } from "./Global";
import axios from "axios";
import Message from "./Message";

function Register() {
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");
  const [psw2, setPsw2] = useState("");

  const { setRoute, setMessage, message } = useContext(Global);

  const registerHandler = (e) => {
    e.preventDefault();
    if (name < 3) {
      setMessage("Name is too short");
    }

    if (psw !== psw2) {
      setMessage("Passwords do not match");
    }

    if (!psw || !name || !psw2) {
      setMessage("Please fill all details");
    }
    axios
      .post(
        "http://localhost:3003/register",
        { name, psw },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === "ok") {
          setRoute("login");
          setName("");
          setPsw("");
          setPsw2("");
        } else {
          setRoute("register");
        }
      });
  };

  return (
    <div className={styles["login-form-container"]}>
      <form className={styles["register-form"]}>
        {message ? <Message /> : <h5>Please register</h5>}
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
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className={styles["login-details"]}>
            <label>Password</label>
            <input
              type="number"
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
            ></input>
          </div>
          <div className={styles["login-details"]}>
            <label>Repeat Password</label>
            <input
              type="number"
              value={psw2}
              onChange={(e) => setPsw2(e.target.value)}
            ></input>
          </div>
        </div>
        <Button action={registerHandler} text="Register"></Button>
      </form>
    </div>
  );
}

export default Register;
