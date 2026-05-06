"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function BeforeAfterStrip() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            ref={ref}
            className={`w-full  mb-24 px-4 pb-10 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                    <h2 className="font-hero text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        500K+ views & 5K+ followers in 14 days
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
                    <div className="rounded-[28px] border border-border/70 bg-black p-3 shadow-[0_24px_70px_-56px_rgba(0,0,0,0.28)]">
                        <div className="mb-3 flex items-center gap-2 px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/72">
                            <span className="h-2 w-2 rounded-full bg-white/55" />
                            Before
                        </div>
                        <div className="relative aspect-[1.78/1] overflow-hidden rounded-[22px] bg-black">
                            <Image
                                src="/before-profile.jpeg"
                                alt="Instagram profile before content growth"
                                fill
                                className="object-contain object-center p-3"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center px-1">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-background text-base font-semibold text-foreground shadow-[0_18px_40px_-30px_rgba(0,0,0,0.4)]">
                            →
                        </div>
                    </div>

                    <div className="rounded-[28px] border border-foreground/10 bg-[#0c1015] p-3 shadow-[0_24px_70px_-56px_rgba(0,0,0,0.36)]">
                        <div className="mb-3 flex items-center gap-2 px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/82">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            After
                        </div>
                        <div className="relative aspect-[1.78/1] overflow-hidden rounded-[22px] bg-[#0b0d10]">
                            <Image
                                src="/after-profile.jpeg"
                                alt="Instagram profile after content growth"
                                fill
                                className="object-contain object-center p-2"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
