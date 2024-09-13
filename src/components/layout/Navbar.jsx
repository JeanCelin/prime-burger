import Link from "next/link";

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/menu">Menu</Link>
      </li>
    </ul>
  );
}
