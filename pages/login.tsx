import { GetServerSidePropsContext } from "next";
import { Provider } from "next-auth/providers";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "../components/Buttons/Button";

type LoginProps = {
  providers: Provider;
};

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  place-items: center;
  place-content: center;
  flex-direction: column;
  gap: 3rem;
`;

const LoginHeader = styled.article`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

const LoginButton = styled(Button)`
  font-weight: bold;
  font-size: 1.7rem;
  color: black;
  background-color: white;
  padding-block: 0.8rem;
  padding-inline: 2rem;
  border-radius: ${({ theme }) => theme.fullrounded};
`;

const LoginTitle = styled.h1`
  margin-block: 0;
  color: white;
  font-size: 3rem;
`;

const LoginDescription = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
`;

export default function Login({ providers }: LoginProps) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <LoginContainer key={provider.name}>
          <LoginHeader>
            <LoginTitle>Spotify</LoginTitle>
            <LoginDescription>
              This a Spotify clone, all authorization and data are from the
              Spotify API
            </LoginDescription>
          </LoginHeader>
          <LoginButton
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login
          </LoginButton>
        </LoginContainer>
      ))}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
