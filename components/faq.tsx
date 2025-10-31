"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Simple animated + ↔ − icon
function PlusMinus({ open }: { open: boolean }) {
    return (
        <span
            className="relative inline-block h-5 w-5"
            aria-hidden="true"
        >
            {/* horizontal bar */}
            <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-current transition-transform duration-300" />
            {/* vertical bar scales to 0 when open */}
            <span
                className={`absolute left-1/2 top-0 w-[2px] h-full -translate-x-1/2 bg-current origin-center transition-transform duration-300 ${open ? "scale-y-0" : "scale-y-100"
                    }`}
            />
        </span>
    )
}

const FAQS = [
    {
        question: "What exactly do you build for dealerships?",
        answer:
            "A fast, professional website that converts visitors to leads. Plus automated social media posting, inventory sync, and a 24/7 AI assistant that answers customer questions and books test drives.",
    },
    {
        question: "Do I need to update my inventory twice?",
        answer:
            "No. You update once. Our system automatically syncs to your website, posts to Facebook & Instagram, and your AI assistant knows about every car. One source of truth.",
    },
    {
        question: "How quickly can you get me live?",
        answer:
            "After our strategy call, we typically launch within 2-3 weeks. You'll have a professional website, automations, and your assistant live and handling leads.",
    },
    {
        question: "What if I need changes or support after launch?",
        answer:
            "You get us. Direct access to our team for updates, questions, and improvements. We don't hand you off to support—you work with the people who built it.",
    },
    {
        question: "Is this just website design, or do you handle the whole system?",
        answer:
            "It's the whole system. Website design, hosting, inventory integration, social media automation, AI setup, and ongoing support. We're your complete digital partner.",
    },
]

export default function FAQ() {
    const { ref, isVisible } = useScrollAnimation()
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-3xl">
                <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Questions? We have answers.
                </h2>

                <div className="mt-12 space-y-4">
                    {FAQS.map((faq, idx) => {
                        const open = openIndex === idx
                        return (
                            <div key={idx} className="border border-border rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleFAQ(idx)}
                                    className="w-full flex items-center justify-between gap-4 bg-card px-6 py-4 text-left transition-colors hover:bg-muted"
                                    aria-expanded={open}
                                    aria-controls={`faq-panel-${idx}`}
                                >
                                    <span className="font-medium text-foreground text-sm">{faq.question}</span>
                                    <div className="flex-shrink-0 text-primary">
                                        <PlusMinus open={open} />
                                    </div>
                                </button>

                                {/* Smooth open/close using grid rows */}
                                <div
                                    id={`faq-panel-${idx}`}
                                    className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-border bg-muted/30 px-6 py-4">
                                            <p className="text-muted-foreground text-sm">{faq.answer}</p>
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
