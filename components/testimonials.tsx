"use client"

import { useRef, useEffect, useState } from "react"
import { Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const TESTIMONIALS = [
    {
        quote: "Excellent job, in time with the right price! We are going to have many more projects!",
        author: "@lighthousesolar",
        role: "Client",
        country: "🇺🇸",
    },
    {
        quote: "Looks promising! Great work so far",
        author: "Anurag Sharma",
        role: "Marketing manager",
        country: "🇮🇳",
    },
    {
        quote: "Excellent job!",
        author: "@lighthousesolar",
        role: "Client",
        country: "🇺🇸",
    },
    {
        quote: "Great experience, always great to work with professionals. Highly recommend!",
        author: "Maria Zenvil",
        role: "Client",
        country: "🇺🇸",
    },
    {
        quote: "Outstanding service and attention to detail. Exceeded all expectations!",
        author: "James Wilson",
        role: "CEO",
        country: "🇬🇧",
    },
]

export default function Testimonials() {
    const { ref, isVisible } = useScrollAnimation()
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [isPaused, setIsPaused] = useState(false)
    const animationRef = useRef<number | null>(null)

    useEffect(() => {
        if (!isVisible) return

        const startAutoScroll = () => {
            if (isPaused || !scrollContainerRef.current) return

            const container = scrollContainerRef.current
            let scrollPos = 0
            const speed = 0.3

            const animate = () => {
                if (!container) return

                scrollPos += speed
                const maxScroll = container.scrollWidth - container.clientWidth

                if (scrollPos >= maxScroll) {
                    scrollPos = 0
                }

                container.scrollLeft = scrollPos
                animationRef.current = requestAnimationFrame(animate)
            }

            animationRef.current = requestAnimationFrame(animate)
        }

        if (!isPaused) {
            startAutoScroll()
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [isPaused, isVisible])

    return (
        <section
            ref={ref}
            className={`w-full bg-background py-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mb-8 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What Our Clients Say</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Real feedback from real people we&apos;ve worked with. Join 10+ happy clients building smarter solutions.
                    </p>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="flex gap-6 overflow-x-auto scroll-smooth px-4 py-6 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
                    <div key={idx} className="shrink-0 w-full max-w-sm rounded-lg border border-border bg-card p-6 md:w-96">
                        <div className="mb-4 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                        </div>

                        <p className="mb-6 text-foreground text-sm">{testimonial.quote}</p>

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                            </div>
                            <span className="text-lg">{testimonial.country}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
