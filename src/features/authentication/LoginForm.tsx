import styled, { css } from "styled-components";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import PasswordInputField from "../../ui/PasswordInputField";
import { useState } from "react";

type typeBold = "bold";

const Form = styled.form`
  width: 100%;
  display: grid;
  gap: 30px;
`;

const P = styled.p<{ bold?: typeBold }>`
  color: var(--color-black);
  font-size: 1.3rem;
  line-height: 1.693rem;
  font-weight: 400;
  text-align: justify;

  ${(props) =>
    props.bold
      ? css`
          font-weight: 700;
          font-size: 1.3rem;
          text-align: center;
        `
      : ""};
`;

const StyledLink = styled(Link)`
  color: var(--color-purple-800);
  font-size: 1.3rem;
  text-decoration: none;
  text-transform: capitalize;
  margin-left: ${(props) => props.to === "/signup" && "10px"};
`;

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function getData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/", { replace: true });
  }

  return (
    <Form onSubmit={getData}>
      <Input
        placeholder="Email Address"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div style={{ textAlign: "justify" }}>
        <PasswordInputField>
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </PasswordInputField>
        <StyledLink to="/forgetpassword">forgot password?</StyledLink>
      </div>

      <Button size="large" variation="secondary" type="submit">
        Login
      </Button>

      <P bold="bold">
        Don't have an account? <StyledLink to="/signup">sign up</StyledLink>
      </P>
    </Form>
  );
}
