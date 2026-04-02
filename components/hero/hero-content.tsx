"use client"

import { PrimaryCTA } from "../primary-cta"

export default function HeroContent() {
    return (
        <div className="relative z-10 mx-auto max-w-6xl px-4 font-hero text-center lg:px-0">
            <div className="py-8 md:py-16">
                <h1 className="mx-auto uppercase text-[3.3rem] font-extrabold  tracking-tight sm:text-6xl lg:text-7xl">
                    <span className=" text-balance text-foreground">Build an Instagram brand </span>
                    <span className="mt-2  text-balance text-primary">people remember.</span>
                </h1>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Strategy, short-form content, and personal branding support that turns a scattered profile into something clear, credible, and worth following.
                </p>

                <div className="flex justify-center pt-6">
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
                </div>

            </div>
        </div>
    )
}
