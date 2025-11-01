"use client"

import { PrimaryCTA } from "../primary-cta"


export default function HeroContent() {
    return (
        <div className={`relative z-10 max-w-5xl mx-auto px-4 lg:px-0 md:text-center font-hero`}>
            <div className="md:py-16 py-8 space-y-6 md:space-y-0">

                <h1 className="text-[4rem] lg:text-7xl   font-extrabold leading-tight mt-4 mb-4">
                    <span className="text-foreground text-balance block">A Website That Finally Works</span>
                    <span className="text-primary text-balance block "> Run by a Real Team.</span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    We build your high-performance website, run your automatic social media posting, and capture leads with a 24/7 website assistant. We handle your digital foundation, so you can get back to selling.
                </p>

                <div className="flex md:flex-col md:items-center gap-2 pt-4">
                    <PrimaryCTA
                        id="hero-cta"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    />
                </div>
            </div>
        </div>
    )
}
