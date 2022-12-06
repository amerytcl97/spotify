import { ReactElement } from "react";
import styled from "styled-components";
import Layout from "../layouts/Layout";

const SearchContainer = styled.div`
  min-height: 100vh;
`;

export default function Search() {
  return (
    <SearchContainer>
      <div>Search</div>
    </SearchContainer>
  );
}

Search.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
