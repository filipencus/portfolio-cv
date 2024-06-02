import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import StartupExperience from "../../startup-experience/StartupExperience";
import styles from "./StartupTimelineItem.module.css";

export default function StartupTimelineItem(props: any) {
  return (
    <VerticalTimelineElement
      visible={true}
      position={"right"}
      className="vertical-timeline-element--work"
      contentStyle={{ background: "white", color: "black", border: "2px solid #fcd07b" }}
      contentArrowStyle={{ borderRight: "7px solid  #fcd07b" }}
      // date={`${props.data.start} - ${props.data.end}`}
      dateClassName={'timeline-date-hide'}
      iconStyle={{ background: "#1d0dd2", color: "#fff" }}
      icon={<FontAwesomeIcon icon={faRocket} />}>
      <StartupExperience data={props.data}></StartupExperience>
    </VerticalTimelineElement>
  );
}
