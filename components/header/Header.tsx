import styled, { css } from "styled-components";
import Button from "../buttons/Button";
import { ChevronBack, ChevronForward } from "@styled-icons/ionicons-sharp";
import SpotifyLogo from "../../icons/SpotifyLogo";
import Tooltip from "../Tooltip";
import TooltipButton from "../buttons/TooltipButton";
import HeaderNotLogin from "./PageActions";
import LoginStatus from "./LoginStatus";
import PageActions from "./PageActions";

type HeaderProps = {
  className?: string;
};

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  place-items: center;
  padding-inline: 1.5rem;
  backdrop-filter: blur(4px);
  justify-content: space-between;
  gap: 1rem;
  /* background-color: #e0e0e0; */
`;

const BackwardButton = styled(TooltipButton)`
  ${({ theme }) => theme["--typical-icon-button"]}
`;

const ForwardButton = styled(TooltipButton)`
  ${({ theme }) => theme["--typical-icon-button"]}
`;

const ArrowButtonsWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
`;

export default function Header({ className }: HeaderProps) {
  return (
    <HeaderContainer className={className}>
      <ArrowButtonsWrapper className={className}>
        <BackwardButton title="Go back" placement="bottom" onClick={() => {}}>
          <ChevronBack />
        </BackwardButton>
        <ForwardButton title="Go forward" placement="bottom" onClick={() => {}}>
          <ChevronForward />
        </ForwardButton>
      </ArrowButtonsWrapper>
      <PageActions />
      <LoginStatus />
    </HeaderContainer>
  );
}
