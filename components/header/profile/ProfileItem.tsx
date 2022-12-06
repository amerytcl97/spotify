import { ReactElement, ReactNode } from "react";
import styled from "styled-components";

type ProfileItemProps = {
  name: string;
  icon?: ReactElement | ReactNode;
};

const ProfileItemContainer = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  padding-inline: 1rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default function ProfileItem({ name, icon = null }: ProfileItemProps) {
  return (
    <ProfileItemContainer>
      <span>{name}</span>
      {icon}
    </ProfileItemContainer>
  );
}
