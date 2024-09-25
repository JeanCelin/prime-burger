import Link from "next/link";

import styles from "@/styles/components/navigation/ButtonOrder.module.css";

export default function ButtonOrder({ address, label, acTarget }) {
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
