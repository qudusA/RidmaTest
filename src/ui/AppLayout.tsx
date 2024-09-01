import { Outlet } from "react-router-dom";
// import Dashboard from "../pages/Dashboard";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const Section = styled.section`
  /* max-width: 144rem; */
  display: grid;
  grid-template-columns: 22.78% 77.22%;
  grid-template-rows: auto 1fr;
  height: 115rem;
  background-color: var(--color-gray-50);
  /* background-color: red; */
  /* max-height: 115rem; */
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
