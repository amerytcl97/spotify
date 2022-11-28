import { ReactElement, ReactNode } from "react";
import Tooltip, { TooltipProps } from "../Tooltip";
import Button, { ButtonProps } from "./Button";

type TooltipButtonProps = ButtonProps & { title: string } & Omit<
    TooltipProps,
    "children"
  >;

export default function TooltipButton(props: TooltipButtonProps) {
  return (
    <Tooltip title={props.title} placement={props.placement}>
      <Button onClick={props.onClick} className={props.className}>
        {props.children}
      </Button>
    </Tooltip>
  );
}
