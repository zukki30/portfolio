import React, { ReactNode } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { classNames } from "@/utils/components";

import styles from "@/styles/components/Logo.module.scss";

export interface Props {
  isHome: boolean;
  children?: ReactNode;
  className?: string;
}

export const Logo: NextPage<Props> = (data) => {
  const parentClass = classNames(styles.logo, data.className);
  const Tag = data.isHome ? "h1" : "div";
  const siteName =
    process.env.SITE_NAME !== undefined ? process.env.SITE_NAME : "site name";

  return (
    <Tag className={parentClass}>
      <Link href="/">
        <a href="/" className="logo__link">
          {siteName}
        </a>
      </Link>
    </Tag>
  );
};

export default Logo;
