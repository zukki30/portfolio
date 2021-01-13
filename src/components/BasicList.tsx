import React, { ReactNode } from "react";
import { NextPage } from "next";
import { classNames } from "@/utils/components";

import styles from "@/styles/components/BasicList.module.scss";

interface Props {
  items: string[];
  children?: ReactNode;
  className?: string;
}

const BasicList: NextPage<Props> = (data) => {
  const parentClass = classNames(styles.basicList, data.className);

  return (
    <ul className={parentClass}>
      {data.items.map((item, index) => (
        <li key={index} className={styles.basicList__item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default BasicList;
