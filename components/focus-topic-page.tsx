import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { MascotCTA } from "@/components/mascot-cta"
import { cn } from "@/lib/utils"

export type FocusTopicSlug = "branding" | "content-strategy" | "digital-products"

type ContentItem = {
    title: string
    description: string
    href: string
    label: string
    accent: string
}

type ServiceOffer = {
    title: string
    description: string
    includes: string[]
}

type ProcessStep = {
    title: string
    body: string
}

type FocusTopic = {
    slug: FocusTopicSlug
    title: string
    intro: string
    problem: string
    problemBody: string
    whoFor: string
    clarityHeading: string
    clarityBody: string[]
    clarityOutcomes: string[]
    clarityImage: string
    clarityImageAlt: string
    clarityImagePosition: string
    clarityCaption: string
    processTitle: string
    processSteps: ProcessStep[]
    surfaceBg: string
    tint: string
    heroImage: string
    heroImageAlt: string
    heroImagePosition: string
    contentTitle: string
    contentIntro: string
    content: ContentItem[]
    service: ServiceOffer
    serviceCtaTitle: string
    serviceCtaBody: string
    ctaButtonLabel: string
    ctaHelpPoints: string[]
    ctaClassName: string
    ctaFocusClassName: string
}

export const focusTopics: Record<FocusTopicSlug, FocusTopic> = {
    branding: {
        slug: "branding",
        title: "Brand Clarity",
        intro: "Make your profile easier to understand, trust, and remember.",
        problem: "Your profile should explain what you do before people have to ask.",
        problemBody:
            "If people need too much context to understand what you do, the brand is doing extra work in the wrong place. I help make your profile, message, and first impression clearer so the right people understand you faster.",
        whoFor:
            "For founders, creators, freelancers, and personal brands who want their page to explain them better.",
        clarityHeading: "Your profile should make the next step obvious.",
        clarityBody: [
            "If people need too much context to understand what you do, the brand is doing extra work in the wrong place.",
            "I help clean up the first things people see: your bio, pinned posts, offer sentence, and the trust signals that make the right people stay.",
            "The goal is not to make the page louder. It is to make the promise sharper, so a visitor can quickly understand who you help, what you offer, and why your work feels credible.",
        ],
        clarityOutcomes: ["Bio", "Pinned posts", "Offer message", "Trust signals", "First impression"],
        clarityImage: "/arfah/main-3.jpeg",
        clarityImageAlt: "Arfah looking to the side",
        clarityImagePosition: "object-[50%_61%]",
        clarityCaption: "The page should feel clear before anyone opens the first post.",
        processTitle: "What we'll shape together",
        processSteps: [
            {
                title: "Clean up the first impression",
                body: "Make the top of your profile easier to understand in a few seconds.",
            },
            {
                title: "Rewrite the message",
                body: "Clarify who you help, what you do, and why someone should trust you.",
            },
            {
                title: "Map the content direction",
                body: "Turn the clearer positioning into pinned posts and content lanes.",
            },
        ],
        surfaceBg: "bg-[#e9fbf4]",
        tint: "bg-[#c6f5e8]",
        heroImage: "/areas/branding.png",
        heroImageAlt: "Brand clarity illustration",
        heroImagePosition: "",
        contentTitle: "A few places to start",
        contentIntro: "A few places to see how I think about profile clarity, trust, and being easier to remember.",
        content: [
            {
                title: "Build a Portfolio Without Coding",
                description: "A practical video on presenting your work clearly before you have a big personal site.",
                href: "https://www.youtube.com/@arfah_talks/videos",
                label: "Watch",
                accent: "bg-[#dff9f2]",
            },
            {
                title: "Profile fixes that build trust faster",
                description: "Small positioning changes that make your Instagram easier to understand at a glance.",
                href: "https://www.instagram.com/reel/DXUbfruMUhr/",
                label: "Watch",
                accent: "bg-[#f6f1ef]",
            },
            {
                title: "Turn views into a brand people remember",
                description: "How I think about attention, trust, and becoming known for something specific.",
                href: "https://www.instagram.com/reel/DXCmaQ1DGpC/",
                label: "Read",
                accent: "bg-[#eee5ff]",
            },
        ],
        service: {
            title: "Brand Clarity Audit",
            description:
                "I’ll review your profile, bio, pinned posts, and offer message, then give you practical fixes to make your page clearer, stronger, and easier to trust.",
            includes: [
                "Profile audit",
                "Bio rewrite",
                "Positioning notes",
                "Content direction",
                "Loom walkthrough",
            ],
        },
        serviceCtaTitle: "Want a clearer brand page?",
        serviceCtaBody:
            "I’ll help you make your profile clearer, easier to trust, and easier to act on.",
        ctaButtonLabel: "Book a brand clarity call",
        ctaHelpPoints: [
            "Review your profile, bio, and pinned posts",
            "Clarify the offer message",
            "Leave with practical next-step fixes",
        ],
        ctaClassName: "bg-[#0b9580] text-white shadow-[0_0_22px_rgba(11,149,128,0.18)] hover:bg-[#087f6d]",
        ctaFocusClassName: "focus-visible:ring-[#0b9580]/45",
    },
    "content-strategy": {
        slug: "content-strategy",
        title: "Content Strategy",
        intro: "Turn scattered ideas into a repeatable content plan.",
        problem: "Good content gets easier when you know what to say, why it matters, and how it connects to your offer.",
        problemBody:
            "Most people do not need more random ideas. They need clearer themes, better hooks, and a plan that makes showing up feel lighter. I help turn messy thoughts into a content direction you can actually keep using.",
        whoFor:
            "For creators and service providers whose ideas feel scattered or whose content lacks structure.",
        clarityHeading: "Good content gets easier when the thinking has a home.",
        clarityBody: [
            "Most people do not need more random ideas. They need clearer themes, better hooks, and a plan that makes showing up feel lighter.",
            "I help turn messy thoughts, proof, stories, and offers into a content direction you can actually keep using.",
            "We look for the ideas you can repeat without sounding repetitive: the beliefs, examples, questions, and offers that can become a weekly content rhythm instead of a blank-page problem.",
        ],
        clarityOutcomes: ["Pillars", "Hooks", "Scripts", "Weekly rhythm", "Offer direction"],
        clarityImage: "/arfah/main-3.jpeg",
        clarityImageAlt: "Arfah working on content",
        clarityImagePosition: "object-[52%_50%]",
        clarityCaption: "The goal is not more content. It is content you can repeat without sounding forced.",
        processTitle: "What we'll shape together",
        processSteps: [
            {
                title: "Find the repeatable lanes",
                body: "Sort your ideas, stories, proof, and beliefs into themes you can return to.",
            },
            {
                title: "Build stronger hooks",
                body: "Turn flat ideas into openings with tension, context, and a reason to keep reading.",
            },
            {
                title: "Plan the weekly rhythm",
                body: "Create a simple direction for what to post, test, and repeat next.",
            },
        ],
        surfaceBg: "bg-[#e4f7f8]",
        tint: "bg-[#bfeff2]",
        heroImage: "/areas/content-strat.png",
        heroImageAlt: "Content strategy illustration",
        heroImagePosition: "",
        contentTitle: "Useful content strategy resources",
        contentIntro: "Start here if your ideas feel scattered or your content keeps restarting from zero.",
        content: [
            {
                title: "Content pillars that do not feel robotic",
                description: "How I think about repeatable themes without making your brand sound generic.",
                href: "https://www.instagram.com/reel/DXhFt1Ws9Qe/",
                label: "Watch",
                accent: "bg-[#e4f7f8]",
            },
            {
                title: "Hooks that make people stop scrolling",
                description: "Short-form prompts for turning ordinary ideas into stronger opening lines.",
                href: "https://www.instagram.com/reel/DXw8KtwNIUT/",
                label: "Watch",
                accent: "bg-[#ffe1ed]",
            },
            {
                title: "You Don't Need to Write Beautifully",
                description: "A grounded reminder on writing clearly, creating consistently, and removing pressure.",
                href: "https://www.youtube.com/@arfah_talks/videos",
                label: "Watch",
                accent: "bg-[#f6f1ef]",
            },
        ],
        service: {
            title: "Content Strategy Sprint",
            description:
                "I’ll help you turn your ideas, proof, and offer into a content direction that feels natural to you and easier to repeat.",
            includes: [
                "Content pillar map",
                "Hook angles",
                "Script ideas",
                "Posting direction",
                "Loom walkthrough",
            ],
        },
        serviceCtaTitle: "Need help turning this into a system?",
        serviceCtaBody:
            "I’ll help you turn scattered ideas into a content system you can actually repeat.",
        ctaButtonLabel: "Book a content strategy call",
        ctaHelpPoints: [
            "Turn ideas into content pillars",
            "Build hook and script angles",
            "Leave with a repeatable weekly direction",
        ],
        ctaClassName: "bg-[#0c8190] text-white shadow-[0_0_22px_rgba(12,129,144,0.18)] hover:bg-[#0a6f7c]",
        ctaFocusClassName: "focus-visible:ring-[#0c8190]/45",
    },
    "digital-products": {
        slug: "digital-products",
        title: "Digital Products",
        intro: "Package what you know into simple resources people can buy.",
        problem: "Your best first product is usually hiding inside the advice, templates, and frameworks you already repeat.",
        problemBody:
            "The best first product is often not a huge course. It is the checklist, template, guide, or resource that already shows up in your work. I help shape that into something clearer, easier to position, and easier to sell.",
        whoFor:
            "For people who want to turn their knowledge, repeated advice, or templates into simple paid resources.",
        clarityHeading: "Your first product is probably already inside your work.",
        clarityBody: [
            "The best first product is often not a huge course. It is the checklist, template, guide, or resource that already shows up in your work.",
            "I help shape that into something clearer, easier to position, and easier to connect back to your content or service.",
            "We focus on the smallest product that still feels valuable: a simple promise, a clean structure, and a reason for people to save it, use it, or buy it without needing a long explanation.",
        ],
        clarityOutcomes: ["Product idea", "Offer shape", "Resource outline", "Launch angles", "Gumroad direction"],
        clarityImage: "/arfah/main.jpeg",
        clarityImageAlt: "Arfah in a pink outfit",
        clarityImagePosition: "object-[center_75%]",
        clarityCaption: "A simple resource should feel like the natural next step, not another confusing thing to maintain.",
        processTitle: "What we'll shape together",
        processSteps: [
            {
                title: "Choose the product shape",
                body: "Find the resource, lead magnet, template, or offer that makes the most sense to start with.",
            },
            {
                title: "Outline the resource",
                body: "Turn the idea into a simple structure people can understand and use.",
            },
            {
                title: "Plan the launch content",
                body: "Connect the product to angles, posts, and proof that make the offer easier to explain.",
            },
        ],
        surfaceBg: "bg-[#f1eaff]",
        tint: "bg-[#e2d4ff]",
        heroImage: "/areas/digital-products.png",
        heroImageAlt: "Digital products illustration",
        heroImagePosition: "",
        contentTitle: "Free product ideas & resources",
        contentIntro: "A few examples around offers, tools, proposals, and turning repeated work into a resource.",
        content: [
            {
                title: "How I Write Upwork Proposals",
                description: "A strategy-led look at proposals, positioning, and turning services into clearer offers.",
                href: "https://www.youtube.com/@arfah_talks/videos",
                label: "Watch",
                accent: "bg-[#ffe1ed]",
            },
            {
                title: "I Used My Student Email & Got Tools Free",
                description: "A breakdown of free tools, domains, courses, and practical creator resources.",
                href: "https://www.youtube.com/@arfah_talks/videos",
                label: "Watch",
                accent: "bg-[#fff0bd]",
            },
            {
                title: "Make content easier to repeat",
                description: "Simple systems for batching, testing, and turning repeated work into assets.",
                href: "https://www.instagram.com/reel/DW_-DF6jQwj/",
                label: "Watch",
                accent: "bg-[#e3f4ff]",
            },
        ],
        service: {
            title: "Digital Product Packaging",
            description:
                "I’ll help you shape your idea into a resource, lead magnet, template, or small product people can understand and actually want.",
            includes: [
                "Product idea selection",
                "Offer positioning",
                "Resource outline",
                "Launch content angles",
                "Loom walkthrough",
            ],
        },
        serviceCtaTitle: "Have an idea worth packaging?",
        serviceCtaBody:
            "I’ll help you shape the resource, lead magnet, or offer hiding inside your work.",
        ctaButtonLabel: "Book a product strategy call",
        ctaHelpPoints: [
            "Choose the clearest product idea",
            "Shape the offer and resource outline",
            "Plan launch content angles",
        ],
        ctaClassName: "bg-[#7b3ff2] text-white shadow-[0_0_22px_rgba(123,63,242,0.18)] hover:bg-[#6930d8]",
        ctaFocusClassName: "focus-visible:ring-[#7b3ff2]/45",
    },
}

