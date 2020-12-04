import React, { ReactNode } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { classNames } from "@/utils/components";

import styles from "@/styles/components/Logo.module.scss";

interface Props {
  isHome: boolean;
  siteName: string;
  children?: ReactNode;
  className?: string;
}

const Logo: NextPage<Props> = (data) => {
  const parentClass = classNames(styles.logo, data.className);
  const Tag = data.isHome ? "h1" : "div";

  return (
    <Tag className={parentClass}>
      <Link href="/">{data.siteName}</Link>
    </Tag>
  );
};

export default Logo;
