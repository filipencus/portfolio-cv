import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./styles.module.css";
import { Carousel } from "react-responsive-carousel";

export default function StartupExperience(props: any) {
  const Banner = (props: any) => (
    <Carousel showArrows={true} showIndicators={false} dynamicHeight={false} showStatus={false} className={styles.root}>
      {props.data.map((image: any, index: number) => (
        <div key={index}>
          <img src={image} className={styles.portfolioImg} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
      ))}
    </Carousel>
  );

  return (
    <>
      <div className={styles.bannerContainer}>
        <Banner data={props.data.app} />
      </div>
      <div className={`${styles.box} gap-3`}>
        <div className={styles.info}>
          <div className={styles.companyInfo}>
            <img src={props.data.logo} className={styles.companyLogo} />
            <div className="w-100">
              <h2 className="font-bold">
                {props.data.company}{' '}
                <small className="text-neutral-500 dark:text-neutral-400 small">
                  ({props.data.start}
                  {props.data.end ? " - " : ""}
                  {props.data.end})
                </small>
              </h2>
              <div className={styles.companyDesc}>{props.data.companyDesc}</div>
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
      </div>
    </>
  );
}
