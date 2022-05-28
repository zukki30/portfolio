import { ReactNode } from "react";
import { NextPage } from "next";

export interface ProfileItemProps {
  children?: ReactNode;
}

export const ProfileItem: NextPage<ProfileItemProps> = (data) => {
  return <div>tset</div>;
};

export default ProfileItem;
