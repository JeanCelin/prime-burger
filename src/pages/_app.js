import "@/styles/globals/globals.css";
import NavBar from "@/components/navigation/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar
        itens={[
          { label: "Home", address: "/" },
          { label: "Menu", address: "/menu" },
          { label: "teste3", address: "/" },
          { label: "teste4", address: "/" },
          { label: "teste5", address: "/" },
        ]}
        logoConfig={[
          {
            title: "PRIME BURGER",
            src: "/logo-prime-burger-780x770.png",
            width: 40,
            height: 40,
            alt: "logo",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}
