"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const PROCESS_STEPS = [
    {
        number: "01",
        title: "Free Audit",
        description:
            "We analyze your current website, inventory management, and lead capture gaps. You'll get a clear picture of what's working and what's costing you sales.",
    },
    {
        number: "02",
        title: "Strategy Call",
        description:
            "We map out your perfect digital system. 15 minutes, zero sales pressure. You leave with one actionable tactic to use today.",
    },
    {
        number: "03",
        title: "Build & Deploy",
        description:
            "We build your new site, connect your inventory, set up automations, and launch your 24/7 assistant. You stay focused on selling cars.",
    },
]

export default function Process() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">How We Get You There</h2>
                    <p className="mt-4 text-lg text-muted-foreground">From problem to solution in three steps.</p>
                </div>

                <div className="grid gap-12 md:grid-cols-3">
                    {PROCESS_STEPS.map((step, idx) => (
                        <div key={idx} className="flex flex-col gap-4 border rounded-lg bg-primary-foreground/5 dark:bg-secondary/20 p-6 border-border/30">
                            <div className="text-5xl font-bold text-foreground/10">{step.number}</div>
                            <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
