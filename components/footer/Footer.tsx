import styled from "styled-components";
import Player from "../player/Player";

const FooterPlayer = styled(Player)``;

const FooterContainer = styled.footer`
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  width: 100%;
  padding-inline: 1rem;
  min-height: ${(props) => props.theme["--footer-height"]};
  background-color: #2a2a2a;
  border: 1px solid #727272;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0);
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Player />
    </FooterContainer>
  );
}
