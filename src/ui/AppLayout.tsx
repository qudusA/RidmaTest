import { Outlet } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  display: grid;
  grid-template-columns: 22.78% 77.22%;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: var(--color-gray-50);
  /* background-color: red; */
  /* max-height: 115rem; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function AppLayout() {
  return (
    <Section>
      <Header />
      <SideBar />

      <Outlet />
    </Section>
  );
}
