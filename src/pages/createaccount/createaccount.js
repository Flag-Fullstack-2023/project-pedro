import Button from "../../components/button/button";
import Input from "../../components/input/input";
import axios from "axios";
import React, { useState } from "react";

import { ContainerCreate } from "./createaccount.style";
import { useNavigate } from "react-router-dom";

const Createaccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/login");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDq_DCx4aklBNibf1kl3KMil11DJpz7TlQ",
        {
          email,
          password,
        }
      )
      .then((response) => {
        setEmail("");
        setPassword("");
        setError("");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <ContainerCreate>
        <article>
          <img src="https://schedulecreation.com/logo.png" alt="logo" />
          <h1>Create Account </h1>
          <form onSubmit={handleLogin}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>{error && <p>{error}</p>}</div>
            <Button type="submit">Creat Account</Button>
            <Button onClick={handleCreateAccount}>Login</Button>
          </form>
        </article>
      </ContainerCreate>
    </>
  );
};

export default Createaccount;
