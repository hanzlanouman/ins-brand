"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function PlusMinus({ open }: { open: boolean }) {
    return (
        <span className="relative inline-block h-5 w-5" aria-hidden="true">
            <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-current transition-transform duration-300" />
            <span
                className={`absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-current origin-center transition-transform duration-300 ${open ? "scale-y-0" : "scale-y-100"
                    }`}
            />
        </span>
    )
}

const FAQS = [
    {
        question: "What exactly is included each month?",
        answer:
            "Depending on your plan, the work can include strategy, content planning, hooks, script support, caption direction, editing support, profile clarity, and publishing guidance.",
    },
    {
        question: "Do I need to be on camera myself?",
        answer:
            "Yes, if you want to build a personal brand. Arfah helps make filming simpler and more structured, but you still need to be the face and voice of the content.",
    },
    {
        question: "Will you help me figure out what to say?",
        answer:
            "Yes. A big part of the service is removing the guesswork. You get clearer topics, stronger hooks, better talking points, and a more intentional content direction.",
    },
    {
        question: "Is this only for established creators or big accounts?",
        answer:
            "No. It works for newer accounts that need clarity and for existing founders or experts who already have an audience but want a sharper content system.",
    },
    {
        question: "Do you guarantee followers, reach, or virality?",
        answer:
            "No. The service is built around better positioning, stronger content, and consistency. Those improve your chances of growth, but no honest service can guarantee virality.",
    },
    {
        question: "Can I start small or pause later?",
        answer:
            "Yes. These are monthly retainers, not lock-in contracts. You can start with the level of support that fits now and adjust as the brand grows.",
    },
]

export default function FAQ() {
    const { ref, isVisible } = useScrollAnimation()
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section
            ref={ref}
            id="faq"
            className={`w-full bg-background px-4 pb-8 pt-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-10">
                    <div className="lg:pt-3">
                        <h2 className="text-4xl text-center font-bold tracking-tight text-foreground sm:text-6xl">
                            FAQ
                        </h2>
                        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Straight answers to the things people usually want to know before they commit.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {FAQS.map((faq, idx) => {
                            const open = openIndex === idx

                            return (
                                <div key={faq.question} className="overflow-hidden rounded-[22px] border border-border/70 bg-card">
                                    <button
                                        onClick={() => setOpenIndex(open ? null : idx)}
                                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/30"
                                        aria-expanded={open}
                                        aria-controls={`faq-panel-${idx}`}
                                    >
                                        <span className="pr-4 text-sm font-medium text-foreground sm:text-base">
                                            {faq.question}
                                        </span>
                                        <div className="flex-shrink-0 text-primary">
                                            <PlusMinus open={open} />
                                        </div>
                                    </button>

                                    <div
                                        id={`faq-panel-${idx}`}
                                        className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="border-t border-border/60 bg-muted/20 px-6 py-4">
                                                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
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
            </div>
        </section>
    )
}
