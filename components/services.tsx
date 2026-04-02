"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Check } from "lucide-react"

const FEATURES = [
    {
        title: "Content Strategy",
        description: "A simple monthly direction for what to say and why it matters.",
        benefits: ["Pillars", "Hooks", "Planning"],
    },
    {
        title: "Short-Form Support",
        description: "Scripting and content support that makes filming and posting easier.",
        benefits: ["Scripts", "Shorts", "Editing"],
    },
    {
        title: "Personal Branding",
        description: "A sharper profile and clearer message people understand quickly.",
        benefits: ["Positioning", "Profile clarity", "Authority"],
    },
]

export default function Services() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            id="services"
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-14 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        What You Get
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                        Clear strategy, stronger content, and a brand people understand quickly.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {FEATURES.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col gap-5 rounded-[24px] border p-7 transition-all ${idx === 0 ? "border-primary/30 bg-primary/5" : "border-border/60 bg-card"
                                }`}
                        >
                            <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>

                            <div className="mt-1 flex flex-wrap gap-2">
                                {feature.benefits.map((benefit, bidx) => (
                                    <span
                                        key={bidx}
                                        className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-sm text-foreground"
                                    >
                                        <Check size={14} className="text-primary" />
                                        {benefit}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
