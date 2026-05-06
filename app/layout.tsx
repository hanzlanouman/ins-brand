import type React from "react"
import type { Metadata } from "next"
import { Fraunces, Geist_Mono, Manrope, Sora, Syne, Inter } from "next/font/google"
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
const fontDisplay = Fraunces({
  subsets: ["latin"],
  weight: ["700", "800", "900", "400", "500", "600", "300", "200"],
  variable: "--font-fraunces",
  display: "swap",
})
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer"
export const metadata: Metadata = {
  title: "Arfah Ali - Content Strategy and Instagram Growth",
  description: "Arfah Ali helps founders and personal brands grow on Instagram with content strategy, short-form content creation, and personal branding support.",
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
      <body className={`${fontSans.variable} ${fontMono.variable} ${fontHero.variable} ${fontBrand.variable} ${fontDisplay.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  )
}
