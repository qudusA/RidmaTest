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
  margin-left: ${(props) => props.to === "/login" && "10px"};
`;

const Span = styled.span`
  & {
    display: grid;
    grid-template-columns: 30px 1fr;
    align-items: center;
    text-align: justify;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.8rem;
  }

  & > input {
    width: 2.6rem;
    height: 2.6rem;
    cursor: pointer;
    background-color: red;
  }
  & > label {
    cursor: pointer;
    & > span {
      text-transform: capitalize;
    }
  }
`;

// const arr: {}[] =[
//     {placeholder: "Username", type: "text", comment: ""}
// ]

export default function SignupForm() {
  return (
    <Form>
      <Input placeholder="Username" type="text" />
      <Input placeholder="Email Address" type="text" />
      <div>
        <PasswordInputField>
          <Input placeholder="Password" />
        </PasswordInputField>
        <P>
          Your password must contain at least 8 characters, one uppercase one
          lowercase and one number
        </P>
      </div>
      <PasswordInputField>
        <Input placeholder="Confirm Password" />
      </PasswordInputField>
      <Span>
        <Input placeholder="" type="checkBox" id="checkBok" />
        <label htmlFor="checkBok">
          By creating your account you have agreed to our <span>terms</span> and
          <span>conditions</span>.
        </label>
      </Span>

      <Button size="large" variation="secondary">
        Sign up
      </Button>

      <P bold="bold">
        Already have an account? <StyledLink to={"/login"}>log in</StyledLink>
      </P>
    </Form>
  );
}
