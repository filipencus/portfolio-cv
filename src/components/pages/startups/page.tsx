"use client";
import BarActions from "@/components/shared/page-actions/BarActions";
import styles from "./page.module.css";
import WorkExperience from "@/components/shared/experience/WorkExperience";
import { experiencesStartups } from "@/models/startups";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import TimelineElement from "@/components/shared/timeline-element/TimelineElement";

export default function Startups() {
  return (
    <>
      <div className={styles.header}>
        <h1>MY ENTREPRENEUR STORY💡</h1>
      </div>
      <br />
      Hi 👋
      <br />
      <br />
      I am Lone, and I am the maker of this tool.
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


      <VerticalTimeline lineColor={'black'}>
        <TimelineElement id="1"></TimelineElement>
        <VerticalTimelineElement
               visible={true}
      position={'right'}
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faHtml5} />}>
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
               visible={true}
      position={'right'}
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faHtml5} />}>
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
               visible={true}
      position={'right'}
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faHtml5} />}>
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
               visible={true}
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faHtml5} />}>
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
               visible={true}
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faHtml5} />}>
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
               visible={true}
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faHtml5} />}>
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faHtml5} />}
        />
      </VerticalTimeline>


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
