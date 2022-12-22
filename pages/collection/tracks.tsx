import { Heart, PlayCircle, Timer } from "@styled-icons/ionicons-sharp";
import { GetServerSidePropsContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { ReactElement, useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/Buttons/Button";
import TracksTable from "../../components/TracksTable";
import Layout from "../../layouts/Layout";
import { authenticateSession } from "../../utils/login";
import { getUserSavedTracks } from "../api/spotify";

type TracksProps = {
  userSavedTracks: SpotifyApi.UsersSavedTracksResponse;
};

const PageHeader = styled.header`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 15rem;
`;

const DecorationWrapper = styled.div`
  padding: 2rem;
  box-shadow: 0px 0px 25px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 25px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 25px -3px rgba(0, 0, 0, 0.75);
`;

const HeartDecoration = styled(Heart)`
  height: 5rem;
  width: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  /* line-height: 0rem; */
  flex: 1;
  /* background-color: red; */
`;

const Type = styled.span`
  color: white;
  font-size: 0.8rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 5rem;
  font-weight: bolder;
`;

const Description = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 1.5rem;
`;

const Content = styled.div``;

const ContentHeader = styled.div`
  
`;

const PlayButton = styled(Button)`
    height : 3.5rem;
    width : 3.5rem;
`

const PlayIcon = styled(PlayCircle)`
  height : inherit;
  width : inherit;
`

const SearchFilterWrapper = styled.div``;

export default function Tracks({ userSavedTracks }: TracksProps) {
  const { data: session } = useSession();

  
  useEffect(() => {
    const formatRelevantDataForTable = () => {
      const { items } = userSavedTracks;

    }
    if (userSavedTracks) {

    }
  }, [userSavedTracks])

  return (
    <div>
      <PageHeader>
        <DecorationWrapper>
          <HeartDecoration />
        </DecorationWrapper>
        <Wrapper>
          <Type>PLAYLIST</Type>
          <Title>Liked Songs</Title>
          <Description>
            {session?.user.name ?? "NaN"} • {userSavedTracks.total}{" "}
            {userSavedTracks.total > 1 ? "songs" : "song"}
          </Description>
        </Wrapper>
      </PageHeader>
      <Content>
        <ContentHeader>
          <PlayButton onClick={() => {}}>
            <PlayIcon />
          </PlayButton>
          <SearchFilterWrapper>
            
          </SearchFilterWrapper>
        </ContentHeader>
        <TracksTable data={[]} />
      </Content>
    </div>
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

  const userSavedTracks = await getUserSavedTracks(session!) || {};
  console.log("Check userSavedTracks", userSavedTracks);

  return {
    props: {
      userSavedTracks,
    },
  };
}

Tracks.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
