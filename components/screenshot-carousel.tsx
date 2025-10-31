"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef } from "react"

/** -------- Deterministic shuffling (no Math.random in render) -------- */
function mulberry32(seed: number) {
    return function () {
        let t = (seed += 0x6d2b79f5)
        t = Math.imul(t ^ (t >>> 15), t | 1)
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}
function shuffleDeterministic<T>(arr: T[], seed: number) {
    const rnd = mulberry32(seed)
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1))
            ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

/** -------- Your source images (public/) -------- */
const BASE_IMAGES = ["/ex.png", "/ex2.png"]

export default function ScreenshotsCarousel() {
    const row1Ref = useRef<HTMLDivElement>(null)
    const row2Ref = useRef<HTMLDivElement>(null)

    // Create two stable, shuffled rows once (no purity issues)
    const row1Images = useMemo(() => {
        // expand to a reasonable base set then shuffle deterministically
        const expanded = Array.from({ length: 8 }, (_, i) => BASE_IMAGES[i % BASE_IMAGES.length])
        return shuffleDeterministic(expanded, 1)
    }, [])
    const row2Images = useMemo(() => {
        const expanded = Array.from({ length: 8 }, (_, i) => BASE_IMAGES[(i + 1) % BASE_IMAGES.length])
        return shuffleDeterministic(expanded, 2)
    }, [])

    useEffect(() => {
        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches

        if (prefersReduced) return

        /** Infinite marquee: move and recycle DOM children when one fully exits */
        const startMarquee = (
            el: HTMLDivElement | null,
            direction: "left" | "right",
            pxPerFrame = 0.5
        ) => {
            if (!el) return () => { }

            // Measure stride: item width + gap
            const firstItem = el.firstElementChild as HTMLElement | null
            if (!firstItem) return () => { }

            const getStride = () => {
                const itemWidth = firstItem.offsetWidth
                // read gap from the container (it has `gap-4`)
                const gap = parseFloat(
                    getComputedStyle(el).columnGap || getComputedStyle(el).gap || "0"
                )
                return itemWidth + gap
            }

            let stride = getStride()
            // Recompute stride on resize to stay correct
            const onResize = () => {
                stride = getStride()
            }
            window.addEventListener("resize", onResize)

            let rafId = 0
            let offset = 0

            const tick = () => {
                offset += direction === "left" ? -pxPerFrame : pxPerFrame

                // When moving left and first item fully left the viewport, recycle it to the end
                if (direction === "left" && Math.abs(offset) >= stride) {
                    // move first child to end
                    const child = el.firstElementChild
                    if (child) el.appendChild(child)
                    offset += stride // keep visual continuity
                }

                // When moving right and last item fully right the viewport, recycle it to the front
                if (direction === "right" && offset >= stride) {
                    const child = el.lastElementChild
                    if (child) el.insertBefore(child, el.firstElementChild)
                    offset -= stride
                }

                el.style.transform = `translateX(${offset}px)`
                rafId = requestAnimationFrame(tick)
            }

            rafId = requestAnimationFrame(tick)

            return () => {
                cancelAnimationFrame(rafId)
                window.removeEventListener("resize", onResize)
            }
        }

        const stop1 = startMarquee(row1Ref.current, "left", 0.5)
        const stop2 = startMarquee(row2Ref.current, "right", 0.5)

        return () => {
            stop1 && stop1()
            stop2 && stop2()
        }
    }, [])

    return (
        <section className="relative w-full overflow-hidden bg-background py-12">
            {/* Row 1 - moves left infinitely */}
            <div className="mb-6 flex overflow-hidden">
                <div
                    ref={row1Ref}
                    className="flex gap-4 will-change-transform"
                    style={{ width: "fit-content" }}
                    aria-hidden
                >
                    {/* Render enough items to cover > 2x viewport so recycling feels smooth */}
                    {[...row1Images, ...row1Images, ...row1Images].map((src, idx) => (
                        <div
                            key={`r1-${idx}`}
                            className="shrink-0 overflow-hidden rounded-lg border border-border shadow-lg"
                            style={{ width: 320, height: 180, aspectRatio: "16/9" as unknown as undefined }}
                        >
                            <Image
                                src={src}
                                alt={`Project screenshot ${idx + 1}`}
                                width={320}
                                height={180}
                                className="h-full w-full object-cover"
                            // If you had optimizer issues earlier, uncomment:
                            // unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 - moves right infinitely */}
            <div className="flex overflow-hidden">
                <div
                    ref={row2Ref}
                    className="flex gap-4 will-change-transform"
                    style={{ width: "fit-content" }}
                    aria-hidden
                >
                    {[...row2Images, ...row2Images, ...row2Images].map((src, idx) => (
                        <div
                            key={`r2-${idx}`}
                            className="shrink-0 overflow-hidden rounded-lg border border-border shadow-lg"
                            style={{ width: 320, height: 180, aspectRatio: "16/9" as unknown as undefined }}
                        >
                            <Image
                                src={src}
                                alt={`Project screenshot ${idx + 1}`}
                                width={320}
                                height={180}
                                className="h-full w-full object-cover"
                            // unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
