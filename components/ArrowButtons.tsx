import styled from "styled-components";
import TooltipButton from "./Buttons/TooltipButton";
import { ChevronBack, ChevronForward } from "@styled-icons/ionicons-sharp";

type ArrowButtonsProps = {
  className?: string;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
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

export default function ArrowButtons({ className }: ArrowButtonsProps) {
  return (
    <Container className={className}>
      <BackwardButton title="Go back" placement="bottom" onClick={() => {}}>
        <ChevronBack />
      </BackwardButton>
      <ForwardButton title="Go forward" placement="bottom" onClick={() => {}}>
        <ChevronForward />
      </ForwardButton>
    </Container>
  );
}
