import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import "@/styles/main.css";
import type { AppProps } from "next/app";
import { Roboto } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; 

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'] 
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <main className={roboto.className}> 
    <Header />
      <Component {...pageProps} />
      <Footer />
      </main>
    </>
  );
}
