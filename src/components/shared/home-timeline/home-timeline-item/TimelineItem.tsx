import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import WorkExperienceSmall from "../../experience/WorkExperienceSmall";
import styles from "./TimelineElement.module.css";

export default function HomeTimelineItem(props: any) {
  return (
    <VerticalTimelineElement
      visible={true}
      position={"right"}
      className="vertical-timeline-element--work"
      contentStyle={{ background: "white", color: "black", border: "2px solid #fcd07b" }}
      contentArrowStyle={{ borderRight: "7px solid  #fcd07b" }}
      date={`${props.data.start} - ${props.data.end}`}
      iconStyle={{ background: "#1d0dd2", color: "#fff" }}
      icon={<FontAwesomeIcon icon={faBriefcase} />}>
      <WorkExperienceSmall data={props.data}></WorkExperienceSmall>
    </VerticalTimelineElement>
  );
}
