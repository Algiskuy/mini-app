import React, { useState } from "react";
import "./Admin.css";

export default function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={submitHandler} className="formLogin">
      <div className="form-inner">
        <h2 className="login">LOGIN</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label className="labelLogin" htmlFor="name">
            Name:
          </label>
          <input
            className="ketik"
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label className="labelLogin" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="ketik"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label className="labelLogin" htmlFor="password">
            Password:
          </label>
          <input
            className="ketik"
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" /> <br />
        <br />
        <hr />
        <br />
        <a href="/" target="_blank">
          Buat Halaman
        </a>
        <span className="span"> untuk selebriti, merek, atau bisnis.</span>
      </div>
    </form>
  );
}
