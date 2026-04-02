"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TrendingDown, Clock, MessageSquare } from "lucide-react"

const PAIN_POINTS = [
    {
        icon: TrendingDown,
        title: "Inconsistent content",
        loss: "15+ ideas",
        description: "Good ideas stay in drafts, so your page never gets the consistency needed for real growth.",
    },
    {
        icon: Clock,
        title: "Content takes too much time",
        loss: "8+ hrs",
        description: "Writing hooks, scripting, filming, and editing can eat the time you should be spending on the business itself.",
    },
    {
        icon: MessageSquare,
        title: "Unclear personal brand",
        loss: "Low trust",
        description: "People visit your profile, but they still do not clearly understand what you do, who you help, or why they should stay.",
    },
]

export default function PainPoints() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            ref={ref}
            className={`w-full  px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-10">
                    <p className="text-sm font-medium text-muted-foreground uppercase mb-2">YOUR CONTENT IS</p>
                    <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
                        Slowing Your <span className="text-primary">Growth</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">Three common blockers. One clearer path forward.</p>
                </div>

                <div className="space-y-6 mb-12">
                    {PAIN_POINTS.map((point, idx) => {
                        const IconComponent = point.icon
                        return (
                            <div
                                key={idx}
                                className="flex items-center gap-6 py-8 border-b  bg-background border-border/50 hover:border-border transition-colors"
                            >
                                {/* Icon column */}
                                <div className="shrink-0 text-muted-foreground/60">
                                    <IconComponent size={28} />
                                </div>

                                {/* Content column */}
                                <div className="grow">
                                    <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-1">{point.title}</h3>
                                    <p className="text-sm md:text-md lg:text-lg text-muted-foreground">{point.description}</p>
                                </div>

                                {/* Loss amount - right aligned */}
                                <div className="shrink-0 text-right">
                                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">{point.loss}</p>
                                    <p className="text-sm text-muted-foreground">stuck every month</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="p-8 rounded-lg border-2 border-primary/20 bg-primary/5">
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">What changes when the system improves</p>
                        <p className="text-5xl font-bold text-foreground mb-2">More clarity. More consistency.</p>
                        <p className="text-sm text-muted-foreground">
                            Better content starts with better positioning, stronger hooks, and a process you can actually maintain.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
