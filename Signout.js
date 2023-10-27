import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import styles from "./Signout.module.css";

function Signout() {
  const navigate = useNavigate();
  const [signoutError, setSignoutError] = useState("");
  const [signoutButtonDisabled, setSignoutButtonDisabled] = useState(false);

  const handleSignout = () => {
    setSignoutButtonDisabled(true);
    signOut(auth)
      .then(() => {
        setSignoutButtonDisabled(false);
        navigate("/login");
      })
      .catch((error) => {
        setSignoutButtonDisabled(false);
        setSignoutError(error.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signout</h1>

        <div className={styles.footer}>
          <b className={styles.error}>{signoutError}</b>
          <button onClick={handleSignout} disabled={signoutButtonDisabled}>
            Signout
          </button>
          <p>
            Go back to the{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signout;
