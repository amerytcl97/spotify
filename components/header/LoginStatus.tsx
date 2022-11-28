import Link from "next/link";
import styled from "styled-components";
import Button from "../buttons/Button";
import LinkButton from "../buttons/LinkButton";

const LoginStatusContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2rem;
`;

const SignUpButton = styled(LinkButton)`
  font-weight: bold;
`;

const LoginButton = styled(LinkButton)`
  border-radius: ${({ theme }) => theme.fullrounded};
  background-color: white;
  color: black;
  font-weight: bold;
  padding-block: 0.8rem;
  padding-inline: 1.5rem;
  transition: all 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;

export default function LoginStatus() {
  return (
    <LoginStatusContainer>
      <SignUpButton href="">Sign up</SignUpButton>
      <LoginButton href="">Log in</LoginButton>
    </LoginStatusContainer>
  );
}