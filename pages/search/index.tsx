import { GetServerSidePropsContext } from "next";
import { useSession, getSession } from "next-auth/react";
import { useEffect, ReactElement, useState, useCallback } from "react";
import styled from "styled-components";
import DefaultContent from "../../components/pages/search/DefaultContent";
import SearchContent from "../../components/pages/search/SearchContent/SearchContent";
import SearchInput from "../../components/pages/search/SearchInput";
import SwitchComponent from "../../components/pages/search/SwitchComponent";
import Layout from "../../layouts/Layout";
import { authenticateSession } from "../../utils/login";
import { getSearches, getAvailableGenres } from "../api/spotify";

type SearchProps = {
  genres: SpotifyApi.AvailableGenreSeedsResponse["genres"];
};

const Container = styled.div`
  min-height: 100vh;
`;

const Content = styled.div`
  height: 100%;
  margin-top: 1.5rem;
  animation: ${({ theme }) => theme["animation-fadein"]} 0.3s ease-in;
  padding-right: 1.5rem;
`;

export default function Search({ genres }: SearchProps) {
  const [query, setQuery] = useState<string>("");

  return (
    <Container>
      <SearchInput onChange={setQuery} value={query} />
      <Content>
        {query ? (
          <SearchContent query={query} />
        ) : (
          <DefaultContent genres={genres} />
        )}
      </Content>
    </Container>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);

  if (!authenticateSession(session)) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { genres } = (await getAvailableGenres(session!)) ?? {};

  return {
    props: {
      genres,
    },
  };
}

Search.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
