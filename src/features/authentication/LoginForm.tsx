import styled, { css } from "styled-components";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import PasswordInputField from "../../ui/PasswordInputField";

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

// const arr: {}[] =[
//     {placeholder: "Username", type: "text", comment: ""}
// ]

export default function LoginForm() {
  return (
    <Form>
      <Input placeholder="Email Address" type="text" />
      <div style={{ textAlign: "justify" }}>
        <PasswordInputField>
          <Input placeholder="Password" />
        </PasswordInputField>
        <StyledLink to="/forgetpassword">forgot password?</StyledLink>
      </div>

      <Button size="large" variation="secondary">
        Login
      </Button>

      <P bold="bold">
        Don't have an account? <StyledLink to={"/signup"}>sign up</StyledLink>
      </P>
    </Form>
  );
}
