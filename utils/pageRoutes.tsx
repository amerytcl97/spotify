import { PageRoute } from "../interfaces/PageRoute";
import {
  Home,
  Search,
  Library,
  Heart,
  Create,
  Bookmark,
} from "@styled-icons/ionicons-sharp";
import { Plus, PlusSquare } from "@styled-icons/feather";

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
  {
    icon: <PlusSquare />,
    name: "Create Playlist",
    url: "",
  },
  {
    icon: <Heart />,
    name: "Liked Songs",
    url: "/collection/tracks",
  },
  {
    icon: <Bookmark />,
    name: "Your Episodes",
    url: "/collection/episodes",
  },
];

export { PAGE_ROUTES };
