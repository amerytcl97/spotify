import { XCircle } from "@styled-icons/feather";
import { Search } from "@styled-icons/ionicons-sharp";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../Buttons/Button";

type SearchInputProps = {
  onChange: (value: string) => void;
  value: string;
};

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
  padding-block: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const SearchForm = styled.form`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  background-color: #171717;
  padding-inline: 1rem;
  /* transition: all 0.5s; */

  &::after {
    transition: all 0.5s;
    background-color: none;
    content: " ";
    width: 0%;
    height: 0.1rem;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:focus-within {
    &::after {
      background-color: white;
      content: " ";
      width: 100%;
      height: 0.1rem;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
`;

export default function SearchInput({ onChange, value }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = (ev: any) => {
    onChange(ev.target.value);
  };

  useEffect(() => {
    const handleInputListener = (ev: any) => {
      if (ev.key === "/") {
        inputRef ? inputRef.current?.focus() : null;
      }
    };
    document.addEventListener("keypress", handleInputListener);
    return () => {
      document.removeEventListener("keypress", handleInputListener);
    };
  }, []);

  return (
    <SearchInputContainer>
      <SearchForm role="search">
        <SearchButton onClick={() => {}} type="submit">
          <Search />
        </SearchButton>
        <Input
          type="text"
          value={value}
          onChange={handleOnChange}
          placeholder="What do you want to listen to?"
          autoFocus
          ref={inputRef}
        />
        {value ? (
          <ClearButton onClick={() => onChange("")}>
            <XCircle />
          </ClearButton>
        ) : (
          <></>
        )}
      </SearchForm>
    </SearchInputContainer>
  );
}
