"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const PROCESS_STEPS = [
    {
        number: "01",
        title: "Free Strategy Call",
        description:
            "We analyze your current website, inventory management, and lead capture gaps. You'll get a clear picture of what's working and what's costing you sales.",
    },
    {
        number: "02",
        title: "We Build Your Solution",
        description:
            "We map out your perfect digital system. 15 minutes, zero sales pressure. You leave with one actionable tactic to use today.",
    },
    {
        number: "03",
        title: "Go Live & Get Leads",
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
            <div className="mx-auto max-w-5xl">
                <div className="mb-16">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                        THE THREE-STEP PROCESS
                    </p>
                    <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground">
                        From Your <span className="text-primary">First Message</span> to Results
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">Three clear steps. No guesswork. Complete transparency.</p>
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
