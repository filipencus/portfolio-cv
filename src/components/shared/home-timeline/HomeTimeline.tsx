import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/models/experiences";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import HomeTimelineItem from "./home-timeline-item/TimelineItem";
import styles from "./TimelineElement.module.css";

export default function HomeTimeline() {
  return (
    <VerticalTimeline lineColor={"black"} layout={"1-column-left"}>
      {experiences.map((data, i, { length }) => (
        <HomeTimelineItem key={data.id} data={data}></HomeTimelineItem>
      ))}
      <VerticalTimelineElement
        visible={true}
        date="2010 - 2014"
        contentStyle={{ background: "white", color: "black", border: "2px solid #fcd07b" }}
        contentArrowStyle={{ borderRight: "7px solid  #fcd07b" }}
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<FontAwesomeIcon icon={faGraduationCap} />}>
        <h3 className="vertical-timeline-element-title">Computer Science Degrees...</h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