function externalProps(href: string) {
    return href.startsWith("http")
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
        }
        : {}
}

function HeroVisual({ topic }: { topic: FocusTopic }) {
    return (
        <div className="relative mx-auto flex min-h-[22rem] w-full max-w-[28rem] items-center justify-center lg:mx-0 lg:ml-auto">
            <div className={cn("absolute left-10 top-[42%] h-[19rem] w-[min(82vw,21.5rem)] -translate-y-1/2 rounded-[3rem]", topic.tint)} />
            <div className="absolute right-0 top-4 hidden h-44 w-44 rounded-full bg-white/28 sm:block" />
            <div className="absolute bottom-2 right-3 hidden h-28 w-56 -rotate-6 rounded-full bg-white/18 sm:block" />
            <div className="relative ml-auto aspect-square w-[min(82vw,21.5rem)] overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_34px_90px_-64px_rgba(26,26,26,0.55)]">
                <Image
                    src={topic.heroImage}
                    alt={topic.heroImageAlt}
                    fill
                    sizes="(max-width: 768px) 82vw, 360px"
                    className={cn("object-cover", topic.heroImagePosition)}
                    priority
                />
            </div>
        </div>
    )
}

function ThumbnailSlot({ item }: { item: ContentItem }) {
    return (
        <div className={cn("relative aspect-[16/9] overflow-hidden rounded-t-[26px]", item.accent)}>
            {/*
            Replace this placeholder with a real thumbnail when ready:
            <Image
                src={item.thumbnail}
                alt={`${item.title} thumbnail`}
                fill
                sizes="(max-width: 768px) 86vw, 420px"
                className="object-cover"
            />
            */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.78),transparent_31%),radial-gradient(circle_at_82%_72%,rgba(255,255,255,0.38),transparent_34%)]" />
            <div className="absolute left-6 top-6 h-16 w-16 rounded-full bg-white/52" />
            <div className="absolute right-8 top-7 h-20 w-28 rotate-12 rounded-[1.35rem] bg-white/40" />
            <div className="absolute bottom-7 left-8 h-3 w-36 -rotate-6 rounded-full bg-white/55" />
        </div>
    )
}

