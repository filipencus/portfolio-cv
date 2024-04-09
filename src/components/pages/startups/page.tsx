"use client";
import BarActions from "@/components/shared/page-actions/BarActions";
import styles from "./page.module.css";
import WorkExperience from "@/components/shared/experience/WorkExperience";
import { experiencesStartups } from "@/models/startups";

export default function Startups() {
  return (
    <>
      <div className={styles.header}>
        <h1>
          MY ENTREPRENEUR STORY💡
        </h1>
      </div>

      <br />
      Hi 👋
      <br />
      <br />
      I'm Lone, and I am the maker of this tool.
      <br />
      <br />
      I reside in Copenhagen, where I work with product management. In that role, I often facilitate
      different kinds of creative processes, which is something I really enjoy!
      <br />
      <br />
      During the covid-19 lockdown, when everything suddenly had to be online, I realized how much
      extra effort you have to put into remote facilitation, and I wanted to do something about it!
      <br />
      <br />
      I decided to make a tool that.
      <br />
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div>
          <p>Short video about me (1min)</p>
          <div className={styles.videowrapper}>
            <iframe
              src="https://www.youtube.com/embed/__mSgDEOyv8?si=qF-OI0ZRdQlPP2Xq"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>
        <div>
          <p>Watch complete video</p>
          <div className={styles.videowrapper}>
            <iframe
              src="https://www.youtube.com/embed/6Itk4wnhuvQ?si=KjAFu1IwFd_HKh2t"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      
      <BarActions reduced={true}></BarActions>

      <br />
      <br />
      <hr />
      <br />
      <br />
      <h3 className="section-title">STARTUPS I FOUNDED</h3>
      <br />
      <br />

      <div className="experiences">
        {experiencesStartups.map((data, i, { length }) => (
          <WorkExperience
            key={data.id}
            data={data}
            isFirstOne={i === 0}
            isLastOne={i + 1 === length}></WorkExperience>
        ))}
      </div>

    </>
  );
}
