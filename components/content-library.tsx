"use client"

import { useRef, useState } from "react"
import { ArrowLeft, ArrowRight, Play } from "lucide-react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type ContentType = "videos" | "reels"

type ContentItem = {
    type: ContentType
    title: string
    description: string
    href: string
    embedHref?: string
    platform: "YouTube" | "Instagram"
    accent: string
}

const contentItems: ContentItem[] = [
    {
        type: "videos",
        title: "Get USA/Canada Number in Pakistan",
        description: "A practical walkthrough for setting up Zoom Phone and VoIP tools from Pakistan.",
        href: "https://www.youtube.com/@arfah_talks/videos",
        platform: "YouTube",
        accent: "from-[#ffe45f] via-[#ffb84d] to-[#1a1a1a]",
    },
    {
        type: "videos",
        title: "You Don't Need to Write Beautifully",
        description: "A grounded reminder on writing clearly, creating consistently, and removing pressure.",
        href: "https://www.youtube.com/@arfah_talks/videos",
        platform: "YouTube",
        accent: "from-[#1a1a1a] via-[#5a4a34] to-[#fff0bd]",
    },
    {
        type: "videos",
        title: "How I Write Upwork Proposals",
        description: "A strategy-led look at proposals, positioning, and turning services into clearer offers.",
        href: "https://www.youtube.com/@arfah_talks/videos",
        platform: "YouTube",
        accent: "from-[#dff9f2] via-[#fffef8] to-[#d61aff]",
    },
    {
        type: "videos",
        title: "Build a Portfolio Without Coding",
        description: "A simple way to make your work easier to understand, present, and trust.",
        href: "https://www.youtube.com/@arfah_talks/videos",
        platform: "YouTube",
        accent: "from-[#1a1a1a] via-[#714a2f] to-[#efc5d0]",
    },
    {
        type: "videos",
        title: "I Used My Student Email & Got Tools Free",
        description: "A useful breakdown of free tools, domains, courses, and practical creator resources.",
        href: "https://www.youtube.com/@arfah_talks/videos",
        platform: "YouTube",
        accent: "from-[#fff0bd] via-[#bd7a00] to-[#111317]",
    },
    {
        type: "videos",
        title: "Documenting My Ordinary Life",
        description: "A softer creator video about showing up, recording ordinary days, and building momentum.",
        href: "https://www.youtube.com/@arfah_talks/videos",
        platform: "YouTube",
        accent: "from-[#f6f1ef] via-[#8b6f47] to-[#111317]",
    },
    {
        type: "videos",
        title: "I Did Not Choose 9-5",
        description: "A creator-life reflection on process, work, and building a path with intention.",
        href: "https://www.youtube.com/@arfah_talks/videos",
        platform: "YouTube",
        accent: "from-[#dff9f2] via-[#0b9580] to-[#111317]",
    },
    {
        type: "videos",
        title: "This Book Changed My Idea of Creativity",
        description: "A short essay-style video on ideas, creative confidence, and stealing like an artist.",
        href: "https://www.youtube.com/@arfah_talks/videos",
        platform: "YouTube",
        accent: "from-[#eee5ff] via-[#7b3ff2] to-[#111317]",
    },
    {
        type: "reels",
        title: "Hooks that make people stop scrolling",
        description: "Short-form prompts for turning ordinary ideas into stronger opening lines.",
        href: "https://www.instagram.com/reel/DXw8KtwNIUT/",
        embedHref: "https://www.instagram.com/reel/DXw8KtwNIUT/embed",
        platform: "Instagram",
        accent: "from-[#ffe1ed] via-[#d61aff] to-[#1a1a1a]",
    },
    {
        type: "reels",
        title: "Content pillars that do not feel robotic",
        description: "How I think about repeatable themes without making your brand sound generic.",
        href: "https://www.instagram.com/reel/DXhFt1Ws9Qe/",
        embedHref: "https://www.instagram.com/reel/DXhFt1Ws9Qe/embed",
        platform: "Instagram",
        accent: "from-[#fff0bd] via-[#f6f1ef] to-[#bd7a00]",
    },
    {
        type: "reels",
        title: "Profile fixes that build trust faster",
        description: "Small positioning changes that make your Instagram easier to understand at a glance.",
        href: "https://www.instagram.com/reel/DXUbfruMUhr/",
        embedHref: "https://www.instagram.com/reel/DXUbfruMUhr/embed",
        platform: "Instagram",
        accent: "from-[#dff9f2] via-[#0b9580] to-[#111317]",
    },
    {
        type: "reels",
        title: "Turn views into a brand people remember",
        description: "A short-form lens on growth, consistency, and content that compounds.",
        href: "https://www.instagram.com/reel/DXCmaQ1DGpC/",
        embedHref: "https://www.instagram.com/reel/DXCmaQ1DGpC/embed",
        platform: "Instagram",
        accent: "from-[#eee5ff] via-[#7b3ff2] to-[#1a1a1a]",
    },
    {
        type: "reels",
        title: "Make content easier to repeat",
        description: "Simple systems for batching, testing, and showing up without overthinking every post.",
        href: "https://www.instagram.com/reel/DW_-DF6jQwj/",
        embedHref: "https://www.instagram.com/reel/DW_-DF6jQwj/embed",
        platform: "Instagram",
        accent: "from-[#e3f4ff] via-[#1489c8] to-[#111317]",
    },
    {
        type: "reels",
        title: "What to post when you feel stuck",
        description: "A practical way to find ideas from your own work, questions, and audience moments.",
        href: "https://www.instagram.com/reel/DW7SA0TDY5A/",
        embedHref: "https://www.instagram.com/reel/DW7SA0TDY5A/embed",
        platform: "Instagram",
        accent: "from-[#efc5d0] via-[#b56b8c] to-[#111317]",
    },
    {
        type: "reels",
        title: "Short-form ideas from daily work",
        description: "A real example of using everyday moments as simple, repeatable content.",
        href: "https://www.instagram.com/reel/DWuPsxujmwH/",
        embedHref: "https://www.instagram.com/reel/DWuPsxujmwH/embed",
        platform: "Instagram",
        accent: "from-[#efc5d0] via-[#b56b8c] to-[#111317]",
    },
]

