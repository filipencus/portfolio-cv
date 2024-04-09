"use client";
import { experiences } from "@/models/experiences";
import WorkExperience from "@/components/shared/experience/WorkExperience";
import styles from "./page.module.css";
import BarActions from "@/components/shared/page-actions/BarActions";

export default function Experience() {
  return (
    <>
      <h3 className="section-title">WORK EXPERIENCE</h3>
      <br/>
      <br/>
      <div className="experiences">
        {experiences.map((data, i, { length }) => (
          <WorkExperience
            key={data.id}
            data={data}
            isFirstOne={i === 0}
            isLastOne={i + 1 === length}></WorkExperience>
        ))}
      </div>
      <BarActions></BarActions>
    </>
  );
}