function ContentCard({ item }: { item: ContentItem }) {
    return (
        <a
            href={item.href}
            {...externalProps(item.href)}
            className="group flex min-h-[25rem] flex-col overflow-hidden rounded-[26px] bg-[#f6f1ef] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_80px_-58px_rgba(26,26,26,0.55)]"
        >
            <ThumbnailSlot item={item} />
            <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-display text-2xl font-black leading-tight text-foreground sm:text-3xl">
                    {item.title}
                </h3>
                <p className="mt-4 font-sans text-sm font-semibold leading-6 text-foreground/68">
                    {item.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-3 pt-7 font-sans text-sm font-extrabold text-foreground">
                    <span className="underline underline-offset-4">{item.label}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
            </div>
        </a>
    )
}

function ClaritySection({ topic }: { topic: FocusTopic }) {
    return (
        <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
            <div className="mx-auto max-w-[82.5rem]">
                <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:gap-20">
                    <div>
                        <h2 className="max-w-4xl font-display text-4xl font-black leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
                            {topic.clarityHeading}
                        </h2>
                        <div className="mt-7 max-w-3xl space-y-5 font-sans text-base font-semibold leading-7 text-foreground/68 sm:text-lg sm:leading-8">
                            {topic.clarityBody.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-9 flex max-w-4xl flex-wrap gap-2.5">
                            {topic.clarityOutcomes.map((item) => (
                                <span
                                    key={item}
                                    className={cn(
                                        "rounded-full px-4 py-2 font-sans text-sm font-extrabold text-foreground/70",
                                        topic.surfaceBg
                                    )}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <aside className="relative">
                        <div className={cn("absolute -bottom-5 -right-5 h-32 w-32 rounded-full", topic.tint)} />
                        <div className="relative rounded-[30px] bg-[#f6f1ef] p-3 shadow-[0_26px_90px_-72px_rgba(26,26,26,0.65)] sm:p-4">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-white">
                                <Image
                                    src={topic.clarityImage}
                                    alt={topic.clarityImageAlt}
                                    fill
                                    sizes="(max-width: 768px) 90vw, 470px"
                                    className={cn("object-cover", topic.clarityImagePosition)}
                                />
                            </div>
                            <div className="mt-3 rounded-[22px] bg-white/72 p-5">
                                <p className="font-sans text-sm font-extrabold leading-6 text-foreground/72">
                                    {topic.clarityCaption}
                                </p>
                                <p className="mt-4 border-t border-foreground/10 pt-4 font-sans text-sm font-semibold leading-6 text-foreground/54">
                                    {topic.whoFor}
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

function ProcessSection({ topic }: { topic: FocusTopic }) {
    return (
        <section className="px-5 pb-20 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-[82.5rem] border-y border-foreground/10 py-14 sm:py-16">
                <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start lg:gap-16">
                    <div>
                        <h2 className="max-w-lg font-display text-4xl font-black leading-tight text-foreground sm:text-5xl">
                            {topic.processTitle}
                        </h2>
                        <p className="mt-5 max-w-md font-sans text-base font-semibold leading-7 text-foreground/62">
                            We keep the work practical: clarify the messy parts, shape the next move, and leave with something you can actually use.
                        </p>
                    </div>

                    <div className="rounded-[30px] bg-[#f6f1ef] p-5 sm:p-6">
                        <div className="divide-y divide-foreground/10">
                            {topic.processSteps.map((step, index) => (
                                <article key={step.title} className="grid gap-4 py-6 first:pt-2 last:pb-2 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                                    <div
                                        className={cn(
                                            "flex h-12 w-12 items-center justify-center rounded-full font-display text-xl font-black text-foreground",
                                            topic.surfaceBg
                                        )}
                                    >
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl font-black leading-tight text-foreground sm:text-3xl">
                                            {step.title}
                                        </h3>
                                        <p className="mt-3 max-w-2xl font-sans text-sm font-semibold leading-6 text-foreground/64 sm:text-base sm:leading-7">
                                            {step.body}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ServiceBox({ topic }: { topic: FocusTopic }) {
    return (
        <section className="px-5 pb-20 sm:px-8 lg:px-16">
            <div className={cn("mx-auto grid max-w-[82.5rem] gap-7 rounded-[30px] p-6 sm:p-8 lg:grid-cols-[1fr_0.62fr] lg:items-center lg:p-10", topic.surfaceBg)}>
                <div>
                    <h2 className="max-w-3xl font-display text-4xl font-black leading-[1] text-foreground sm:text-5xl">
                        {topic.serviceCtaTitle}
                    </h2>
                    {/* <p className="mt-4 max-w-2xl font-sans text-base font-semibold leading-7 text-foreground/68">
                        {topic.serviceCtaBody}
                    </p> */}
                    <MascotCTA
                        href="/book-your-call"
                        reserveSpace
                        wrapperClassName="mt-1"
                        className={topic.ctaClassName}
                    >
                        {topic.ctaButtonLabel}
                    </MascotCTA>
                </div>

                <div className="rounded-[24px] bg-white/52 p-5 sm:p-6">
                    <h3 className="font-display text-2xl font-black leading-tight text-foreground sm:text-3xl">
                        On the call, I&apos;ll help you:
                    </h3>
                    <div className="mt-5 grid gap-3">
                        {topic.ctaHelpPoints.map((point) => (
                            <p key={point} className="font-sans text-md font-bold leading-6 text-foreground/80">
                                {point}
                            </p>
                        ))}
                    </div>
                    <p className="mt-5 font-sans text-sm font-semibold leading-5 text-foreground/55">
                        Simple, focused, and built around what your brand needs next.
                    </p>
                </div>
            </div>
        </section>
    )
}

export function FocusTopicPage({ topic }: { topic: FocusTopic }) {
    return (
        <main className="min-h-screen bg-background">
            <section className="px-2 pt-4 sm:px-6">
                <div className={cn("relative mx-auto max-w-[82.5rem] overflow-hidden rounded-3xl px-6 pb-12 pt-36 sm:px-10 sm:pb-14 sm:pt-40 lg:px-16 lg:pb-20", topic.surfaceBg)}>
                    <div className="absolute -right-[38rem] -top-[34rem] h-[72rem] w-[72rem] rounded-full border-[74px] border-white/70" />
                    <div className="relative grid gap-10 lg:grid-cols-[0.96fr_0.78fr] lg:items-center lg:gap-16">
                        <div>
                            <h1 className="max-w-3xl font-display text-5xl font-black leading-[0.94] text-foreground sm:text-7xl lg:text-[5.4rem]">
                                {topic.title}
                            </h1>
                            <p className="mt-6 max-w-2xl font-sans text-base font-semibold leading-7 text-foreground/72 sm:text-xl sm:leading-9">
                                {topic.intro}
                            </p>
                        </div>

                        <HeroVisual topic={topic} />
                    </div>
                </div>
            </section>

            <ClaritySection topic={topic} />
            <ProcessSection topic={topic} />

            <section className="px-5 pb-20 sm:px-8 lg:px-16">
                <div className="mx-auto max-w-[82.5rem]">
                    <div className="max-w-4xl">
                        <h2 className="font-display text-4xl font-black leading-tight text-foreground sm:text-5xl">
                            {topic.contentTitle}
                        </h2>
                        <p className="mt-5 max-w-2xl font-sans text-base font-semibold leading-7 text-foreground/66">
                            {topic.contentIntro}
                        </p>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {topic.content.map((item) => (
                            <ContentCard key={item.title} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            <ServiceBox topic={topic} />
        </main>
    )
}
