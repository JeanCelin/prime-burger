import "@/styles/globals/globals.css";
import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {roboto, specialElite} from '@/styles/fonts/fonts'

export default function App({ Component, pageProps }) {
  return (
    <div className={`${roboto.variable} ${specialElite.variable}`}>
      <NavBar
        itens={[
          { label: "Home", address: "/" },
          { label: "Menu", address: "/menu" },
          { label: "About", address: "/about" },
        ]}
        logoConfig={[
          {
            title: "PRIME BURGER",
            src: "/logo-prime-burger-780x770.webp",
            width: 40,
            height: 40,
            alt: "logo",
          },
        ]}
      />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
