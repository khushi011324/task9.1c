import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        setLoggedIn(true); // Set loggedIn to true after successful login
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Successfully signed out
        alert("You have been signed out successfully.");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
          {/* Conditionally render the "Sign Out" button after successful login */}
          {loggedIn && (
            <div>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
