import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type TracksTableProps = {
  headers: string[] | ReactElement[] | ReactNode[];
  data: any[];
};

const Table = styled.table`
  all: unset;
  /* border-spacing: 1rem; */
  /* border-collapse: separate; */
`;

const TableHeader = styled.thead``;

const TableRow = styled.tr`
  gap: 1rem;
`;

const THCell = styled.th``;

export function TracksTable({ data }: TracksTableProps) {
  return (
    <Table>
      <thead>
        <TableRow>
          <th>#</th>
          <th>Title</th>
        </TableRow>
      </thead>
    </Table>
  );
}
