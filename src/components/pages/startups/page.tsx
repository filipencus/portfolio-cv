"use client";
import BarActions from "@/components/shared/page-actions/BarActions";
import styles from "./page.module.css";
import StartupsTimeline from "@/components/shared/startup-timeline/StartupTimeline";
import Image from "next/image";

export default function Startups() {
  return (
    <>
      <div className={styles.header}>
        <Image
          className={styles.bannerImg}
          src="/filipB.jpg"
          alt="Next.js Logo"
          width={80}
          height={80}
          priority
        />
        <p>
          From Inspiration to Innovation 🚀 <br />
          MY ENTREPRENEUR STORY
        </p>
      </div>
      <br />
      Hi 👋
      <br />
      <br />
      My name is Filip and this is my story...
      <br />
      I am a serial entrepreneur and a software engineer with over 10 years of experience building
      web and mobile apps... That&apos;s usually what I do for companies, however, my dream always
      was to build something useful to people, to turn ideas into reality. ✨
      <br />
      <br />
      I was born in Romania but I grew up my whole life in Spain. Also, I lived for a while in
      Wisconsin, USA. My passion for technology started when I was 12 years old. Back then I
      remember reading the first book about Javascript during playtime in School. Of course, I
      didn&apos;t understand anything back then, but at least it helped me to have some ideas about
      programming.
      <br />
      <br />
      In 2014 I graduated in Computer Science in Spain and started working for several startups...
      However, even if I work for tech companies building or extending features, every 2 or 3 years
      I step back for a while and start a business. Working for companies is great but not
      fulfilling, at least not for me. I don&apos;t have the freedom to create, to innovate, or to
      invest in something I believe is worth...
      <br />
      <br />
      I always dreamed of having a business. As a child, I remember writing Microsoft all over the
      place using stickers. I believe that businesses can improve people&apos;s lives in many ways.
      And definitely, that&apos;s my purpose in life. 🚴🏼‍♂️
      <br />
      <br />
      During the journey as you can see (look below timeline) I founded several startups. Most of
      them were failures and some went pretty well.
      <br />
      <br />
      During that time: 💡
      <br />
      <ul className={styles.list}>
        <li>I learned that not only good ideas are necessary but also great execution.</li>
        <li>I learned that not everybody is committed to delivering what they promise.</li>
        <li>
          I learned that building a business is not for everyone. You have to have that
          &quot;virus&quot;, otherwise on the first complication, most people will give up, pretty
          easily.
        </li>
      </ul>
      <br />
      Even if 10 businesses fails but one succeeds, you will have the best time in your life.
      It&apos;s something that definitely worth fighting for it. 😀
      <br />
      <br />
      Let&apos;s join our knowledge, passion, and experience to build great products.
      <br />
      <br />
      <hr />
      <br />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div>
          <p>Short video about me (1min)</p>
          <div className={styles.videowrapper}>
            <iframe
              src="https://www.youtube.com/embed/__mSgDEOyv8?si=qF-OI0ZRdQlPP2Xq"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>
        <div>
          <p>Watch complete video</p>
          <div className={styles.videowrapper}>
            <iframe
              src="https://www.youtube.com/embed/wfsRAZUnonI?si=KjAFu1IwFd_HKh2t"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
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
      </div>
      <br />
      <br />
      🧳 The technical side:
      <br />
      <br />
      <ul className={styles.list}>
        <li>
          I love Javascript and Typescript. But I am not closed to it. The right tech for the right
          project I believe.{" "}
        </li>
        <li>
          Most of the products I build are based on JS, TS, NodeJs, React, React Native, NextJs,
          Angular, Ionic, MySQL and AWS as cloud architecture.{" "}
        </li>
        <li>
          I also did integrations with Pipedrive, Stripe payments, MongoDB, and other dependencies
          we had as a startup...
        </li>
        <li>
          But for a better overview, just look at my previous startups. You will see all used
          technology.
        </li>
      </ul>
      <br />
      🧳 What I am looking for:
      <br />
      <br />
      <ul>
        <li>
          I am searching for a co-founder who has a better background than me on the marketing and
          sales side as my profile is more technical.
        </li>
        <li>
          I am looking for a startup who is willing to accept a new co-founder. Let me see if I am
          get in love with your product or idea. 💖
        </li>
        <li>Or just a startup who wants my advices or technical support.</li>
      </ul>
      <br />
      <br />
      Feel free to contact me or to see the video-presentation.
      <br />
      <br />
      <BarActions reduced={true}></BarActions>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h3 className="section-title">STARTUPS I FOUNDED</h3>
      <br />
      <br />
      <StartupsTimeline></StartupsTimeline>
      <br />
    </>
  );
}
