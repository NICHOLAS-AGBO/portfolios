import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import UI from "@/components/UI";
import '@fortawesome/fontawesome-svg-core/styles.css';
import {Roboto} from "next/font/google";


const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: "400",
  fallback: ['var(--mui-joy-fontFamily-body)']
});




export default function App({ Component, pageProps }: AppProps) {
  return <UI>
    <style jsx global>{`
      html,body{
      font-family: ${roboto.style.fontFamily};
    }
    `}
    </style>
    <Component {...pageProps} />
  </UI>
}
