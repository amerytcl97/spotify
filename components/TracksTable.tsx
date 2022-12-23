import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type TrackListProps = {
  header: ReactElement | ReactNode;
  body: ReactElement | ReactNode;
};

const List = styled.div``;

const ListHeader = styled.div``;

const ListContent = styled.ul``;

export default function TrackList({ header, body }: TrackListProps) {
  return (
    <List>
      <ListHeader>{header}</ListHeader>
      <ListContent>{body}</ListContent>
    </List>
  );
}
