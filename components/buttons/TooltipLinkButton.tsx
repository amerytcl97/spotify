import Tooltip, { TooltipProps } from "../Tooltip";
import { ButtonProps } from "./Button";
import LinkButton, { LinkButtonProps } from "./LinkButton";

export type TooltipLinkButtonProps = Omit<
  ButtonProps,
  "onClick" | "children" | "type"
> &
  LinkButtonProps &
  Omit<TooltipProps, "children">;

export default function TooltipLinkButton(props: TooltipLinkButtonProps) {
  return (
    <Tooltip title={props.title} placement={props.placement}>
      <LinkButton href={props.href} className={props.className}>
        {props.children}
      </LinkButton>
    </Tooltip>
  );
}
