"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Snail, Clock, PhoneOff } from "lucide-react"

const PAIN_POINTS = [
    {
        icon: Snail,
        title: "Your website is slow, old, and looks terrible on a phone.",
        description: "You're losing sales every day to competitors with faster, smarter sites.",
    },
    {
        icon: Clock,
        title: "You're wasting hours every week manually posting cars to Facebook.",
        description: "Inventory updates, photo uploads, descriptions—it never ends.",
    },
    {
        icon: PhoneOff,
        title: "You're missing 10 PM customer questions and losing them to competitors.",
        description: "Customers inquire late at night and on weekends. Those leads go cold—or worse, to your competitors.",
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
            <div className="mx-auto max-w-6xl">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Does This Sound Familiar?
                </h2>
                <p className="mb-16 text-lg text-muted-foreground">We get it. This is frustrating.</p>

                <div className="grid gap-8 md:grid-cols-3">
                    {PAIN_POINTS.map((point, idx) => {
                        const IconComponent = point.icon
                        return (
                            <div key={idx} className="flex flex-col gap-4 border rounded-lg bg-primary-foreground/5 dark:bg-secondary/20 p-6 border-border/30">
                                <div className="text-muted-foreground/50">
                                    <IconComponent size={28} />
                                </div>

                                <h3 className="text-lg font-semibold text-foreground leading-tight">{point.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
