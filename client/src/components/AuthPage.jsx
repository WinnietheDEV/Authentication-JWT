import { useEffect } from "react";
import React, { useGlobalContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";

const AuthPage = () => {
  const { state, dispatch, err, setErr } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErr({ status: false, msg: "" });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [err]);
  return (
    <section className="authentication">
      <div className="section-center">
        <header>
          <h2>{state.logIn && !state.register ? "Log in" : "Register"}</h2>
          <div className="close">x</div>
        </header>
        {err.status ? (
          <div className="alert">
            <h3>{err.message}</h3>
          </div>
        ) : (
          ""
        )}
        <section className="content">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <Form />
        </section>
      </div>
    </section>
  );
};

export default AuthPage;
