import { ReactNode } from "react";
import { NextPage } from "next";

export interface ProfileItemProps {
  children?: ReactNode;
}

export const ProfileItem: NextPage<ProfileItemProps> = (props) => {
  return <div>tset</div>;
};

export default ProfileItem;
