import styled from "styled-components";
import { PAGE_ROUTES } from "../../utils/pageRoutes";
import NavigationItem from "./NavigationItem";

const NavigationContainer = styled.nav`
  width: 100%;
`;

const NavigationList = styled.ul`
  all: unset;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const NavigationListItem = styled.li`
  min-width: 100%;
`;

export default function Navigation() {
  return (
    <NavigationContainer>
      <NavigationList>
        {PAGE_ROUTES.map((page_route) => (
          <NavigationListItem key={page_route.url}>
            <NavigationItem
              icon={page_route.icon}
              name={page_route.name}
              url={page_route.url}
            />
          </NavigationListItem>
        ))}
      </NavigationList>
    </NavigationContainer>
  );
}
