"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const SERVICES = [
    {
        title: "Software Solutions",
        description: "Apps, dashboards, portals, and internal tools built around the real workflow.",
    },
    {
        title: "Funnels & Landing Pages",
        description: "Offer pages and buyer journeys that help traffic convert more clearly.",
    },
    {
        title: "Content & Growth Systems",
        description: "Content, creative direction, and automation support that keep the brand moving.",
    },
]

const PROJECTS = [
    {
        tag: "Software",
        title: "Product and dashboard systems",
        description: "Digital product work designed around usage, clarity, and workflow.",
        image: "/ex.png",
        imageAlt: "Staxly software product and dashboard work",
        href: "/ex.png",
        cta: "Open snapshot",
    },
    {
        tag: "Funnels",
        title: "Landing pages that support conversion",
        description: "Pages that sharpen the offer and make the next step easier to take.",
        image: "/aaras.jpg",
        imageAlt: "Landing page and business website work",
        href: "/aaras.jpg",
        cta: "See preview",
    },
    {
        tag: "Brand & Content",
        title: "Founder-led content and positioning",
        description: "Brand-side execution that makes the business feel more intentional.",
        image: "/amir.webp",
        imageAlt: "Brand and content project work",
        href: "/amir.webp",
        cta: "View visual",
    },
]

export default function ProofGrid() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            id="services"
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="font-hero text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Services and selected work
                    </h2>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {SERVICES.map((service, index) => (
                        <article
                            key={service.title}
                            className="rounded-[24px] border border-border/70 bg-card px-6 py-6 text-left shadow-[0_20px_56px_-52px_rgba(0,0,0,0.12)]"
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/52">
                                Service {index + 1}
                            </p>
                            <h3 className="mt-3 text-[1.8rem] font-semibold tracking-tight text-foreground">
                                {service.title}
                            </h3>
                            <p className="mt-3 max-w-sm text-base leading-8 text-muted-foreground">
                                {service.description}
                            </p>
                        </article>
                    ))}
                </div>

                <div id="work" className="mt-14 space-y-10">
                    {PROJECTS.map((project, index) => {
                        const reverse = index % 2 === 1

                        return (
                            <article
                                key={project.title}
                                className={`grid gap-6 border-t border-border/70 pt-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
                            >
                                <div className="text-left">
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/52">
                                        {project.tag}
                                    </p>
                                    <h3 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight text-foreground sm:text-[2.2rem]">
                                        {project.title}
                                    </h3>
                                    <p className="mt-4 max-w-lg text-base leading-8 text-muted-foreground">
                                        {project.description}
                                    </p>

                                    <div className="mt-7">
                                        <Link
                                            href={project.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xs border border-border/80 bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:cursor-pointer hover:border-primary/40 hover:text-primary"
                                        >
                                            {project.cta}
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-[0_22px_64px_-54px_rgba(0,0,0,0.16)] sm:min-h-[380px]">
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        fill
                                        className="object-cover object-center"
                                        sizes="(max-width: 1024px) 100vw, 52vw"
                                    />
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
