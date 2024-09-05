import LoginForm from "../features/authentication/LoginForm";

import HappyFamily from "../ui/HappyFamily";
import styled from "styled-components";
import SignupAndLoginBanner from "../ui/SignupAndLoginBanner";

const SignupAndLoginContainer = styled.section`
  & {
    display: flex;
    height: 100vh;
    max-width: 100vw;
    justify-content: center;
    align-items: center;
  }
`;

const LeftDiv = styled.div`
  & {
    background: var(--color-gray-0);
    height: 100%;
    width: 42.57%;
    display: grid;
    align-items: center;
  }
`;

const RightDiv = styled.div`
  & {
    background: var(--color-gray-happy);
    height: 100%;
    width: 57.43%;
    display: grid;
    align-items: center;
    justify-content: center;
  }
`;

export default function Login() {
  return (
    <SignupAndLoginContainer>
      <LeftDiv>
        <SignupAndLoginBanner>
          <p>
            welcome <span>to</span> ridima
          </p>
          <p>please proceed to create an account</p>
          <LoginForm />
        </SignupAndLoginBanner>
      </LeftDiv>
      <RightDiv>
        <HappyFamily />
      </RightDiv>
    </SignupAndLoginContainer>
  );
}
