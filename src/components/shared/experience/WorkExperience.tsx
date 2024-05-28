import styles from "./styles.module.css";

export default function WorkExperience(props: any) {
  return (
    <div className={`${styles.columns} ${styles.box} gap-3`}>
      <div className={styles.info}>
        <div className={styles.companyInfo}>
          <img src={props.data.logo} className={styles.companyLogo} />
          <div className="w-100">
            <h2 className="font-bold">
              {props.data.company}
              <small className="text-neutral-500 dark:text-neutral-400 small">
                ({props.data.start}{ props.data.end ? ' - ':''}{props.data.end})
              </small>
            </h2>
            <p className={styles.companyDesc}>{props.data.companyDesc}</p>
          </div>
        </div>
        <hr />
        <h2 className={`text-xl font-semibold mt-2 ${styles.title}`}>{props.data.title}</h2>
        <p className={styles.desc}>{props.data.desc}</p>
        <div className={styles.tags}>
          {props.data.skills.map((skill: any) => (
            <span key={skill.id}>{skill.name}</span>
          ))}
        </div>
      </div>
      <div className={styles.portfolio}>
        <div className="section">
          {props.data.app.map((image: any, index: number) => (
            <img key={index} src={image} className={styles.portfolioImg} />
          ))}
        </div>
      </div>
    </div>
  );
}
