"use client"

import { MascotCTA } from "@/components/mascot-cta"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const supportPoints = [
    "Clarify your positioning",
    "Plan content people care about",
    "Package your offer simply",
]

export default function FinalConversionCTA() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            id="contact"
            ref={ref}
            className={`w-full bg-background px-5 py-14 transition-all duration-1000 sm:px-8 lg:px-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
        >
            <div className="mx-auto max-w-[82.25rem]  pt-10">
                <div className="grid gap-7 rounded-[30px] bg-[#efc5d040] p-6 sm:p-8 lg:grid-cols-[1fr_0.62fr] lg:items-center lg:p-10">
                    <div>
                        <h2 className="max-w-3xl font-display text-4xl font-black leading-[1] text-foreground sm:text-5xl">
                            Want clearer content people remember?
                        </h2>
                        {/* <p className="mt-4 max-w-2xl font-sans text-base font-medium leading-7 text-foreground/70">
                            Book a strategy call and I&apos;ll help you turn scattered ideas into a sharper brand, a practical content direction, and an offer people can understand fast.
                        </p> */}
                        <MascotCTA href="/book-your-call" reserveSpace wrapperClassName="mt-1">
                            Book a strategy call
                        </MascotCTA>
                    </div>

                    <div className="rounded-[24px] bg-white/52 p-5 sm:p-6">
                        <p className="font-display text-2xl font-black leading-tight text-foreground sm:text-3xl">
                            On the call, I&apos;ll help you:
                        </p>
                        <div className="mt-5 grid gap-3">
                            {supportPoints.map((point) => (
                                <p key={point} className="font-sans text-sm font-bold leading-6 text-foreground/70">
                                    {point}
                                </p>
                            ))}
                        </div>
                        <p className="mt-5 font-sans text-xs font-semibold leading-5 text-foreground/48">
                            Simple, focused, and built around what your brand actually needs next.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
