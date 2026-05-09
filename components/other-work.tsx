"use client"

import { ArrowUpRight } from "lucide-react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const workItems = [
    {
        title: "Staxly Solutions",
        href: "https://www.staxlysolutions.com/",
    },
    {
        title: "AutoReady",
        href: "https://www.autoready.app/",
    },
    {
        title: "Gumroad",
        href: "https://arfah.gumroad.com/",
    },
    {
        title: "Upwork",
        href: "https://www.upwork.com/freelancers/~01569a5d5741fa327a",
    },
]

export default function OtherWork() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            ref={ref}
            className={`w-full bg-background px-5 pb-10 pt-2 transition-all duration-1000 sm:px-8 lg:px-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
        >
            <div className="mx-auto flex max-w-[82.25rem] flex-col gap-5 border-t border-foreground/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="font-display text-2xl font-black leading-tight text-foreground sm:text-3xl">
                        More from Arfah
                    </h2>
                    <p className="mt-1 font-sans text-sm font-semibold text-foreground/58">
                        Projects, products, and places to work with me.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2.5">
                    {workItems.map(({ title, href }) => (
                        <a
                            key={title}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex min-h-10 items-center gap-2 rounded-full bg-[#f6f1ef] px-4 font-sans text-sm font-extrabold text-foreground transition-colors hover:bg-primary hover:text-white"
                        >
                            {title}
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
