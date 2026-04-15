"use client"

import { PrimaryCTA } from "../primary-cta"

const SIDE_REVIEWS = [
    {
        quote: "The website, the offer, and the funnel finally started feeling like one system instead of separate pieces.",
        role: "Founder, service business",
        initial: "F",
    },
    {
        quote: "What we had before looked fine, but this felt much more deliberate and much easier to build growth around.",
        role: "Operator, growth team",
        initial: "O",
    },
]

export default function HeroContent() {
    return (
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-0">
            <div className="py-8 md:py-20">
                <h1 className="mx-auto  font-hero uppercase text-[3.05rem] font-extrabold tracking-tight sm:text-6xl lg:text-[5.45rem]">
                    <span className="block text-balance text-foreground">Build digital systems</span>
                    <span className="mt-1 block text-balance text-primary">that actually grow.</span>
                </h1>

                <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                    Staxly Solutions helps founders and growing businesses connect software, marketing, and content into one sharper engine. Web apps, landing pages, funnels, content systems, and conversion-focused execution are built to move together.
                </p>

                <div className="flex justify-center pt-7">
                    <PrimaryCTA
                        id="hero-cta"
                        onClick={() => {
                            requestAnimationFrame(() => {
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                })
                            })
                        }}
                    />
                </div>

                <div className="mt-12 grid items-end gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                    <article className="rounded-[34px] border border-border/70 bg-card px-7 py-8 text-left shadow-[0_28px_80px_-58px_rgba(0,0,0,0.18)] sm:px-9 sm:py-9">
                        <div className="flex items-center gap-1 text-primary">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <span key={index} className="text-xl leading-none">
                                    ★
                                </span>
                            ))}
                        </div>

                        <p className="mt-6 max-w-4xl text-2xl font-medium leading-[1.45] text-foreground sm:text-[2rem]">
                            &ldquo;Staxly brought the build side and the messaging side together in a way that most teams usually split apart.&rdquo;
                        </p>

                        <div className="mt-8 flex flex-col gap-6 border-t border-border/70 pt-6 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-2xl font-semibold tracking-tight text-foreground">
                                    Startup collaborator
                                </p>
                                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                    Trust, clarity, and better alignment
                                </p>
                            </div>
                            <span className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                                5-star feedback
                            </span>
                        </div>
                    </article>

                    <div className="grid gap-4">
                        {SIDE_REVIEWS.map((item) => (
                            <article
                                key={item.quote}
                                className="rounded-[28px] border border-border/70 bg-background px-6 py-6 text-left shadow-[0_22px_64px_-56px_rgba(0,0,0,0.14)]"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-1 text-primary">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <span key={index} className="text-sm leading-none">
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                                        {item.initial}
                                    </div>
                                </div>

                                <p className="mt-4 text-lg leading-8 text-foreground/88">
                                    &ldquo;{item.quote}&rdquo;
                                </p>

                                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                                    {item.role}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
