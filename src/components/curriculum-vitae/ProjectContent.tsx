import React, { ReactNode } from "react";
import { NextPage } from "next";
import { HEADLINE_LEVEL } from "@/const/ElementTag";
import { classNames } from "@/utils/components";
import { Project } from "@/models/CurriculumVitae";
import styles from "@/styles/components/curriculum-vitae/ProjectContent.module.scss";

export interface Props {
  project: Project;
  index: number;
  level?: HEADLINE_LEVEL;
  children?: ReactNode;
  className?: string;
}

export const ProjectContent: NextPage<Props> = (data) => {
  const parentClass = classNames(styles.projectContent, data.className);
  const Tag = data.level ? data.level : HEADLINE_LEVEL.Level3;
  const project = data.project;
  const index = data.index;

  return (
    <section className={parentClass}>
      <Tag className={styles.projectContent__title}>
        プロジェクト{index + 1}: {project.title}
      </Tag>

      <div className={styles.projectContent__body}>
        <table className={styles.projectContent__table}>
          <tbody>
            <tr>
              <th className={styles.projectContent__headCell}>期間</th>
              <td className={styles.projectContent__cell}>{project.period}</td>
            </tr>
            <tr>
              <th className={styles.projectContent__headCell}>経験</th>
              <td className={styles.projectContent__cell}>
                {project.experiences && project.experiences.length > 0 && (
                  <ul className={styles.projectContent__experiences}>
                    {project.experiences.map((experience, i) => (
                      <li
                        key={`experience${i}`}
                        className={styles.projectContent__experiencesItem}
                      >
                        {experience}
                      </li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
          </tbody>
        </table>

        <div
          className={styles.projectContent__detail}
          dangerouslySetInnerHTML={{ __html: project.body }}
        />
      </div>
    </section>
  );
};

export default ProjectContent;
