"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

export default function Navbar() {
  const currPath = usePathname();
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={currPath === "/" ? styles.active : ""}>
        Home
      </Link>
      <Link href="/experience" className={currPath === "/experience" ? styles.active : ""}>
        Experience
      </Link>
      <Link href="/testimonials" className={currPath === "/testimonials" ? styles.active : ""}>
        Testimonials
      </Link>
      <Link href="/about" className={currPath === "/about" ? styles.active : ""}>
        About
      </Link>
      <Link href="/startups" className={currPath === "/startups" ? styles.active : ""}>
        Entrepreneurship
      </Link>
    </nav>
  );
}
