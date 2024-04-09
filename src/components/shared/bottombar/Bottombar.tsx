"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faComments, faHouse, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGetPocket } from "@fortawesome/free-brands-svg-icons";

export default function Bottombar() {
  const currPath = usePathname();
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={currPath === "/" ? styles.active : ""}>
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>
      <Link href="/experience" className={currPath === "/experience" ? styles.active : ""}>
        <FontAwesomeIcon icon={faGetPocket} />
        Experience
      </Link>
      <Link href="/testimonials" className={currPath === "/testimonials" ? styles.active : ""}>
        <FontAwesomeIcon icon={faComments} />
        Reference
      </Link>
      <Link href="/about" className={currPath === "/about" ? styles.active : ""}>
        <FontAwesomeIcon icon={faAddressCard} />
        About
      </Link>
      <Link href="/startups" className={currPath === "/startups" ? styles.active : ""}>
        <FontAwesomeIcon icon={faRocket} />
        Entrepreneur
      </Link>
    </nav>
  );
}
