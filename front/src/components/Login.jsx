import styles from "../css/Login.module.css";
import Button from "./Button";

function Login() {
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
            <input></input>
          </div>
          <div className={styles["login-details"]}>
            <label>Password</label>
            <input></input>
          </div>
        </div>
        <Button text="Login"></Button>
      </form>
    </div>
  );
}

export default Login;
