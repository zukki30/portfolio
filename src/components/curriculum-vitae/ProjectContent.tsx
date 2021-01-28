import React, { ReactNode } from "react";
import { NextPage } from "next";
import { HEADLINE_LEVEL } from "@/const/ElementTag";
import { classNames } from "@/utils/components";
import { Project } from "@/models/CurriculumVitae";
import styles from "@/styles/components/curriculum-vitae/ProjectContent.module.scss";

interface Props {
  project: Project;
  index: number;
  level?: HEADLINE_LEVEL;
  children?: ReactNode;
  className?: string;
}

const ProjectContent: NextPage<Props> = (data) => {
  const parentClass = classNames(styles.project, data.className);
  const Tag = data.level ? data.level : HEADLINE_LEVEL.Level3;
  const project = data.project;
  const index = data.index;

  return (
    <section className={parentClass}>
      <Tag className="project__title">
        プロジェクト{index + 1}: {project.title}
      </Tag>

      <div className="project__body">
        <dl className="project__table">
          <dt className="project__head">期間</dt>
          <dd className="project__content">{project.period}</dd>

          <dt className="project__head">経験</dt>
          <dd className="project__content">
            <ul className="project__experiences">
              {project.experiences.map((experience, i) => (
                <li key={`experience${i}`} className="project__experiencesItem">
                  {experience}
                </li>
              ))}
            </ul>
          </dd>
        </dl>

        <div
          className="project__detail"
          dangerouslySetInnerHTML={{ __html: project.body }}
        />
      </div>
    </section>
  );
};

export default ProjectContent;
