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
          Frontend Software Developer 💡 <br />
          React - Angular - Typescript
        </p>
      </div>
      <br />
      Hi 👋
      <br />
      <br />
      I'm Lone, and I am the maker of this tool.
      <br />
      <br />
      I reside in Copenhagen, where I work with product management. In that role, I often facilitate
      different kinds of creative processes, which is something I really enjoy!
      <br />
      <br />
      During the covid-19 lockdown, when everything suddenly had to be online, I realized how much
      extra effort you have to put into remote facilitation, and I wanted to do something about it!
      <br />
      <br />
      I decided to make a tool that.
      <br />
      <br />
      <br />
      <h2 className="text-xl">VIDEO INTRODUCTIONS</h2>
      <div>
        <div className={styles.videowrapper}>
          <iframe
            src="https://www.youtube.com/embed/__mSgDEOyv8?si=qF-OI0ZRdQlPP2Xq"
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
