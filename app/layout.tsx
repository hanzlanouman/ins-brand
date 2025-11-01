import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
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
