import { PageRoute } from "../interfaces/PageRoute";
import { Home, Search, Library } from "@styled-icons/ionicons-sharp";
import styled from "styled-components";

const SearchIcon = styled(Search)``;

const PAGE_ROUTES: PageRoute[] = [
  {
    icon: <Home />,
    name: "Home",
    url: "/",
  },
  {
    icon: <Search />,
    name: "Search",
    url: "/search",
  },
  {
    icon: <Library />,
    name: "Your Library",
    url: "/collection/playlists",
  },
];

export { PAGE_ROUTES };
