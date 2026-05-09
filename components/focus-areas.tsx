"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { MascotCTA } from "@/components/mascot-cta"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const focusAreas = [
    {
        title: "Brand Clarity",
        href: "/focus/branding",
        description:
            "Make your profile, bio, pinned posts, and offer easier to understand at first glance.",
        cta: "Explore brand clarity",
        hoverBg: "hover:bg-[#f4fffb]",
        accentBg: "bg-[#e6fbf6]",
        illustration: "/areas/branding.png",
        illustrationAlt: "Brand clarity illustration",
    },
    {
        title: "Content Strategy",
        href: "/focus/content-strategy",
        description:
            "Turn scattered thoughts into clear pillars, stronger hooks, and a posting rhythm you can repeat.",
        cta: "Explore content strategy",
        hoverBg: "hover:bg-[#fff9df]",
        accentBg: "bg-[#fff3c8]",
        illustration: "/areas/content-strat.png",
        illustrationAlt: "Content strategy illustration",
    },


    {
        title: "Digital Products",
        href: "/focus/digital-products",
        description:
            "Shape your repeated advice into lead magnets, templates, or simple offers people actually want.",
        cta: "Explore digital products",
        hoverBg: "hover:bg-[#f8f4ff]",
        accentBg: "bg-[#f2ecff]",
        illustration: "/areas/digital-products.png",
        illustrationAlt: "Digital products illustration",
    },
]

type FocusArea = (typeof focusAreas)[number]

function FocusCard({ area, className }: { area: FocusArea; className?: string }) {
    const { title, description, href, cta, hoverBg, accentBg, illustration, illustrationAlt } = area

    return (
        <a
            href={href}
            className={cn(
                "group flex min-h-[28rem] flex-col overflow-hidden rounded-[28px] bg-[#f6f1ef] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-56px_rgba(26,26,26,0.5)] sm:min-h-[31rem] sm:p-10 cursor-pointer",
                hoverBg,
                className
            )}
        >
            <div className={cn("relative flex h-36 w-36 items-center justify-center rounded-[24px] sm:h-40 sm:w-40", accentBg)}>
                <div className="relative aspect-square w-[78%] overflow-hidden rounded-[18px] bg-white shadow-[0_18px_55px_-46px_rgba(26,26,26,0.55)]">
                    <Image
                        src={illustration}
                        alt={illustrationAlt}
                        fill
                        sizes="160px"
                        className="object-cover"
                    />
                </div>
            </div>

            <h3 className="mt-12 max-w-md font-display text-3xl font-black leading-tight text-foreground sm:text-[2.7rem]">
                {title}
            </h3>
            <p className="mt-5 max-w-xl font-sans text-base font-semibold leading-7 text-foreground/70 sm:text-lg sm:leading-8">
                {description}
            </p>

            <div className="mt-auto pt-9">
                <span className="inline-flex items-center gap-3 font-sans text-sm font-extrabold text-foreground">
                    <span className="underline underline-offset-4">{cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
            </div>
        </a>
    )
}

export default function FocusAreas() {
    const { ref, isVisible } = useScrollAnimation()
    const [featuredArea, ...supportingAreas] = focusAreas

    return (
        <section
            id="focus-areas"
            ref={ref}
            className={cn(
                "w-full bg-background px-5 py-20 transition-all duration-1000 sm:px-8 lg:px-16 lg:py-28",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
        >
            <div className="mx-auto max-w-[82.5rem]">
                <div className="grid gap-7 lg:grid-cols-[0.97fr_1.03fr] lg:items-center">
                    <div className="py-4 lg:pr-10 ">
                        <h2 className="mt-5 max-w-xl font-display text-5xl font-black leading-[1.2] text-foreground sm:text-6xl lg:text-[5.25rem]">
                            Ways I Can <span className="relative">Help <span aria-hidden className="absolute -bottom-1 -right-10 sm:w-3/4 w-full -rotate-1 -translate-x-1/2 rounded-full bg-primary/65 sm:-bottom-2 h-2" /></span>

                        </h2>
                    </div>

                    <FocusCard area={featuredArea} />
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-12">
                    {supportingAreas.map((area) => (
                        <FocusCard key={area.title} area={area} />
                    ))}
                </div>

                <div className="mt-12 rounded-[28px] bg-[#f6f1ef] p-7 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
                    <div>
                        <h3 className="mt-3 font-display text-3xl font-black leading-tight text-foreground sm:text-[2.15rem]">
                            Need the hands-on version?
                        </h3>
                        <p className="mt-4 max-w-2xl font-sans text-base font-semibold leading-7 text-foreground/70">
                            Book a strategy call and I&apos;ll help you choose the clearest next step.
                        </p>
                    </div>

                    <MascotCTA
                        href="/book-your-call"
                        wrapperClassName="mt-7 lg:mt-0"
                        className="px-6 py-3"
                    >
                        Book a strategy call
                    </MascotCTA>
                </div>
            </div>
        </section>
    )
}
