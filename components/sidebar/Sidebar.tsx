import Image from "next/image";
import styled from "styled-components";
import ArrowButtons from "../ArrowButtons";
import Profile from "../header/profile/Profile";
import Navigation from "../nav/Navigation";
import UserPlayList from "./UserPlaylist/UserPlaylist";

type SidebarProps = {
  className?: string;
};

const LogoContainer = styled.div`
  position: relative;
  height: 3rem;
  width: 3rem;
`;

const Logo = styled(Image)`
  object-fit: contain;
`;

const Container = styled.aside`
  padding-block: 0.8rem;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.header`
  padding-block: 0.5rem;
  padding-inline: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-block: 2rem;
  gap: 1.2rem;

  & > * {
    padding-inline: 1.5rem;
  }
`;

const SectionFooter = styled.footer`
  font-size: 0.8rem;
  text-align: center;
  font-weight: 300;
`;

export default function Sidebar({ className }: SidebarProps) {
  return (
    <Container className={className}>
      <SectionHeader>
        <LogoContainer>
          <Logo src="/images/logo_rgb_green.png" alt="Logo" fill />
        </LogoContainer>
        <ArrowButtons />
      </SectionHeader>
      <Content>
        <Navigation />
        <UserPlayList />
      </Content>
      <SectionFooter>
        <Profile />
      </SectionFooter>
    </Container>
  );
}
