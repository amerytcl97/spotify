import { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

type LayoutProps = {
  children: ReactElement | ReactNode;
};

const Container = styled.div`
  min-height: 100vh;
`;

const LayoutSidebar = styled(Sidebar)`
  position: fixed;
  left: 0;
  min-height: calc(100% - ${(props) => props.theme["--footer-height"]});
  width: ${(props) => props.theme["--sidebar-width"]};
`;

const Content = styled.div`
  /* display: grid;
   grid-template-rows: ${(props) => props.theme["--header-height"]} 100%; */
  margin-left: ${(props) => props.theme["--sidebar-width"]};
  margin-bottom: ${(props) => props.theme["--footer-height"]};
`;

const LayoutMain = styled.main`
  /* background-color: blue; */
  background-color: black;
  min-height: 100vh;
  /* padding-top: calc(${({ theme }) => theme["--header-height"]} + 1rem); */
  padding-block: 2rem;
  padding-inline: 2rem;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <LayoutSidebar />
      <Content>
        {/* <Header /> */}
        <LayoutMain>{children}</LayoutMain>
      </Content>
      <Footer />
    </Container>
  );
}
