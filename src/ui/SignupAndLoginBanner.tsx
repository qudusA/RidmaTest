import styled from "styled-components";
// import SignupForm from "../features/authentication/SignupForm";

type ChildrenProp = {
  children: React.ReactNode;
};

const Div = styled.div`
  & {
    width: 55.46%;
    margin: 0 auto;
    text-align: center;
  }
  & > p:nth-child(2) {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 3.069rem;
    color: var(--color-gray-900);
    line-height: 3.995rem;

    & > span {
      text-transform: lowercase;
    }
  }
  & > p:nth-child(3) {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--color-gray-2);
    margin-bottom: 60px;
    /* line-height: 1.953rem; */
  }
`;

export default function SignupAndLoginBanner({ children }: ChildrenProp) {
  return (
    <Div>
      <p>
        <img src="/logo.svg" alt="Ridima logo" />
      </p>
      {children}
    </Div>
  );
}
