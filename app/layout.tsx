import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Roboto } from "next/font/google"
import "@/app/globals.css"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})
const fontHero = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-roboto",
  display: "swap",
})
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer"
export const metadata: Metadata = {
  title: "Staxly Solutions - Smart Websites and Solutions for dealerships.",
  description: "Staxly Solutions provides smart websites and digital solutions tailored for dealerships. Boost your online presence and drive sales with our expert services.",
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
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  )
}
