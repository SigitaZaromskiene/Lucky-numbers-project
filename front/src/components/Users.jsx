import { useContext } from "react";
import styles from "../css/List.module.css";
import { Global } from "./Global";
import ButtonDeleteUser from "./ButtonDeleteUser";

function Users() {
  const { usersList } = useContext(Global);

  return (
    <div className={styles["users-container"]}>
      <ul className={styles["list-container"]}>
        {usersList?.map((li) => (
          <div key={li.id} className={styles.list}>
            <li>{li.name}</li>
            <div className={styles["list-buttons"]}>
              <ButtonDeleteUser li={li} />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Users;
