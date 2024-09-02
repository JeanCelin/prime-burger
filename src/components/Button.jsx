import style from "./Button.module.css";
export default function Button({ link }) {
  return <button className={style.button}>{link}</button>;
}
