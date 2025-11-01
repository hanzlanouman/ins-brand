"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Check } from "lucide-react"

const FEATURES = [
    {
        title: "A Modern, Fast Website",
        description: "We build you a trustworthy, blazing-fast website that looks professional on any device.",
        benefits: ["SEO optimized", "Mobile responsive", "Fast load times"],
    },
    {
        title: "Daily Inventory Posting",
        description: "Our automated service posts your cars to Facebook & Instagram every day. You don't lift a finger.",
        benefits: ["Auto-sync inventory", "Multi-platform posting", "No manual work"],
    },
    {
        title: "24/7 Lead Helper",
        description: "Our 'Website Assistant' answers customer questions and captures leads, even at 10 PM on a Sunday.",
        benefits: ["Always on", "Qualifies leads", "Sends you qualified prospects"],
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
                <div className="mb-16">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">THE SOLUTION</p>
                    <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground">
                        Complete Solution. <span className="text-primary">Zero More Losses.</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We handle the three money drains. You focus on selling cars.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 mb-12">
                    {FEATURES.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col gap-4 border rounded-lg p-6 transition-all ${idx === 0 ? "border-primary/50 bg-primary/5 ring-1 ring-primary/20" : "border-border/50 bg-foreground/2"
                                }`}
                        >
                            <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>

                            <div className="space-y-2 mt-2">
                                {feature.benefits.map((benefit, bidx) => (
                                    <div key={bidx} className="flex items-start gap-2">
                                        <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-foreground">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-8 border-t border-border/30">
                    <p className="text-sm text-muted-foreground">
                        <span className="text-foreground font-medium">Full white-glove setup and ongoing management included.</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
