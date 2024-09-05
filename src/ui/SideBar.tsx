import styled from "styled-components";
import { CiGrid42 } from "react-icons/ci";
import { LuHistory, LuWallet2 } from "react-icons/lu";
import { BiSolidBookmarkAltMinus } from "react-icons/bi";

import { MdArrowDropDown } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Article = styled.article`
  grid-row: 1 / -1;
  background-color: var(--color-gray-0);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Div = styled.div`
  width: 85.71%;
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
  gap: 30px;
`;

const Ul = styled.ul`
  list-style: none;
  width: 90%;
  margin: 0 auto;
  display: grid;
  gap: 20px;
`;

type ListArr = {
  title: string;
  icon: React.ElementType;
  to: string;
  key: number;
};

const sideList: ListArr[] = [
  { title: "Dashboard", icon: CiGrid42, to: "/dashboard", key: 1 },
  { title: "History", icon: LuHistory, to: "history", key: 2 },
  { title: "Wallet", icon: LuWallet2, to: "/wallet", key: 3 },
  { title: "Rates", icon: BiSolidBookmarkAltMinus, to: "/rates", key: 4 },
  { title: "Settings", icon: GoGear, to: "/setting", key: 5 },
];

const StyledIcon = styled.div`
  color: var(--color-gray-input-text);
  transition: color 0.3s ease;
  width: 21.86px;
  height: 21.86px;
`;

const Li = styled.li`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-radius: 15.43px;
  &:hover {
    background-color: var(--color-purple-800);
    color: var(--color-gray-0);
    cursor: pointer;
    & > ${StyledIcon} {
      color: var(--color-gray-0);
    }
  }
`;

const ProfileInfo = styled.article`
  display: grid;
  gap: 20px;
`;

const List1 = styled.div`
  width: 79.88%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 15.43px;
  background-color: var(--color-gray-0);
  color: var(--color-gray-800);
  border: 1px solid var(--color-gray-2);
  position: relative;

  & > span:nth-child(2) {
    width: 7.625rem;
    text-transform: capitalize;
    font-weight: 700;

    & > span {
      font-size: 1.29rem;
      color: var(--color-gray-input-text);
      font-weight: 400;
      text-transform: lowercase;
    }
  }
  & > span:nth-child(3) {
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  width: 79.88%;
  margin: 0 auto;

  &.active {
    color: var(--color-gray-0);
    border-radius: 15.43px;

    & > li {
      background-color: var(--color-purple-800);
      & > ${StyledIcon} {
        color: var(--color-gray-0) !important;
      }
    }
  }
`;

export default function SideBar() {
  return (
    <Article>
      <Div>
        <p style={{ width: "79.88%", textAlign: "center" }}>
          <img src="/logo.svg" alt="Ridima logo" width={"154"} />
        </p>
        <ProfileInfo>
          <List1>
            <span>
              <img src="/user.svg" alt="logged in user image" />
            </span>
            <span>
              hi john, <br /> <span>John@gmail.com</span>
            </span>
            <span>
              <StyledIcon as={MdArrowDropDown} />
            </span>
          </List1>
          <Ul>
            {sideList.map((list) => (
              <StyledNavLink to={list.to} key={list.key}>
                <List>
                  <StyledIcon as={list.icon} /> {list.title}
                </List>
              </StyledNavLink>
            ))}
          </Ul>
        </ProfileInfo>
      </Div>
    </Article>
  );
}

type ListProp = {
  children: React.ReactNode;
};

function List({ children }: ListProp) {
  return <Li>{children}</Li>;
}
