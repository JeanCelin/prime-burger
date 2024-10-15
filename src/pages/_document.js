import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Ion Icons */}
        <Script
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          type="module"
          strategy="lazyOnload" // Adia o carregamento para após o carregamento inicial
        />
        <Script
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          noModule
          strategy="lazyOnload" // Adia o carregamento para após o carregamento inicial
        />
      </body>
    </Html>
  );
}
