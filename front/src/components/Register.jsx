import Button from "./Button";
import styles from "../css/Login.module.css";

function Register() {
  return (
    <div className={styles["login-form-container"]}>
      <form className={styles["register-form"]}>
        <h5>Please register</h5>
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
          <div className={styles["login-details"]}>
            <label>Repeat Password</label>
            <input></input>
          </div>
        </div>
        <Button text="Register"></Button>
      </form>
    </div>
  );
}

export default Register;
