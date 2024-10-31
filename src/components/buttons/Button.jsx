import Link from "next/link";

import styles from "@/styles/components/buttons/Button.module.css";

export default function ButtonSec({ address, label, acTarget, btnStyle }) {
  // btnStyle must be buttonPrimary or buttonSecondary

  let activeBlank = "";

  if (acTarget) {
    activeBlank = "_blank";
  }

  return (
    <>
      <Link href={address} target={activeBlank}>
        <button className={`${styles[btnStyle]}`}>{label}</button>
      </Link>
    </>
  );
}
