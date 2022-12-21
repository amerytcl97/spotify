import { Timer } from "@styled-icons/ionicons-sharp";
import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type TracksTableProps = {
  headers: string[] | ReactElement[] | ReactNode[];
  data: any[];
};

const Table = styled.table`
  /* all: unset; */
  background-color: red;
  min-width: 100%;
  /* border-spacing: 1rem; */
  /* border-collapse: separate; */
`;

const TableHeader = styled.thead``;

const TableRow = styled.tr`
  gap: 1rem;
`;

const THCell = styled.th`
  /* font-weight: 400; */
  font-size: 0.8rem;
`;

const TimerIcon = styled(Timer)`
  height: 1.2rem;
  width: 1.2rem;
`;

export function TracksTable({ data }: TracksTableProps) {
  return (
    <Table>
      <thead>
        <TableRow>
          <THCell>#</THCell>
          <THCell>TITLE</THCell>
          <THCell>
            <TimerIcon />
          </THCell>
        </TableRow>
      </thead>
    </Table>
  );
}
