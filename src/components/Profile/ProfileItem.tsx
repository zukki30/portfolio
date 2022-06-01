import { ReactNode } from "react";
import { NextPage } from "next";
import Image from "next/image";

export interface ProfileItemProps {
  children?: ReactNode;
}

export const ProfileItem: NextPage<ProfileItemProps> = (props) => {
  return (
    <div>
      <Image src='https://placehold.jp/150x150.png' width={150} height={150} />
    </div>
  );
};

export default ProfileItem;
