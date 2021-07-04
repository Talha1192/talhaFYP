import React, { useState } from "react";

import styles from "./Signin.module.css";
import avatar from "../../images/avatar.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    const user = JSON.stringify({
      email,
      password,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    console.log("Submit clicked", user);
    axios
      .post("https://cloudfyp.herokuapp.com/api/login", user, config)
      .then((res) => {
        console.log("LogedIn ", res);
        toast.success(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        // toast.error(res.data.message);
        toast.error(err.response.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(err.response.message);
      });
  };

  return (
    <div className="sign in">
      <div className={styles.box}>
        <img src={avatar} className={styles.avatar}></img>
        <h2>LOG IN</h2>
        <form onSubmit={handelSubmit}>
          <label>ENTER EMAIL </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="E-mail"
            placeholder="ENTER E-Mail"
          ></input>
          <label>PASSWORD</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="ENTER PASSWORD"
          ></input>
          <input type="submit" value="LOG IN" />
          <span>
            {" "}
            Dont have an Account? <Link to="/register">Register Now</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signin;
