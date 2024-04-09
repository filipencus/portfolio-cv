import Link from "next/link";
import styles from "./CustomButton.module.css";

export default function CustomButton(props: any) {
  return (
    <>
      {props.href && (
        <Link href={props.href}>
          <button className={`${styles.button} ${props.className}`}>{props.children}</button>
        </Link>
      )}
      {!props.href && (
        <button className={`${styles.button} ${props.className}`}>{props.children}</button>
      )}
    </>
  );
}
