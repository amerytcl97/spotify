import { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

type LayoutProps = {
  children: ReactElement | ReactNode;
};

const LayoutContainer = styled.div`
  min-height: 100vh;
`;

const LayoutSidebar = styled(Sidebar)`
  position: fixed;
  left: 0;
  min-height: calc(100% - ${(props) => props.theme["--footer-height"]});
  width: ${(props) => props.theme["--sidebar-width"]};
`;

const LayoutContent = styled.div`
  display: grid;
  grid-template-rows: ${(props) => props.theme["--header-height"]} 100%;
  margin-left: ${(props) => props.theme["--sidebar-width"]};
  margin-bottom: ${(props) => props.theme["--footer-height"]};
`;

const LayoutMain = styled.main`
  /* background-color: blue; */
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <LayoutSidebar />
      <LayoutContent>
        <Header />
        <LayoutMain>{children}</LayoutMain>
      </LayoutContent>
      <Footer />
    </LayoutContainer>
  );
}
