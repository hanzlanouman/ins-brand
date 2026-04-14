"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PrimaryCTA } from "./primary-cta"

const PROCESS_STEPS = [
    {
        number: "01",
        title: "Discover",
        description: "We map the business, the offer, and the gaps across software, funnel, content, and positioning.",
        artwork: "/process-research.svg",
    },
    {
        number: "02",
        title: "Plan",
        description: "The direction gets translated into pages, campaigns, automations, content systems, and growth priorities.",
        artwork: "/process-script.svg",
    },
    {
        number: "03",
        title: "Build & Create",
        description: "We produce the assets that matter, from software and landing pages to creative, content, and conversion support.",
        artwork: "/process-edit.svg",
    },
    {
        number: "04",
        title: "Launch & Improve",
        description: "Everything gets refined around performance so the system compounds instead of restarting every month.",
        artwork: "/process-publish.svg",
    },
]

export default function Process() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            id="process"
            ref={ref}
            className={`relative w-full overflow-hidden bg-[#111317] px-4 py-20 text-white sm:px-6 lg:px-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#111317,#16181d)]" />
            <div className="pointer-events-none absolute -left-32 top-0 h-full w-[34rem] bg-[radial-gradient(circle_at_left,rgba(3,239,98,0.18),rgba(3,239,98,0.08)_32%,transparent_72%)]" />
            <div className="mx-auto max-w-7xl">
                <div className="relative mb-14 text-center">
                    <h2 className="font-hero text-4xl font-bold tracking-tight sm:text-6xl">
                        How It Works
                    </h2>
                </div>

                <div className="relative grid gap-10 md:grid-cols-2 xl:grid-cols-4">
                    {PROCESS_STEPS.map((step) => (
                        <article key={step.number} className="text-center">
                            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] shadow-[0_24px_50px_-32px_rgba(0,0,0,0.45),0_0_0_1px_rgba(3,239,98,0.07)] backdrop-blur-sm">
                                <Image
                                    src={step.artwork}
                                    alt={`${step.title} illustration`}
                                    width={132}
                                    height={132}
                                    className="h-28 w-28"
                                />
                            </div>
                            <h3 className="mt-8 text-3xl font-bold tracking-tight text-white">
                                {step.number}. {step.title}
                            </h3>
                            <p className="mx-auto mt-4 max-w-xs text-base leading-relaxed text-white/74">
                                {step.description}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="relative mt-14 flex justify-center">
                    <PrimaryCTA
                        onClick={() => {
                            requestAnimationFrame(() => {
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                })
                            })
                        }}
                    >
                        Start the Conversation
                    </PrimaryCTA>
                </div>
            </div>
        </section>
    )
}
