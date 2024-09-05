import HappyFamily from "../ui/HappyFamily";
import styled from "styled-components";
import SignupAndLoginBanner from "../ui/SignupAndLoginBanner";
import SignupForm from "../features/authentication/SignupForm";

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
    justify-content: center;
    align-items: center;
  }
`;

const RightDiv = styled.div`
  & {
    background: var(--color-gray-happy);
    height: 100vh;
    width: 57.43%;
    display: grid;
    align-items: center;
    justify-content: center;
  }
`;

export default function Signup() {
  return (
    <SignupAndLoginContainer>
      <LeftDiv>
        <SignupAndLoginBanner>
          <p>
            welcome <span>to</span> ridima
          </p>
          <p>please proceed to create an account</p>
          <SignupForm />
        </SignupAndLoginBanner>
      </LeftDiv>
      <RightDiv>
        <HappyFamily />
      </RightDiv>
    </SignupAndLoginContainer>
  );
}
