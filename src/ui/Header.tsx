import styled from "styled-components";

import { IoIosNotificationsOutline } from "react-icons/io";

const HeaderComponent = styled.header`
  height: 10.1rem;
  /* padding: 0 32.5px; */
  width: 90%;
  /* background-color: red; */
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  width: 95%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  & > span:first-child {
    font-size: 28px;
    font-weight: 500;
    line-height: 36.46px;
    text-align: left;
  }

  & > span:nth-child(2) {
    font-size: 13.25px;
    font-weight: 700;
    line-height: 17.25px;
    text-align: left;
    width: 211.19px;
    height: 4.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 19px;

    & > span:nth-child(2) {
      height: 4.619rem;
      display: grid;
      align-items: center;
      position: relative;
      gap: 10px;

      & > span:last-child {
        /* content: ""; */
        width: 2.431rem;
        height: 2.431rem;
        border-radius: 50%;
        position: absolute;
        display: grid;
        align-items: center;
        justify-content: center;
        top: -3px;
        right: -10px;
        background-color: var(--color-purple-800);
        color: var(--color-gray-0);
      }
    }
  }
`;

const StyledIcon = styled.div`
  /* color: var(--color-gray-input-text); */
  transition: color 0.3s ease;
  width: 24.31px;
  height: 24.31px;
`;

export default function Header() {
  return (
    <HeaderComponent>
      <Nav>
        <span>Dashboard</span>
        <span>
          <span>bitcoin rate: &#x23;460/$1</span>
          <span>
            <StyledIcon as={IoIosNotificationsOutline} />
            <span>12</span>
          </span>
        </span>
      </Nav>
    </HeaderComponent>
  );
}
