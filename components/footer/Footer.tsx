import styled from "styled-components";
import Player from "../player/Player";

const FooterPlayer = styled(Player)``;

const Container = styled.footer`
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  width: 100%;
  padding-inline: 1rem;
  min-height: ${(props) => props.theme["--footer-height"]};
  backdrop-filter: blur(0.2rem);
  background-color: #1c1917;
`;

export default function Footer() {
  return (
    <Container>
      <Player />
    </Container>
  );
}
