import styled from "styled-components";
import SpotifyLogo from "../../icons/SpotifyLogo";
import Navigation from "../nav/Navigation";

type SidebarProps = {
  className?: string;
};

const SidebarSpotifyLogo = styled(SpotifyLogo)`
  height: 100%;
  width: 100%;
`;

const SidebarFooter = styled.footer`
  font-size: 0.8rem;
  text-align: center;
  font-weight: 300;
`;

const SidebarContent = styled.div`
  display: flex;
  flex: 1;
  padding-block: 2rem;
  padding-inline: 0.5rem;
`;

const SidebarHeader = styled.header`
  padding: 0.5rem;
`;

const SidebarContainer = styled.aside`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
`;

export default function Sidebar({ className }: SidebarProps) {
  return (
    <SidebarContainer className={className}>
      <SidebarHeader>
        <SidebarSpotifyLogo />
      </SidebarHeader>
      <SidebarContent>
        <Navigation />
      </SidebarContent>
      <SidebarFooter>A clone</SidebarFooter>
    </SidebarContainer>
  );
}
