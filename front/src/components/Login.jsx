import styles from "../css/Login.module.css";
import Button from "./Button";
import { Global } from "./Global";
import { useState, useContext } from "react";
import Message from "./Message";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  const {
    setMessage,
    message,
    logged,
    setLogged,
    setRoute,
    setLoggedUserName,
  } = useContext(Global);

  const loginHandler = (e) => {
    e.preventDefault();

    if (!name || !psw) {
      setMessage("Please fill all details");
      return;
    }

    axios
      .post(
        "http://localhost:3003/login",
        { name, psw },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        if (res.data.status === "ok") {
          setName("");
          setPsw("");
          setLoggedUserName(res.data.name);
          setLogged(true);
          setRoute("numbers");
        } else {
          setMessage("Wrong info");
        }
      });
  };

  return (
    <div className={styles["login-form-container"]}>
      <form className={styles.form}>
        {message ? <Message message={message} /> : <h5>Please login</h5>}

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
        <Button action={loginHandler} text="Login"></Button>
      </form>
    </div>
  );
}

export default Login;
