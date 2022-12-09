import styled from "styled-components";
import Image from "next/image";
import TooltipLinkButton, { TooltipLinkButtonProps } from "./TooltipLinkButton";

type OpenSpotifyButtonProps = Omit<TooltipLinkButtonProps, "children">;

const Button = styled(TooltipLinkButton)`
  height: fit-content;
  width: fit-content;
`;

const ButtonImage = styled(Image)`
  object-fit: contain;
`;

export default function OpenSpotifyButton({
  href,
  className,
  title,
  placement,
}: OpenSpotifyButtonProps) {
  return (
    <Button
      href={href}
      title={title}
      placement={placement}
      className={className}
    >
      <ButtonImage
        src="/images/Spotify_Icon_RGB_Green.png"
        alt="Spotify"
        height={25}
        width={25}
      />
    </Button>
  );
}
