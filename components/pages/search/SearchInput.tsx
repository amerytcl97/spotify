import { XCircle } from "@styled-icons/feather";
import { Search } from "@styled-icons/ionicons-sharp";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../buttons/Button";

const SearchInputContainer = styled.div`
  width: 100%;
`;

const SearchButton = styled(Button)`
  & > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const ClearButton = styled(Button)`
  & > svg {
    height: 2rem;
    width: 2rem;
  }
`;

const Input = styled.input`
  all: unset;
  width: 100%;
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  color: black;
  font-size: 0.8rem;
  border-radius: ${({ theme }) => theme.fullrounded};
  padding-inline: 0.7rem;
  height: 2.2rem;
  width: 35%;
  min-width: 12rem;
  padding-block: 0.2rem;
  gap: 0.5rem;
`;

export default function SearchInput() {
  const [query, setQuery] = useState<string>("");

  const handleOnChange = (ev: any) => {
    setQuery(ev.target.value);
  };

  return (
    <SearchInputContainer>
      <SearchForm role="search">
        <SearchButton onClick={() => {}} type="submit">
          <Search />
        </SearchButton>
        <Input
          type="search"
          value={query}
          onChange={handleOnChange}
          placeholder="What do you want to listen to?"
        />
        {query ? (
          <ClearButton onClick={() => setQuery("")}>
            <XCircle />
          </ClearButton>
        ) : (
          <></>
        )}
      </SearchForm>
    </SearchInputContainer>
  );
}
