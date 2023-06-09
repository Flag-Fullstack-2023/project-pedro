import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import overlay_3 from "_assets/images/overlay_3.jpg";
import logo from "_assets/images/logo.png";
import { GiFrankensteinCreature } from "react-icons/gi";
import {
  ErrorMessage,
  Input,
  Fieldset,
  Form,
  NewUserText,
  LoginTitle,
  LoginContainer,
  Section,
} from "./createaccount.style";

import { Button } from "_components/atoms";

const Createaccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
    <Section>
      <LoginContainer>
        <img src={logo} alt="logo" />
        <GiFrankensteinCreature size={52} />
        <LoginTitle>Create Account</LoginTitle>
        <NewUserText>
          <span>Have Account?</span>
          <Link to="/login">Login</Link>
        </NewUserText>

        <Form onSubmit={handleLogin}>
          <Fieldset>
            <br />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Fieldset>
          <Fieldset>
            <br />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Fieldset>
          <br />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <br />
          <Button type="submit">Create Account</Button>
        </Form>
      </LoginContainer>

      <img className="imagem" src={overlay_3} alt="Logo" />
    </Section>
  );
};
export default Createaccount;
