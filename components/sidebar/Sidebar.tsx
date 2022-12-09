import styled from "styled-components";
import SpotifyLogo from "../../icons/SpotifyLogo";
import ArrowButtons from "../ArrowButtons";
import Profile from "../header/profile/Profile";
import Navigation from "../nav/Navigation";

type SidebarProps = {
  className?: string;
};

const SidebarSpotifyLogo = styled(SpotifyLogo)`
  height: 100%;
  width: 100%;
`;

const Container = styled.aside`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.header`
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  padding-block: 2rem;
  padding-inline: 0.5rem;
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
        <Profile />
        <ArrowButtons />
      </SectionHeader>
      <Content>
        <Navigation />
      </Content>
      <SectionFooter>A clone</SectionFooter>
    </Container>
  );
}
