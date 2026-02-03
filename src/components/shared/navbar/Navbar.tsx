"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import useStartupsFilter from "@/components/hooks/startups-filter-hook";

export default function Navbar() {
  const currPath = usePathname();
  const showStartups = useStartupsFilter();

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
      {showStartups && (
        <Link href="/startups" className={currPath === "/startups" ? styles.active : ""}>
          Entrepreneurship
        </Link>
      )}
    </nav>
  );
}
