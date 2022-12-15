import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../../../Title";

type RecentSearchProps = {
  data: [];
};

const List = styled.ul`
  list-style: none;
`;

export default function RecentSearch() {
  const [recentSearches, setRecentSearches] = useState<
    { title: string; artist: string }[]
  >([]);
  useEffect(() => {
    const getRecentSearches = () => {
      const items = localStorage.getItem("recentSearches");
      if (items) {
        setRecentSearches(JSON.parse(items));
      }
    };
    getRecentSearches();
  }, []);

  if (recentSearches.length > 0) {
    return (
      <section>
        <Title text="Recent Searches" />
        <List></List>
      </section>
    );
  }

  return null;
}
