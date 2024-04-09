"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currPath = usePathname();
  return (
    <nav className="navbar">
      <Link href="/" className={currPath === "/" ? "active" : ""}>
        Home
      </Link>
      <Link href="/experience" className={currPath === "/experience" ? "active" : ""}>
        Experience
      </Link>
      <Link href="/testimonials" className={currPath === "/testimonials" ? "active" : ""}>
        Testimonials
      </Link>
      <Link href="/about" className={currPath === "/about" ? "active" : ""}>
        About
      </Link>
      <Link href="/startups" className={currPath === "/startups" ? "active" : ""}>
        Entrepreneurship
      </Link>
    </nav>
  );
}
