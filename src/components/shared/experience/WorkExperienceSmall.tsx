import styles from "./small.module.css";

export default function WorkExperienceSmall(props: any) {
  return (
    <div className={styles.box}>
      <div className={styles.company}>
        <div className="section">
          <img src={props.data.logo} className={styles.companyLogo} />
        </div>
      </div>
      <div className={styles.info}>
        <h2 className={`text-xl font-semibold ${styles.title}`}>
          {props.data.title}
          {/* <small className={`text-neutral-500 dark:text-neutral-400 small`}>
            ({props.data.start} - {props.data.end})
          </small> */}
        </h2>
        <p className={styles.desc}>{props.data.desc}</p>
        <div className={styles.tags}>
          {props.data.skills.map((skill: any) => (
            <span key={skill.id}>{skill.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
