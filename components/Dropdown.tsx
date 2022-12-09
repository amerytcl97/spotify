import { ReactElement, ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import useClickOutside from "../hooks/useClickOutside";

type DropdownProps = {
  button: ReactElement | ReactNode;
  menu: ReactElement | ReactNode;
  show: boolean;
  setShow: (show: boolean) => void;
  className?: string;
};

const DropdownContainer = styled.div`
  position: relative;
`;

const DropDownMenu = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  background-color: black;
  margin-top: 1rem;
  border-radius: 0.3rem;

  :focus-within {
    visibility: hidden;
    background-color: blue;
  }
`;

export default function Dropdown({
  button,
  show,
  setShow,
  menu,
  className,
}: DropdownProps) {
  const DropdownRef = useRef<HTMLDivElement>(null);

  const [isClickedOutside] = useClickOutside(DropdownRef);

  useEffect(() => {
    if (isClickedOutside) {
      setShow(false);
    }
  }, [isClickedOutside, setShow]);

  return (
    <DropdownContainer ref={DropdownRef}>
      {button}
      {show && !isClickedOutside ? (
        <DropDownMenu className={className}>{menu}</DropDownMenu>
      ) : null}
    </DropdownContainer>
  );
}
