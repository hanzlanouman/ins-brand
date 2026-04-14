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
            "Staxly is a fit for founders, service businesses, and growing teams that need more than one isolated freelancer. It works best when you need software support, digital marketing, landing pages, content direction, and execution that actually connect to each other.",
    },
    {
        question: "Do you only build software, or do you handle marketing too?",
        answer:
            "Both. The work is centered around software solutions, but it also includes the marketing layer around the product or business. That can mean landing pages, funnels, automations, content strategy, content creation support, and broader digital growth execution.",
    },
    {
        question: "What am I really paying for each month?",
        answer:
            "You are paying for clarity, execution, and continuity. Instead of juggling a developer, a marketer, and a content person separately, you get one team that can connect the product, the message, and the growth system.",
    },
    {
        question: "Can you work with an existing business, website, or product?",
        answer:
            "Yes. You do not need to start from zero. Staxly can improve what already exists, whether that is a site, a web app, a funnel, or your content workflow, and build from there instead of replacing everything.",
    },
    {
        question: "Do you help with content strategy and creation too?",
        answer:
            "Yes. Content is part of the offer. That includes strategy, planning, hooks, structure, creative direction, and support around short-form content so the marketing side is as intentional as the software side.",
    },
    {
        question: "How quickly should I expect traction?",
        answer:
            "Some improvements are immediate, especially around clarity, experience, and offer presentation. Bigger business results depend on your market, your offer, and consistency. The goal is to improve the system so growth becomes more likely and less random.",
    },
    {
        question: "Is this a long-term contract?",
        answer:
            "No. These are monthly packages. You can start at the level that fits now, keep going if the work is useful, and scale the relationship when the business is ready for more.",
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
            <div className="mx-auto max-w-7xl">
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
