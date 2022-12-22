import { Timer } from "@styled-icons/ionicons-sharp";
import { formatDistance, subDays } from "date-fns";
import styled from "styled-components";
import { convertMsToMinSec } from "../utils/functions";

type TracksTableProps = {
  headers?: string[];
  data: any[];
};

const Table = styled.table`
  min-width: 100%;
  border-spacing: 0px;
  font-size: 0.9rem;
  color: lightgray;
  & > thead tr th {
    border-bottom: 1px solid white;
  }
`;

const TableHeader = styled.thead`
  & > tr {
    padding-bottom: 2rem;
    height: 2.5rem;
  }

  & > tr > :nth-child(1) {
    width: 2.5rem;
    /* background-color: red; */
  }
`;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  font-weight: 500;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: left;
  padding: auto;
`;

const TableBody = styled.tbody`
  & > tr > td {
    padding-block: 0.5rem;
  }
`;

const TitleArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding-right: 2rem;

  & > p {
    white-space: nowrap;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    color: white;
  }

  & > span {
    font-size: 0.8rem;
  }
`;

const Album = styled.p`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 20rem;
`;

const TimerIconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-color: red;
`;

const TimerIcon = styled(Timer)`
  height: 1.2rem;
  width: 1.2rem;
`;

export function TracksTable({ data: tracks, headers = [] }: TracksTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>#</TableHeaderCell>
          <TableHeaderCell>TITLE</TableHeaderCell>
          {headers.length
            ? headers.map((header) => (
                <TableHeaderCell key={header}>{header}</TableHeaderCell>
              ))
            : null}
          <TableHeaderCell>
            <TimerIconWrapper>
              <TimerIcon />
            </TimerIconWrapper>
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tracks.map(({ added_at, track }, index) => (
          <TableRow key={track.id}>
            <td>{index + 1}</td>
            <td>
              <TitleArtistWrapper>
                <p>{track.name}</p>
                <span>{track.artists[0].name}</span>
              </TitleArtistWrapper>
            </td>
            <td>
              <Album>{track.album.name}</Album>
            </td>
            <td>
              {formatDistance(new Date(added_at), new Date(), {
                addSuffix: true,
              })}
            </td>
            <td>{convertMsToMinSec(track.duration_ms)}</td>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
