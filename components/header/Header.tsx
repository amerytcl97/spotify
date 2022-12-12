import styled, { css } from "styled-components";
import { ChevronBack, ChevronForward } from "@styled-icons/ionicons-sharp";
import TooltipButton from "../Buttons/TooltipButton";
import LoginStatus from "./LoginStatus";
import PageActions from "./PageActions";
import { useContext, useState } from "react";
import useLogin from "../../hooks/useLogin";
import Profile from "./profile/Profile";

type HeaderProps = {
  className?: string;
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 9999;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  width: calc(100% - ${({ theme }) => theme["--sidebar-width"]});
  backdrop-filter: blur(4px);
  padding-inline: 1.2rem;
  height: ${({ theme }) => theme["--header-height"]};
`;

const BackwardButton = styled(TooltipButton)`
  & > svg {
    ${({ theme }) => theme["--typical-icon-button"]}
  }
`;

const ForwardButton = styled(TooltipButton)`
  & > svg {
    ${({ theme }) => theme["--typical-icon-button"]}
  }
`;

const ArrowButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const PageActionsWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const ProfileWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

export default function Header({ className }: HeaderProps) {
  return (
    <HeaderContainer className={className}>
      {/* <ArrowButtonsWrapper className={className}>
        <BackwardButton title="Go back" placement="bottom" onClick={() => {}}>
          <ChevronBack />
        </BackwardButton>
        <ForwardButton title="Go forward" placement="bottom" onClick={() => {}}>
          <ChevronForward />
        </ForwardButton>
      </ArrowButtonsWrapper>
      <PageActionsWrapper>
        <PageActions />
      </PageActionsWrapper>
      <ProfileWrapper>
        <Profile />
      </ProfileWrapper> */}
      {/* <Profile /> */}
      {/*
       */}
    </HeaderContainer>
  );
}
