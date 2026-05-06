"use client"

import { ArrowLeft, ArrowRight, FileText, NotebookPen, PackageOpen, Sparkles } from "lucide-react"
import { useRef } from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const resourceItems = [
    {
        title: "Content Notes",
        description: "My notes on hooks, Instagram growth, content strategy, and building a brand people remember.",
        href: "#content-notes",
        label: "Join the list",
        status: "Free",
        Icon: NotebookPen,
        accent: "from-[#ffe1ed] via-[#d61aff] to-[#1a1a1a]",
    },
    {
        title: "Hook Bank",
        description: "A swipe file of opening lines and content angles for when your ideas feel too flat.",
        href: "https://arfah.gumroad.com/",
        label: "Coming soon",
        status: "Gumroad",
        Icon: Sparkles,
        accent: "from-[#fff0bd] via-[#ffcf5f] to-[#bd7a00]",
    },
    {
        title: "Content Pillars Kit",
        description: "Turn scattered ideas into repeatable themes, buckets, and weekly content directions.",
        href: "https://arfah.gumroad.com/",
        label: "View products",
        status: "Template",
        Icon: PackageOpen,
        accent: "from-[#dff9f2] via-[#0b9580] to-[#111317]",
    },
    {
        title: "Profile Audit Checklist",
        description: "Make your bio, pinned posts, and offer easier to understand at a glance.",
        href: "https://arfah.gumroad.com/",
        label: "Get resource",
        status: "Checklist",
        Icon: FileText,
        accent: "from-[#eee5ff] via-[#7b3ff2] to-[#111317]",
    },
    {
        title: "Digital Product Starter",
        description: "Package your expertise into lead magnets, templates, and simple offers.",
        href: "https://arfah.gumroad.com/",
        label: "Explore",
        status: "Guide",
        Icon: PackageOpen,
        accent: "from-[#e3f4ff] via-[#1489c8] to-[#111317]",
    },
]

function ResourceCard({ item }: { item: (typeof resourceItems)[number] }) {
    const { title, description, href, label, status, Icon, accent } = item

    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex min-h-[25rem] w-[82vw] max-w-[24rem] shrink-0 snap-start flex-col overflow-hidden rounded-[26px] bg-[#f6f1ef] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-58px_rgba(26,26,26,0.55)] sm:w-[24rem] lg:w-[25rem]"
        >
            <div className={`relative min-h-44 overflow-hidden bg-gradient-to-br ${accent}`}>
                {/*
                When product/resource thumbnails are ready, replace the gradient treatment with:
                <Image
                    src={item.thumbnail}
                    alt={`${item.title} thumbnail`}
                    fill
                    sizes="(max-width: 640px) 82vw, 25rem"
                    className="object-cover"
                />
                */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.5),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.28),transparent_30%)]" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 font-sans text-xs font-extrabold text-foreground shadow-sm">
                    <Icon className="h-3.5 w-3.5 text-primary" aria-hidden />
                    {status}
                </div>

                <div className="absolute inset-x-6 bottom-6">
                    <p className="max-w-xs font-display text-3xl font-black leading-[0.95] text-white drop-shadow">
                        {title}
                    </p>
                </div>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
                {/* <h3 className="font-display text-2xl font-black leading-tight text-foreground sm:text-[1.7rem]">
                    {title}
                </h3> */}
                <p className="mt-4 font-sans text-sm font-semibold leading-6 text-foreground/68">
                    {description}
                </p>

                <div className="mt-auto pt-7">
                    <span className="inline-flex items-center gap-3 font-sans text-sm font-extrabold text-foreground">
                        <span className="underline underline-offset-4">{label}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                </div>
            </div>
        </a>
    )
}

export default function ResourcesEcosystem() {
    const { ref, isVisible } = useScrollAnimation()
    const scrollerRef = useRef<HTMLDivElement>(null)

    const scrollCards = (direction: "prev" | "next") => {
        const scroller = scrollerRef.current
        if (!scroller) return
        scroller.scrollBy({
            left: direction === "next" ? scroller.clientWidth * 0.82 : -scroller.clientWidth * 0.82,
            behavior: "smooth",
        })
    }

    return (
        <section
            id="resources"
            ref={ref}
            className={`w-full bg-background px-5 py-16 transition-all duration-1000 sm:px-8 lg:px-16 lg:py-24 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
        >
            <div className="mx-auto max-w-[82.25rem] overflow-visible">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <h2 className="max-w-3xl text-5xl font-black leading-[1.1] text-foreground sm:text-6xl">
                            Check out my most <span className="relative inline-block font-display text-6xl sm:text-7xl">Useful Resources</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => scrollCards("prev")}
                            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#ffd365] text-foreground transition-transform hover:-translate-y-0.5"
                            aria-label="Previous resource"
                        >
                            <ArrowLeft className="h-5 w-5" aria-hidden />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollCards("next")}
                            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#ffd365] text-foreground transition-transform hover:-translate-y-0.5"
                            aria-label="Next resource"
                        >
                            <ArrowRight className="h-5 w-5" aria-hidden />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollerRef}
                    className="mt-10 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {resourceItems.map((item) => (
                        <ResourceCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
