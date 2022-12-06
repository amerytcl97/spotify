import { Heart } from "@styled-icons/feather";
import { useState } from "react";
import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";
import TooltipButton from "./TooltipButton";

type FavouriteButtonProps = Omit<ButtonProps, "children"> & {
  title?: string;
};

const FavouriteButtonContainer = styled(TooltipButton)`
  all: unset;
  padding: 0.5rem;
`;

const FavouriteButtonIcon = styled(Heart)<{ $favourite: boolean }>`
  width: 1.3rem;
  height: 1.3rem;
  color: white;
  fill: transparent;

  ${({ $favourite }) =>
    $favourite
      ? css`
          fill: green;
          color: transparent;
        `
      : undefined}
`;

export default function FavouriteButton({
  className,
  onClick,
  title = "",
}: FavouriteButtonProps) {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsFavourite((o) => !o);
  };

  return (
    <FavouriteButtonContainer
      onClick={handleOnClick}
      title={title}
      className={className}
    >
      <FavouriteButtonIcon $favourite={isFavourite} />
    </FavouriteButtonContainer>
  );
}
