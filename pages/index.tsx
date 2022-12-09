import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import NewReleases from "../components/pages/home/NewReleases/NewReleases";
import { NewRelease } from "../interfaces/spotify";
import Layout from "../layouts/Layout";
import { authenticateSession } from "../utils/login";
import { getNewReleases } from "./api/spotify";

type HomeProps = {
  newReleases: NewRelease;
};

const HomeContainer = styled.div`
  min-height: 100vh;
`;

export default function Home<NextPageWithLayout>({ newReleases }: HomeProps) {
  useEffect(() => {}, [newReleases]);

  return (
    <HomeContainer>
      <NewReleases data={newReleases.albums.items} />
    </HomeContainer>
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

  const newReleases = ((await getNewReleases(session!)) as NewRelease) || {};

  return {
    props: {
      newReleases,
    },
  };
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
