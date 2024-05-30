"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.css";
import Image from "next/image";
import { faAtom, faCode, faN } from "@fortawesome/free-solid-svg-icons";
import { faAngular, faAws, faCss3, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHtml5, faNodeJs, faReact, faSass, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import CustomButton from "@/components/shared/custom-button/CustomButton";
import Link from "next/link";
import BarActions from "@/components/shared/page-actions/BarActions";
import HomeTimeline from "@/components/shared/home-timeline/HomeTimeline";

export default function Home() {
  return (
    <div className={styles.test}>
      <div className={`${styles.columns} gap-3`}>
        <div className={styles.left}>
          <br />
          <h1>
            Hi 👋,
            <br />I am Filip.
          </h1>
          <br />
          Software Developer from Madrid, Spain with more than 10 years of experience in building
          complex applications with cutting-edge technologies.
          <a href="mailto:filip.enculescu@gmail.com" target="_blank" className={styles.actionBtn}>
            <div className={styles.talk}>
              <div className="talk-pulse">Let s talk</div>
            </div>
          </a>
        </div>
        <div className="big-screen">
          <Image
            className={styles.center}
            src="/prof.png"
            alt="profile"
            width={250}
            height={250}
            priority
          />
          <div className={styles.more}>
            ...read more about me{" "}
            <Link href="/about" className={styles.link}>
              here
            </Link>
          </div>
        </div>
      </div>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <div>
        <h3 className="section-title">TECH & SKILLS</h3>
        <p className="mt-3">The skills, tools and technologies I use to bring products to life.</p>
        <br />
        <div className={styles.skills}>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faSquareJs} size="4x" className={styles.bigIcon} />
            <p>JAVASCRIPT</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faAngular} size="4x" />
            <p>ANGULAR</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faReact} size="4x" />
            <p>REACT</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faN} size="4x" />
            <p>NEXTJS</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faAtom} size="4x" />
            <p>IONIC</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faNodeJs} size="4x" />
            <p>NODEJS</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faHtml5} size="4x" />
            <p>HTML5</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faCss3} size="4x" />
            <p>CSS3</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faSass} size="4x" />
            <p>SASS</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faAws} size="4x" />
            <p>AWS</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faCode} size="4x" className={styles.bigIcon} />
            <p>TYPESCRIPT</p>
          </div>
          <div className={styles.boxIcon}>
            <FontAwesomeIcon icon={faGithub} size="4x" />
            <p>GITHUB</p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <div>
        <h3 className="section-title">EXPERIENCE</h3>
        <br />
        <HomeTimeline></HomeTimeline>

        <br />
        <CustomButton className="w-100" href="/experience">
          See more details
        </CustomButton>
      </div>

      <br />
      <br />
      <BarActions></BarActions>
    </div>
  );
}
