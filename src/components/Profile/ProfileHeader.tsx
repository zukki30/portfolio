import { ReactNode } from "react";
import { NextPage } from "next";

export interface ProfileHeaderProps {
  children?: ReactNode;
}

export const ProfileHeader: NextPage<ProfileHeaderProps> = (data) => {
  return <div>tset</div>;
};

export default ProfileHeader;