import { XCircle } from "@styled-icons/feather";
import { SearchCircle } from "@styled-icons/ionicons-sharp";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { ReactElement } from "react";
import styled from "styled-components";
import AvailableGenres from "../components/pages/search/AvailableGenres/AvailableGenres";
import Layout from "../layouts/Layout";
import { authenticateSession } from "../utils/login";
import { getAvailableGenres } from "./api/spotify";

type SearchProps = {
  availableGenres: string[];
};

const Container = styled.div`
  min-height: 100vh;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  background-color: #171717;
  padding-inline: 1rem;
  /* transition: all 0.5s; */

  &::after {
    transition: all 0.5s;
    background-color: none;
    content: " ";
    width: 0%;
    height: 0.1rem;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:focus-within {
    &::after {
      background-color: white;
      content: " ";
      width: 100%;
      height: 0.1rem;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

const SearchInput = styled.input`
  all: unset;
  display: block;
  width: 100%;
  padding-block: 1.5rem;
  font-size: 1.5rem;
  font-weight: bolder;
  margin: 0;
`;

const Content = styled.div``;

const SearchIcon = styled(SearchCircle)`
  height: 2.3rem;
  width: 2.3rem;
`;

const ClearIcon = styled(XCircle)`
  height: 2.3rem;
  width: 2.3rem;
`;

export default function Search({ availableGenres }: SearchProps) {
  return (
    <Container>
      <SearchWrapper>
        <SearchIcon />
        <SearchInput type="text" placeholder="Search your favourite music..." />
        <ClearIcon />
      </SearchWrapper>
      <Content>
        <AvailableGenres data={availableGenres} />
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

  const { genres: availableGenres } = await getAvailableGenres(session!);

  return {
    props: {
      availableGenres,
    },
  };
}

Search.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
