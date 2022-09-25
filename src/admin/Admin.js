import React, { useState } from "react";
import LoginForm from "./LoginForm";

export default function Admin() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details,
      });
    } else {
      console.log("Details do not macth!");
      setError("Details do not macth!");
    }
    console.log("ket = id:admin@admin.com && pass:admin123");
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <>
      <div className="admin">
        {user.email !== "" ? (
          <div className="welcome">
            <h2 className="h2admin">
              welcome, <span>{user.name}</span>
            </h2>
            <button onClick={Logout} className="buttonAdmin">
              Logout
            </button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>
    </>
  );
}
