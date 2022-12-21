import { User } from "@styled-icons/feather";
import { ChevronDown, Open } from "@styled-icons/ionicons-sharp";
import { useSession } from "next-auth/react";
import { useState } from "react";
import styled from "styled-components";
import { PageRoute } from "../../../interfaces/PageRoute";
import Button from "../../Buttons/Button";
import Dropdown from "../../Dropdown";
import ProfileItem from "./ProfileItem";

const OpenDialogIcon = styled(Open)`
  ${({ theme }) => theme["--typical-icon-button"]}
`;

const profileRoutes: PageRoute[] = [
  { url: "", name: "Account", icon: <OpenDialogIcon /> },
  { url: "", name: "Profile" },
  { url: "", name: "Profile session" },
  { url: "", name: "Settings" },
];

const ProfileDropDownButton = styled(Button)`
  font-weight: 600;
  font-size: 0.9rem;
  min-width: 100%;
  padding-block: 0.5rem;
  padding-inline: 0.8rem;
  border-radius: ${({ theme }) => theme.fullrounded};
  background-color: #1c1917;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
`;

const ProfileDropDownList = styled.ul`
  all: unset;
  list-style: none;
  background-color: white !important;

  & > li:last-child {
    border-top: 1px solid gray;
    padding-top: 1rem;
    display: block;
  }
`;

const ProfileDropDownListItem = styled.li`
  display: block;
  height: 100%;
  padding-block: 0.9rem;

  :hover {
    cursor: pointer;
    /* background-color: blue; */
  }
`;

const UserIcon = styled(User)`
  height: 1.5rem;
  width: 1.5rem;
  background: darkgray;
  border-radius: ${({ theme }) => theme.fullrounded};
`;

const ChevronDownIcon = styled(ChevronDown)`
  height: 1rem;
  width: 1rem;
`;

const ProfileDropDown = styled(Dropdown)`
  &&& {
    background-color: #262626;
    width: 12rem;
  }
`;

const Username = styled.span`
  flex: 1;
`;

export default function Profile() {
  const { data } = useSession();

  const [show, setShow] = useState<boolean>(false);

  const handleOnShow = () => {
    setShow((o) => !o);
  };

  return (
    <ProfileDropDown
      button={
        <ProfileDropDownButton onClick={() => handleOnShow()}>
          <UserIcon />
          <Username>{data?.user?.name ?? "NaN"}</Username>
          <ChevronDownIcon />
        </ProfileDropDownButton>
      }
      show={show}
      setShow={setShow}
      menu={
        <ProfileDropDownList>
          {profileRoutes.map((profileRoute) => (
            <ProfileDropDownListItem key={profileRoute.name}>
              <ProfileItem name={profileRoute.name} icon={profileRoute.icon} />
            </ProfileDropDownListItem>
          ))}
          <ProfileDropDownListItem>
            <ProfileItem name="Logout" />
          </ProfileDropDownListItem>
        </ProfileDropDownList>
      }
    />
  );
}
