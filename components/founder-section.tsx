"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const POINTS = [
    "Direct founder collaboration instead of layered agency handoff.",
    "Technical execution and growth thinking in the same engagement.",
    "Systems, pages, and content built around one business goal.",
]

export default function FounderSection() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            id="about"
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 border-y border-border/70 py-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                    <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-[0_22px_64px_-54px_rgba(0,0,0,0.16)] sm:min-h-[460px]">
                        <Image
                            src="/hanzla.jpg"
                            alt="Hanzla Nouman"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 100vw, 46vw"
                        />
                    </div>

                    <div className="text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/52">
                            About Staxly
                        </p>
                        <h2 className="mt-3 font-hero text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            Work directly with Hanzla.
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                            Staxly is designed to stay close to the founder, close to the business problem, and close to the actual growth work instead of drifting into disconnected deliverables.
                        </p>

                        <div className="mt-8 space-y-4">
                            {POINTS.map((point) => (
                                <div key={point} className="flex items-start gap-3">
                                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                                    <p className="text-sm leading-7 text-foreground/84 sm:text-base">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
