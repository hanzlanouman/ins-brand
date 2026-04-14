import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Manrope, Sora, Syne } from "next/font/google"
import "@/app/globals.css"

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})
const fontHero = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
})
const fontBrand = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
})
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/navbar/navbar"
export const metadata: Metadata = {
  title: "Staxly Solutions - Software, Marketing, and Content Systems",
  description: "Staxly Solutions helps founders and businesses ship web apps, build marketing systems, and create content that drives growth.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="//assets.calendly.com" />
        <script async src="http://localhost:3000/api/analytics/script?key=stk_pub_lxF1rYrX77R5GIZI1-YPccvW" defer></script>
      </head>
      <body className={`${fontSans.variable} ${fontMono.variable} ${fontHero.variable} ${fontBrand.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>

    </html>
  )
}
