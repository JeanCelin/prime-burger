import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen border border-red-50 gap-4 ">
      <div style={background}>teste</div>
      <h1 className="text-[rgb(255,255,0)] text-4xl">Prime Burger</h1>
      <p>
        Located in the nearest shopping mall. We will be happy to serve you!
      </p>
      <Button link={<Link href="/menu">See Menu</Link>}></Button>
    </main>
  );
}
const background = {
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: "-1",
  backgroundImage: "url('/bg-burger.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "brightness(30%)",
};
