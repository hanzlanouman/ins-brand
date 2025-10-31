"use client"

import Link from "next/link"
import TrustSignal from "./trust-signal"
import { Roboto } from "next/font/google"
import { Button } from "../ui/button"
import { PrimaryCTA } from "../primary-cta"

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "800"], variable: "--font-roboto", display: "swap" })
export default function HeroContent() {
    return (
        <div className={`relative z-10 max-w-5xl mx-auto px-4 lg:px-0 text-center ${roboto.className}`}>
            <div className="py-16">
                <TrustSignal />

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl  font-extrabold leading-tight mt-4 mb-4">
                    <span className="text-foreground text-balance block">A Website That Actually Works.</span>
                    <span className="text-primary text-balance block "> A Team That Handles It All.</span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    We build your high-performance website, run your automatic social media posting, and capture leads with a 24/7 website assistant. We handle your digital foundation, so you can get back to selling.
                </p>

                <div className="flex flex-col items-center gap-2 pt-4">
                    <PrimaryCTA
                        id="hero-cta"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    />

                    <p className="text-xs text-foreground/50">Trusted by founders & teams</p>


                    {/* Trust Signal */}
                    {/* <TrustSignal /> */}
                </div>
            </div>
        </div>
    )
}
