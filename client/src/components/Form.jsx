import React, { useGlobalContext } from "../context";
import axios from "axios";
import { useRef, useState } from "react";
export const Form = () => {
  const { state, dispatch, setErr } = useGlobalContext();

  const directRegister = () => {
    dispatch({
      type: "DIRECT_REGISTER",
    });
  };
  const directLogin = () => {
    dispatch({ type: "DIRECT_LOGIN" });
  };

  const directDashboard = () => {
    dispatch({ type: "DIRECT_DASHBOARD" });
  };

  const emailContainer = useRef();
  const passwordContainer = useRef();
  const userNameContainer = useRef();
  const formRef = useRef();

  const urlLogin = "http://localhost:3000/api/v1/login";
  const urlRegister = "http://localhost:3000/api/v1/register";

  const postLogIn = () => {
    const data = {
      email: emailContainer.current.value,
      password: passwordContainer.current.value,
    };
    axios
      .post(urlLogin, data)
      .then((res) => {
        // setToken(`Bearer ${res.data.token}`);
        const token = `Bearer ${res.data.token}`;
        localStorage.setItem("token", token);
      })
      .then(() => directDashboard())
      .catch((err) => {
        setErr({ status: true, message: err.response.data.msg });
      });
  };

  const postRegister = () => {
    const data = {
      email: emailContainer.current.value,
      password: passwordContainer.current.value,
      username: userNameContainer.current.value,
    };

    axios
      .post(urlRegister, data)
      .then((res) => {
        directLogin();
        console.log(res.data);
      })
      .catch((err) => {
        setErr({ status: true, message: err.response.data.msg });
      });
  };
  return (
    <>
      <form
        action="http://localhost:3000/api/v1/login"
        method="post"
        ref={formRef}
      >
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          ref={emailContainer}
        />
        <br />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          ref={passwordContainer}
        />
        {!state.logIn && state.register && (
          <>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              ref={userNameContainer}
            />
          </>
        )}
        <div className="btn-container">
          <button
            className="btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (state.logIn && !state.register) {
                postLogIn();
              } else {
                directLogin();
              }
            }}
          >
            {state.logIn && !state.register ? "log in" : "back"}
          </button>

          <button
            className="btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (state.logIn && !state.register) {
                directRegister();
              } else if (state.register && !state.logIn) {
                postRegister();
                formRef.current.reset();
              }
            }}
          >
            register
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
