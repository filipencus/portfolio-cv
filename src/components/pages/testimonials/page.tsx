"use client";
import Image from "next/image";
import styles from "./page.module.css";
import BarActions from "@/components/shared/page-actions/BarActions";
import ImageLoader from "@/utils/ImageLoader";

export default function Testimonials() {
  return (
    <>
      <h3 className="section-title">THINGS PEOPLE SAY</h3>
      <br />
      <br />

      <div className={styles.testimonialContainer}>
        <div className={styles.manager}>
          <Image src="/israel.jpeg" width={100} height={100} alt="Israel" loader={ImageLoader} />
          <div>
            Israel Illescas
            <br />
            <br />
            <p>Business Manager</p> 
            <br />
            <a href="https://www.linkedin.com/in/israelillescas" target="_blank">
              <Image
                src="/ln.png"
                width={20}
                height={20}
                alt="linkedin profile"
                loader={ImageLoader}
              />
            </a>
          </div>
        </div>

        <Image
          src="/recommendation.png"
          width={600}
          height={835}
          alt="recommendation"
          loader={ImageLoader}
        />
      </div>

      <br />
      <br />
      <BarActions></BarActions>
    </>
  );
}
