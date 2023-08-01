// Register.js
import React from "react";
import { Container } from "react-bootstrap";

const Register = () => {
  return (
    <Container>
      <h2>Register</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </Container>
  );
};

export default Register;