const tabs: { label: string; value: ContentType }[] = [
    { label: "Videos", value: "videos" },
    { label: "Reels", value: "reels" },
]

function ContentCard({ item }: { item: ContentItem }) {
    const isReel = item.type === "reels"

    return (
        <article
            className="group flex min-h-[28rem] w-[82vw] max-w-[24rem] shrink-0 snap-start flex-col overflow-hidden rounded-[26px] bg-[#f6f1ef] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-58px_rgba(26,26,26,0.55)] sm:w-[24rem] lg:w-[25rem]"
        >
            <div className={`relative overflow-hidden bg-gradient-to-br ${item.accent} ${isReel ? "min-h-[22rem]" : "min-h-44"}`}>
                {isReel && item.embedHref ? (
                    <iframe
                        src={item.embedHref}
                        title={`${item.title} Instagram reel`}
                        loading="lazy"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full border-0 bg-white"
                    />
                ) : (
                    <>
                        {/*
                        When real thumbnails are ready, replace the gradient treatment with:
                        <Image
                            src={item.thumbnail}
                            alt={`${item.title} thumbnail`}
                            fill
                            sizes="(max-width: 640px) 82vw, 25rem"
                            className="object-cover"
                        />
                        */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.5),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.28),transparent_30%)]" />

                        <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm">
                            <Play className="h-5 w-5 fill-current" aria-hidden />
                        </div>
                        <div className="absolute inset-x-6 bottom-6">
                            <p className="max-w-xs font-display text-3xl font-black leading-[0.95] text-white drop-shadow">
                                {item.title}
                            </p>
                        </div>
                    </>
                )}


            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-2xl font-black leading-tight text-foreground sm:text-[1.7rem]">
                    {item.title}
                </h3>
                <p className="mt-4 font-sans text-sm font-semibold leading-6 text-foreground/68">
                    {item.description}
                </p>
                <div className="mt-auto pt-7">
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 font-sans text-sm font-extrabold text-foreground"
                    >
                        <span className="underline underline-offset-4">{isReel ? "Open reel" : "View"}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </a>
                </div>
            </div>
        </article>
    )
}

export default function ContentLibrary() {
    const { ref, isVisible } = useScrollAnimation()
    const [activeTab, setActiveTab] = useState<ContentType>("videos")
    const scrollerRef = useRef<HTMLDivElement>(null)
    const activeItems = contentItems.filter((item) => item.type === activeTab)

    const scrollCards = (direction: "prev" | "next") => {
        const scroller = scrollerRef.current
        if (!scroller) return
        scroller.scrollBy({
            left: direction === "next" ? scroller.clientWidth * 0.84 : -scroller.clientWidth * 0.84,
            behavior: "smooth",
        })
    }

    return (
        <section
            id="content-library"
            ref={ref}
            className={`w-full bg-background px-5 py-20 transition-all duration-1000 sm:px-8 lg:px-16 lg:py-28 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
        >
            <div className="mx-auto max-w-[82.25rem]">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <h2 className="mt-5 max-w-3xl text-5xl font-black leading-[1.1] text-foreground sm:text-6xl">
                            Watch my most <span className="relative inline-block font-display text-6xl sm:text-7xl">Popular Content</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <div className="inline-flex w-fit rounded-full bg-[#f6f1ef] p-1.5">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.value}
                                    type="button"
                                    onClick={() => setActiveTab(tab.value)}
                                    className={`min-h-11 cursor-pointer rounded-full px-5 font-sans text-sm font-extrabold transition-colors ${activeTab === tab.value
                                        ? "bg-primary text-white shadow-[0_0_22px_rgba(214,26,255,0.2)]"
                                        : "text-foreground/60 hover:text-foreground"
                                        }`}
                                    aria-pressed={activeTab === tab.value}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => scrollCards("prev")}
                                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#ffd365] text-foreground transition-transform hover:-translate-y-0.5"
                                aria-label="Previous content"
                            >
                                <ArrowLeft className="h-5 w-5" aria-hidden />
                            </button>
                            <button
                                type="button"
                                onClick={() => scrollCards("next")}
                                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#ffd365] text-foreground transition-transform hover:-translate-y-0.5"
                                aria-label="Next content"
                            >
                                <ArrowRight className="h-5 w-5" aria-hidden />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    ref={scrollerRef}
                    className="mt-10 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {activeItems.map((item) => (
                        <ContentCard key={`${item.type}-${item.title}`} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
