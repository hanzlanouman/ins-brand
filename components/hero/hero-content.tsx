"use client"

import { PrimaryCTA } from "../primary-cta"
import TrustSignal from "./trust-signal"

export default function HeroContent() {
    return (
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-0">
            <div className="py-8 md:py-20">
                <h1 className="mx-auto mt-6 font-hero uppercase text-[3.05rem] font-extrabold tracking-tight sm:text-6xl lg:text-[5.45rem]">
                    <span className="block text-balance text-foreground">Build digital systems</span>
                    <span className="mt-1 block text-balance text-primary">that actually grow.</span>
                </h1>

                <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                    Staxly Solutions helps founders and growing businesses connect software, marketing, and content into one sharper engine. Web apps, landing pages, funnels, content systems, and conversion-focused execution are built to move together.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4">
                    <PrimaryCTA
                        id="hero-cta"
                        onClick={() => {
                            requestAnimationFrame(() => {
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                })
                            })
                        }}
                    />
                    <p className="text-sm font-medium text-muted-foreground">
                        Join 10+ growing businesses. No long-term contracts.
                    </p>
                </div>
            </div>
        </div>
    )
}
