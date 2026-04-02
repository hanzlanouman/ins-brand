"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export default function Demo() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            id="demo"
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-16 text-center">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                        RESULTS AND PROOF
                    </p>
                    <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground text-balance">
                        More <span className="text-primary">Proof</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                        Real screenshots and simple proof points go here.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-background to-muted/50 rounded-xl p-6 border border-border shadow-lg">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="rounded-2xl border border-border bg-card p-5">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Before</p>
                                    <p className="text-2xl font-bold text-foreground">Unclear profile</p>
                                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                                        <p>Weak positioning</p>
                                        <p>Inconsistent posting</p>
                                        <p>No clear reason to follow</p>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">After</p>
                                    <p className="text-2xl font-bold text-foreground">Sharper brand</p>
                                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                                        <p>Clearer message</p>
                                        <p>Stronger hooks</p>
                                        <p>Better monthly consistency</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-3 border-t border-border/30 pt-5 md:grid-cols-3">
                                <div className="rounded-lg border border-border/40 bg-card p-4 text-center">
                                    <p className="text-2xl font-bold text-foreground">Clearer</p>
                                    <p className="text-xs text-muted-foreground mt-1">profile positioning</p>
                                </div>
                                <div className="rounded-lg border border-border/40 bg-card p-4 text-center">
                                    <p className="text-2xl font-bold text-foreground">Stronger</p>
                                    <p className="text-xs text-muted-foreground mt-1">content hooks</p>
                                </div>
                                <div className="rounded-lg border border-border/40 bg-card p-4 text-center">
                                    <p className="text-2xl font-bold text-foreground">More</p>
                                    <p className="text-xs text-muted-foreground mt-1">monthly consistency</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="rounded-xl border border-border bg-card p-5 shadow-lg">
                            <div className="flex items-center gap-3">
                                <Image src="/arfah.jpeg" alt="Arfah Ali" width={56} height={56} className="w-14 h-14 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold text-foreground">Use your real proof here</p>
                                    <p className="text-xs text-muted-foreground">Screenshots, metrics, quick wins</p>
                                </div>
                            </div>
                            <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
                                <p>Before / after profiles</p>
                                <p>Follower lifts</p>
                                <p>Reach or consistency gains</p>
                                <p>1 short testimonial</p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                            <p className="text-sm font-semibold text-foreground">Keep this visual</p>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                This section should feel obvious at a glance, like the inspiration you shared.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
