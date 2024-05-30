import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./TimelineElement.module.css";
import { ITimelineElement } from "@/models/interfaces";

export default function TimelineElement(props: ITimelineElement) {
  return (
    <VerticalTimelineElement
      visible={true}
      position={'right'}
      className="vertical-timeline-element--work"
      contentStyle={{ background: "white", color: "black", border: "2px solid #fcd07b" }}
      contentArrowStyle={{ borderRight: "7px solid  #fcd07b" }}
      date="2011 - present"
      iconStyle={{ background: "red", color: "#fff" }}
      icon={<FontAwesomeIcon icon={faRocket} />}>
      <img src="/joblink_3.png"/>
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
    </VerticalTimelineElement>
  );
}
