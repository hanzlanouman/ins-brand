"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const SERVICES = [
    {
        title: "Software Solutions",
        description: "Custom web apps, client dashboards, internal tools, and product-focused builds that support the actual business.",
    },
    {
        title: "Landing Pages & Funnels",
        description: "Conversion-focused pages, funnels, and web flows that make the offer clearer and help the traffic work harder.",
    },
    {
        title: "Content Strategy & Creation",
        description: "Content systems, creative direction, and short-form support that keep the brand visible without the usual chaos.",
    },
    {
        title: "Automation & Growth Support",
        description: "Lead capture workflows, campaign support, and digital systems that reduce friction and keep growth more organized.",
    },
]

export default function ServicesOverview() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            id="services"
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 text-center">
                    <h2 className="font-hero text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Services
                    </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {SERVICES.map((service) => (
                        <article
                            key={service.title}
                            className="rounded-[28px] border border-border/70 bg-card p-7 shadow-[0_24px_70px_-56px_rgba(0,0,0,0.18)]"
                        >
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                                    {service.title}
                                </h3>
                            </div>
                            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                                {service.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

