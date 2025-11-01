"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { TrendingDown, Clock, MessageSquare } from "lucide-react"

const PAIN_POINTS = [
    {
        icon: TrendingDown,
        title: "Slow, outdated website",
        loss: "$2,400",
        description: "You lose a car sale every 3 days to slow load times and poor mobile experience.",
    },
    {
        icon: Clock,
        title: "Manual inventory updates",
        loss: "$1,800",
        description: "15+ hours per week copy-pasting inventory to Facebook and your site.",
    },
    {
        icon: MessageSquare,
        title: "Missing customer inquiries",
        loss: "$3,200",
        description: "Customers message at 9 PM. You respond at 9 AM. Competitors already won.",
    },
]

export default function PainPoints() {
    const { ref, isVisible } = useScrollAnimation()
    const totalLoss = "$7,400/month"
    const annualLoss = "$88,800/year"
    return (
        <section
            ref={ref}
            className={`w-full  px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-10">
                    <p className="text-sm font-medium text-muted-foreground uppercase mb-2">Your Dealership is</p>
                    <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">
                        Losing <span className="text-primary">$7,400</span> monthly
                    </h2>
                    <p className="text-lg text-muted-foreground">Three problems. Three solutions. One path forward.</p>
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
                                    <p className="text-sm text-muted-foreground">lost/month</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="p-8 rounded-lg border-2 border-primary/20 bg-primary/5">
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">Total monthly impact</p>
                        <p className="text-5xl font-bold text-foreground mb-2">{totalLoss}</p>
                        <p className="text-lg text-muted-foreground mb-4">
                            That&apos;s <span className="font-semibold text-foreground">{annualLoss}</span> walking out your door.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Smart dealership sites typically pay for themselves in 2-3 months.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
