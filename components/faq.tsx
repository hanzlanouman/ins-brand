"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function PlusMinus({ open }: { open: boolean }) {
    return (
        <span className="relative inline-block h-5 w-5" aria-hidden="true">
            <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-current transition-transform duration-300" />
            <span
                className={`absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-current origin-center transition-transform duration-300 ${
                    open ? "scale-y-0" : "scale-y-100"
                }`}
            />
        </span>
    )
}

const FAQS = [
    {
        question: "Who is this actually for?",
        answer:
            "This is for founders, experts, and business owners who want to grow on Instagram through personal branding but do not want to keep guessing what to post. It is best for people with real expertise, a real offer, and a willingness to show up consistently on camera.",
    },
    {
        question: "What am I paying for beyond just more content?",
        answer:
            "You are paying for clarity, positioning, structure, and consistency. The goal is not just to upload more reels. The goal is to make the content sharper, the profile more credible, and the brand easier to trust so the work compounds instead of feeling random.",
    },
    {
        question: "Do I still need to film myself?",
        answer:
            "Yes. If the goal is personal branding, your face and voice matter. The support is there to make filming easier by giving you clearer topics, hooks, scripts, and direction so you are not sitting there wondering what to say.",
    },
    {
        question: "Will you help with strategy, hooks, and scripts too?",
        answer:
            "Yes. That is one of the main reasons this works. The service is not only editing or posting support. It also includes content direction, topic planning, stronger hooks, and script support based on your niche, voice, and goals.",
    },
    {
        question: "How quickly should I expect results?",
        answer:
            "Some profiles look sharper almost immediately, but real growth depends on your niche, offer, content quality, and consistency. No honest person can guarantee virality. What can be improved quickly is clarity, positioning, and the quality of what goes out each month.",
    },
    {
        question: "Is there a long-term lock-in?",
        answer:
            "No. These are monthly packages. You can start with the package that fits your current stage, continue if it is working, or pause if the timing is not right.",
    },
    {
        question: "What if I am starting small and not a big creator yet?",
        answer:
            "That is fine. You do not need a huge audience to benefit from better positioning and better content. In many cases, it is more useful to build the brand properly early than to keep posting inconsistently and clean it up later.",
    },
]

export default function FAQ() {
    const { ref, isVisible } = useScrollAnimation()
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section
            ref={ref}
            id="faq"
            className={`w-full bg-background px-4 pb-8 pt-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                    <h2 className="font-hero text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        FAQs
                    </h2>
                </div>

                <div className="space-y-3">
                    {FAQS.map((faq, idx) => {
                        const open = openIndex === idx

                        return (
                            <div
                                key={faq.question}
                                className="overflow-hidden rounded-[24px] border border-border/70 bg-card shadow-[0_20px_60px_-56px_rgba(0,0,0,0.18)]"
                            >
                                <button
                                    onClick={() => setOpenIndex(idx)}
                                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-black/[0.02] dark:hover:bg-white/[0.03] sm:px-6"
                                    aria-expanded={open}
                                    aria-controls={`faq-panel-${idx}`}
                                >
                                    <span className="pr-4 text-base font-semibold leading-snug text-foreground">
                                        {faq.question}
                                    </span>
                                    <div className={`flex-shrink-0 transition-colors ${open ? "text-primary" : "text-foreground/70"}`}>
                                        <PlusMinus open={open} />
                                    </div>
                                </button>

                                <div
                                    id={`faq-panel-${idx}`}
                                    className={`grid transition-all duration-300 ease-out ${
                                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-border/60 px-5 py-5 sm:px-6">
                                            <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
