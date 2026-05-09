import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { MascotCTA } from "@/components/mascot-cta"
import { focusTopics, type FocusTopicSlug } from "@/components/focus-topic-page"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
    title: "Work With Me - Arfah Ali",
    description:
        "Work with Arfah Ali on brand clarity, content strategy, and digital product packaging for creators, founders, and personal brands.",
}

const offerOrder: FocusTopicSlug[] = ["branding", "content-strategy", "digital-products"]

const offerNotes: Record<FocusTopicSlug, string> = {
    branding: "For profiles that need to explain the work faster.",
    "content-strategy": "For ideas that need a repeatable direction.",
    "digital-products": "For knowledge that is ready to become a resource.",
}

function ServiceCard({ slug }: { slug: FocusTopicSlug }) {
    const topic = focusTopics[slug]

    return (
        <article className="flex min-h-[30rem] flex-col rounded-[28px] bg-[#f6f1ef] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_80px_-58px_rgba(26,26,26,0.55)] sm:p-8">
            <p className="font-sans text-sm font-extrabold text-foreground/50">
                {offerNotes[slug]}
            </p>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight text-foreground">
                {topic.service.title}
            </h2>
            <p className="mt-5 font-sans text-base font-semibold leading-7 text-foreground/68">
                {topic.service.description}
            </p>

            <div className="mt-7 grid gap-3">
                {topic.service.includes.slice(0, 4).map((item) => (
                    <p key={item} className="border-t border-foreground/10 pt-3 font-sans text-sm font-extrabold text-foreground/78">
                        {item}
                    </p>
                ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-5 pt-8">
                <Link
                    href={`/focus/${slug}`}
                    className="inline-flex items-center gap-2 font-sans text-sm font-extrabold text-foreground"
                >
                    <span className="underline underline-offset-4">See focus page</span>
                    <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                    href="/book-your-call"
                    className={cn(
                        "inline-flex min-h-11 items-center justify-center rounded-full px-5 font-sans text-sm font-extrabold transition-colors",
                        topic.ctaClassName
                    )}
                >
                    Book a call
                </Link>
            </div>
        </article>
    )
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <section className="px-2 pt-4 sm:px-6">
                <div className="mx-auto max-w-[82.5rem] rounded-3xl bg-[#efc5d040] px-6 pb-14 pt-36 sm:px-10 sm:pt-40 lg:px-16 lg:pb-20">
                    <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
                        <div>
                            <h1 className="max-w-4xl font-display text-5xl font-black leading-[0.94] text-foreground sm:text-7xl lg:text-[5.4rem]">
                                Work with me
                            </h1>
                            <p className="mt-7 max-w-2xl font-sans text-base font-semibold leading-7 text-foreground/72 sm:text-xl sm:leading-9">
                                I help creators, founders, and personal brands make their message clearer, their content easier to repeat, and their offers easier to understand.
                            </p>
                        </div>

                        <div className="rounded-[28px] bg-white/50 p-6 sm:p-8">
                            <p className="font-display text-3xl font-black leading-tight text-foreground">
                                Choose the clearest next move.
                            </p>
                            <p className="mt-4 font-sans text-sm font-semibold leading-6 text-foreground/62">
                                If you are not sure which offer fits, book the call. I will help you choose the simplest path before we make anything complicated.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
                <div className="mx-auto max-w-[82.5rem]">
                    <div className="max-w-3xl">
                        <h2 className="font-display text-4xl font-black leading-tight text-foreground sm:text-5xl">
                            Three ways I can help
                        </h2>
                        <p className="mt-5 font-sans text-base font-semibold leading-7 text-foreground/66">
                            Each offer is focused, practical, and built around one clear outcome.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-3">
                        {offerOrder.map((slug) => (
                            <ServiceCard key={slug} slug={slug} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-5 pb-20 sm:px-8 lg:px-16">
                <div className="mx-auto grid max-w-[82.5rem] gap-8 rounded-[30px] bg-[#efc5d040] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
                    <div>
                        <h2 className="max-w-3xl font-display text-4xl font-black leading-tight text-foreground sm:text-5xl">
                            Not sure what you need yet?
                        </h2>
                        <p className="mt-4 max-w-2xl font-sans text-base font-semibold leading-7 text-foreground/68">
                            Book a strategy call and I&apos;ll help you choose the simplest next step.
                        </p>
                    </div>

                    <MascotCTA href="/book-your-call" reserveSpace wrapperClassName="lg:ml-8">
                        Book a strategy call
                    </MascotCTA>
                </div>
            </section>
        </main>
    )
}
