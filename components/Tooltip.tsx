import { ReactElement, ReactNode, useState } from "react";
import styled, { css } from "styled-components";
import { VerticalPlacement } from "../interfaces/interfaces";

export type TooltipProps = {
  children: ReactElement | ReactNode;
  title: string;
  placement?: VerticalPlacement;
};

const TooltipContainer = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
`;

const TooltipChildren = styled.div<{
  content: string;
  placement: VerticalPlacement;
}>`
  position: relative;
  transition: all;
  height: fit-content;
  width: fit-content;
  display: flex;
  :hover {
    ${({ placement, content }) =>
      placement === "top"
        ? css`
            ::before {
              content: "${content.toString()}";
              z-index: 9999;
              white-space: nowrap;
              display: block;
              position: absolute;
              border-width: 1px;
              border: 1px solid #282828;
              padding: 0.5rem;
              border-radius: 0.3rem;
              width: fit-content;
              margin-inline: block;
              top: -2.3rem;
              left: 50%;
              transform: translateX(-50%);
              font-size: 0.8rem;
              background-color: #282828;
              box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
            }
          `
        : css`
            ::after {
              content: "${content.toString()}";
              z-index: 9999;
              white-space: nowrap;
              display: block;
              position: absolute;
              border-width: 1px;
              border: 1px solid #282828;
              padding: 0.5rem;
              border-radius: 0.3rem;
              width: fit-content;
              margin-inline: block;
              top: 2.3rem;
              left: 50%;
              transform: translateX(-50%);
              font-size: 0.8rem;
              background-color: #282828;
              box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
            }
          `}
  }
`;

// const TooltipContent = styled.div<{ isHover?: boolean }>`
//   position: absolute;
//   top: 0;
//   display: none;
// `;

export default function Tooltip({
  children,
  title,
  placement = "top",
}: TooltipProps) {
  return (
    <TooltipContainer>
      {/* <TooltipContent>{title}</TooltipContent> */}
      <TooltipChildren content={title} placement={placement}>
        {children}
      </TooltipChildren>
    </TooltipContainer>
  );
}
