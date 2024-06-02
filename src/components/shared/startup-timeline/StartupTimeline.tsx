import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import StartupTimelineItem from "./startup-timeline-item/StartupTimelineItem";
import { experiencesStartups } from "@/models/startups";
import styles from "./StartupTimeline.module.css";

export default function StartupsTimeline() {
  return (
    <VerticalTimeline lineColor={"black"} layout={"1-column-left"}>
      {experiencesStartups.map((data, i, { length }) => (
        <StartupTimelineItem key={data.id} data={data}></StartupTimelineItem>
      ))}
      <VerticalTimelineElement
        visible={true}
        date="2010"
        contentStyle={{ background: "white", color: "black", border: "2px solid #fcd07b" }}
        contentArrowStyle={{ borderRight: "7px solid  #fcd07b" }}
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faChild} />}>
        <h3 className="vertical-timeline-element-title">Curiosity started...</h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
