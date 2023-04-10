import './globals.css'
import React from "react";
import {Metadata} from "next";
import UI from "@/app/components/UI";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: 'Portfolio UI - Free and premium templates',
  description: 'Get awesome templates for your career and projects',
  creator: 'NICHOLAS AGBO',
  applicationName: 'Portfolio UI'
}



const font = Roboto({
  subsets: ['latin'], 
  display: 'swap', 
  weight: "400",
  preload: true, 
  variable: "--fsText",
  fallback: ['var(--mui-joy-fontFamily-body)']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className} style={{overflowX: "hidden"}}>
      <UI>
        {children}
      </UI>
      </body>
    </html>
  )
}
