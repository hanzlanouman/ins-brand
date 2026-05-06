"use client"

import Image from "next/image"

export default function HeroContent() {
    return (
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16">
            <div className="grid min-h-[590px] grid-cols-1 items-center gap-10 pt-32 pb-16 sm:min-h-[660px] sm:pt-36 sm:pb-20 lg:min-h-[700px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pt-40 lg:pb-24 xl:gap-20">
                <div className="mx-auto w-full max-w-[270px] sm:max-w-[380px]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-white/55 bg-background/30 shadow-[0_32px_90px_-58px_rgba(26,26,26,0.5)] sm:rounded-[2.6rem]">
                        <Image
                            src="/arfah/main.jpeg"
                            alt="Arfah Ali"
                            fill
                            className="object-cover object-[center_75%]"
                            sizes="(max-width: 640px) 310px, (max-width: 1024px) 390px, 430px"
                            priority
                        />
                    </div>
                </div>

                <div className="mx-auto max-w-[720px] text-center lg:mx-0 lg:text-left">
                    <h1 className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-x-1.5 gap-y-1 font-display text-[2.6rem] font-bold leading-[0.96] text-foreground sm:gap-x-2 sm:text-6xl lg:mx-0 lg:flex-nowrap lg:justify-start lg:text-[4.65rem]">
                        <span>Hey</span>
                        <span className="relative inline-block">
                            There
                            <span aria-hidden className="absolute -bottom-1 left-1/2 h-1 w-[92%] -rotate-1 -translate-x-1/2 rounded-full bg-primary/65 sm:-bottom-2 sm:h-1.5" />
                            <span aria-hidden className="absolute -bottom-1 right-0 h-1 w-1/3 -rotate-2 -translate-x-1/2 rounded-full bg-primary/65 sm:-bottom-4 sm:h-1.5" />
                        </span>
                        <span className="inline-block font-sans text-[0.62em] leading-none sm:text-[0.9em]">👋</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-[19rem] font-sans text-base font-medium leading-[1.42] text-foreground/78 sm:mt-8 sm:max-w-[580px] sm:text-[1.7rem] sm:leading-[1.42] lg:mx-0 lg:text-[1.75rem] md:mt-16">
                        I&apos;m Arfah. I help founders and personal brands build memorable Instagram brands, and I make content on{" "}
                        <a
                            href="https://www.instagram.com/arfah_talks/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-primary underline decoration-primary/45 underline-offset-4 transition-colors hover:text-primary/80 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        >
                            Instagram
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://www.youtube.com/@arfah_talks"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-primary underline decoration-primary/45 underline-offset-4 transition-colors hover:text-primary/80 hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        >
                            YouTube
                        </a>.
                    </p>

                </div>
            </div>
        </div>
    )
}
