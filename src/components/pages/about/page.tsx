"use client";
import styles from "./page.module.css";
import Image from "next/image";
import BarActions from "@/components/shared/page-actions/BarActions";

export default function About() {
  return (
    <>
      <div className={styles.header}>
        <Image
          className={styles.bannerImg}
          src="/filip.jpg"
          alt="Next.js Logo"
          width={80}
          height={80}
          priority
        />
        <p>
          Frontend Software Developer <br />
          React - Angular - Typescript
        </p>
      </div>
      <br />

      Hi 👋
      <br />
      <br />
      My name is Filip and I enjoy designing / developing products using Javascript &
      Typescript.
      Seriously I love those languages. 
      <br />
      First time I read about them I was 12 years old. 🎉
      <br />
      <br />
      I have over 10 years of experience in software development building products for B2C and B2B
      markets.
      And currently, I work for Ing-Bank as a software engineer and head of quality assurance(code).
      <br />
      <br />
      In the past, I learn a lot about companies&apos; failures and successes as well. It was a great
      journey.
      I have been involved in all stages... from idea to customer research, product design,
      development, and delivering scalable solutions. ✨
      <br />
      <br />
      I work very hard and I am so committed to the promises I make.
      <br />
      And of course, I love startups world, people and innovation... 💡
      <br />
      <br />
      Want to know me better? feel free to take a look at my video.
      <br />
      <br />
      <br />

      {/* <h2 className="text-xl">VIDEO INTRODUCTIONS</h2> */}
      <div>
        <div className={styles.videowrapper}>
          <iframe
            src="https://www.youtube.com/embed/wfsRAZUnonI?si=qF-OI0ZRdQlPP2Xq"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
      </div>
      <br />
      <br />
      <br />
      <BarActions></BarActions>
    </>
  );
}
