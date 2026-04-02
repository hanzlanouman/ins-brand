"use client"

import { Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const PLANS = [
    {
        name: "Starter",
        price: "$199",
        cta: "Choose Starter",
        volume: ["3 carousels", "12 reels", "7 stories"],
        features: [
            "Monthly content planning",
            "Caption and posting support",
            "Basic profile direction",
            "Standard support",
        ],
    },
    {
        name: "Growth",
        price: "$249",
        cta: "Choose Growth",
        volume: ["5 carousels", "15 reels", "10 stories"],
        features: [
            "Content strategy and hooks",
            "Script support",
            "Caption writing",
            "Priority support",
        ],
        featured: true,
    },
    {
        name: "Authority",
        price: "$299",
        cta: "Choose Authority",
        volume: ["8 carousels", "20 reels", "15 stories"],
        features: [
            "Personal brand strategy",
            "Advanced scripting support",
            "Repurposing guidance",
            "Higher-touch support",
        ],
    },
]

export default function Pricing() {
    const { ref, isVisible } = useScrollAnimation()

    const handlePlanClick = () => {
        requestAnimationFrame(() => {
            document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        })
    }

    return (
        <section
            id="pricing"
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 text-center">
                    <h2 className="font-hero text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Monthly Packages
                    </h2>
                </div>

                <div className="grid gap-6 xl:grid-cols-3">
                    {PLANS.map((plan) => (
                        <article
                            key={plan.name}
                            className={`relative overflow-hidden rounded-[32px] border p-8 sm:p-10 ${plan.featured
                                ? "border-primary/20 bg-[#171717] text-white shadow-[0_28px_80px_-48px_rgba(0,0,0,0.5),0_0_0_1px_rgba(214,26,255,0.08)]"
                                : "border-border/70 bg-card shadow-[0_24px_80px_-56px_rgba(0,0,0,0.22)]"
                                } transition-colors duration-200 hover:border-primary/25`}
                        >
                            {plan.featured ? (
                                <>
                                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
                                    <div className="pointer-events-none absolute -right-14 top-0 h-32 w-32 rounded-full bg-primary/12 blur-3xl" />
                                </>
                            ) : null}

                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className={`text-2xl font-semibold ${plan.featured ? "text-white" : "text-foreground"}`}>
                                        {plan.name}
                                    </h3>
                                </div>
                                {plan.featured ? (
                                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                                        Recommended
                                    </span>
                                ) : null}
                            </div>

                            <div className="mt-10">
                                <p className={`text-5xl font-bold tracking-tight ${plan.featured ? "text-white" : "text-foreground"}`}>
                                    {plan.price}
                                    <span className={`ml-2 text-base font-medium ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}>
                                        / month
                                    </span>
                                </p>
                            </div>

                            <div className={`mt-10 space-y-3 border-y py-6 ${plan.featured ? "border-white/10" : "border-border/70"}`}>
                                {plan.volume.map((item) => (
                                    <p
                                        key={item}
                                        className={`text-lg font-medium ${plan.featured ? "text-white" : "text-foreground"}`}
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-8 space-y-4">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <Check size={16} className="mt-1 flex-shrink-0 text-primary" />
                                        <span className={`text-sm leading-relaxed ${plan.featured ? "text-white/88" : "text-foreground"}`}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <button
                                    type="button"
                                    onClick={handlePlanClick}
                                    className={`inline-flex w-full cursor-pointer items-center justify-center rounded-full border px-4 py-3 text-md font-semibold transition-colors duration-200 ${plan.featured
                                        ? "border-primary/40 bg-primary text-white hover:bg-[#e143ff]"
                                        : "border-border bg-background text-foreground hover:border-primary/30 hover:bg-primary/5"
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        Plans are monthly retainers. Results depend on your niche, offer, and consistency.
                    </p>
                </div>
            </div>
        </section>
    )
}
