import Link from "next/link";

import styles from "@/styles/components/Button.module.css";

export default function Button({ address, label, acTarget }) {
  let activeBlank = "";

  if (acTarget) {
    activeBlank = "_blank";
  }

  return (
    <Link href={address} target={activeBlank}>
      <button className={styles.button}>{label}</button>
    </Link>
  );
}
