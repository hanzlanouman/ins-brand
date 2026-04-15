"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const BEFORE_ITEMS = ["/before-1.jpeg", "/before-2.jpeg", "/before-3.jpeg", "/before-4.jpeg"]
const AFTER_ITEMS = ["/after-1.jpeg", "/after-2.jpeg", "/after-3.jpeg", "/after-4.jpeg"]

function ProofCard({ src, dark = false }: { src: string; dark?: boolean }) {
    return (
        <div
            className={`overflow-hidden rounded-[24px] border p-2 shadow-[0_20px_60px_-52px_rgba(0,0,0,0.24)] ${dark ? "border-white/10 bg-white/5" : "border-border/70 bg-card"
                }`}
        >
            <div className="relative aspect-[1/0.96] w-full overflow-hidden rounded-[18px] bg-[#0e1114]">
                <Image
                    src={src}
                    alt="Content performance proof"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1280px) 50vw, 25vw"
                />
            </div>
        </div>
    )
}

export default function ProofGrid() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            id="proof"
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 text-center">
                    <h2 className="font-hero text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Performance Proof
                    </h2>
                </div>

                <div className="mb-10 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[22px] border border-border/70 bg-card px-5 py-5 text-center shadow-sm">
                        <p className="text-2xl font-bold text-foreground">5.5K+</p>
                        <p className="mt-1 text-sm text-muted-foreground">followers on profile growth</p>
                    </div>
                    <div className="rounded-[22px] border border-border/70 bg-card px-5 py-5 text-center shadow-sm">
                        <p className="text-2xl font-bold text-foreground">510K+</p>
                        <p className="mt-1 text-sm text-muted-foreground">views in a 30-day dashboard</p>
                    </div>
                    <div className="rounded-[22px] border border-border/70 bg-card px-5 py-5 text-center shadow-sm">
                        <p className="text-2xl font-bold text-foreground">9</p>
                        <p className="mt-1 text-sm text-muted-foreground">performance screenshots</p>
                    </div>
                </div>

                <div className="grid gap-6 xl:grid-cols-2">
                    <section className="rounded-[30px] border border-border/70 bg-card p-6 shadow-[0_24px_70px_-56px_rgba(0,0,0,0.22)]">
                        <div className="mb-6">
                            <p className="text-sm font-semibold text-muted-foreground">Before</p>
                            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                                Lower reach, lower follows, and weaker engagement before the content and profile got clearer.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {BEFORE_ITEMS.map((src) => (
                                <ProofCard key={src} src={src} />
                            ))}
                        </div>
                    </section>

                    <section className="rounded-[30px] border border-foreground/10 bg-[#111317] p-6 text-white shadow-[0_24px_70px_-56px_rgba(0,0,0,0.34)]">
                        <div className="mb-6">
                            <p className="text-sm font-semibold text-primary">After</p>
                            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                                Stronger reel performance, more follows, and more traction once the page started feeling more intentional.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {AFTER_ITEMS.map((src) => (
                                <ProofCard key={src} src={src} dark />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}
