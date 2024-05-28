import Link from "next/link";
import styles from "./BarActions.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

export default function BarActions(props: any) {
  let styleClasses = `grid `;

  if (props?.reduced) {
    styleClasses += `grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4`;
  } else {
    styleClasses += `grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4`;
  }

  return (
    <div className={styles.container}>
      <p className="mb-3 mt-2">Whant to get in touch with me?</p>
      <div className={styleClasses}>
        <a className={styles.btn} href="mailto:filip.enculescu@gmail.com" target="_blank">
          Contact me <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
        </a>
        {!props?.reduced && (
          <a className={styles.btn} href="/FilipCV.pdf" download>
            Download my CV <FontAwesomeIcon icon={faFile} className="text-lg" />
          </a>
        )}
        <a
          className={styles.btn}
          href="https://www.linkedin.com/in/filip-enculescu-ro/"
          target="_blank">
          Let s talk <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
        </a>
      </div>
    </div>
  );
}
