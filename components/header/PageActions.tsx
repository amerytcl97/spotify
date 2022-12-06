import { useRouter } from "next/router";
import styled from "styled-components";
import SearchInput from "../pages/search/SearchInput";

const PageActionsContainer = styled.div``;

export default function PageActions() {
  const { pathname } = useRouter();

  const showPageComponent = () => {
    switch (pathname) {
      case "/search":
        return <SearchInput />;
      default:
        break;
    }
  };

  return <>{showPageComponent()}</>;
}
