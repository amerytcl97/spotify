import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { ReactElement, useEffect } from "react";
import styled from "styled-components";
import NewReleases from "../components/pages/home/NewReleases/NewReleases";
import { NewRelease } from "../interfaces/spotify";
import Layout from "../layouts/Layout";
import { authenticateSession } from "../utils/login";
import { getFeaturedPlaylists, getNewReleases } from "./api/spotify";

type HomeProps = {
  newReleases: NewRelease;
  featuredPlaylists: any;
};

const HomeContainer = styled.div`
  min-height: 100vh;
`;

export default function Home<NextPageWithLayout>({
  newReleases,
  featuredPlaylists,
}: HomeProps) {
  useEffect(() => {}, [newReleases, featuredPlaylists]);

  console.log("Check featured playlists", featuredPlaylists);

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

  const [newReleases, featuredPlaylists] = await Promise.all([
    getNewReleases(session!),
    getFeaturedPlaylists(session!),
  ]);

  // const newReleases = ((await getNewReleases(session!)) as NewRelease) || {};

  return {
    props: {
      newReleases,
      featuredPlaylists,
    },
  };
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
