"use client"

import { ArrowRight, Brush, Lightbulb, PackageOpen } from "lucide-react"

import { MascotCTA } from "@/components/mascot-cta"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const focusAreas = [
    {
        title: "Branding",
        href: "#contact",
        description:
            "I help you sharpen your positioning, profile, and message so people understand who you are and why they should care.",
        Icon: Brush,
        iconBg: "bg-[#dff9f2]",
        iconColor: "text-[#0b9580]",
        hoverBg: "hover:bg-[#e6fbf6]",
    },
    {
        title: "Content Strategy",
        href: "#content-library",
        description:
            "I turn scattered ideas into clear pillars, stronger hooks, and a practical direction you can keep showing up with.",
        Icon: Lightbulb,
        iconBg: "bg-[#fff0bd]",
        iconColor: "text-[#bd7a00]",
        hoverBg: "hover:bg-[#fff3c8]",
    },


    {
        title: "Digital Products",
        href: "#resources",
        description:
            "I help package your expertise into lead magnets, service assets, and offers your audience can understand and want.",
        Icon: PackageOpen,
        iconBg: "bg-[#eee5ff]",
        iconColor: "text-[#7b3ff2]",
        hoverBg: "hover:bg-[#f2ecff]",
    },
]

type FocusArea = (typeof focusAreas)[number]

function FocusCard({ area, className }: { area: FocusArea; className?: string }) {
    const { title, description, href, Icon, iconBg, iconColor, hoverBg } = area

    return (
        <a
            href={href}
            className={cn(
                "group flex min-h-[18rem] flex-col rounded-[28px] bg-[#f6f1ef] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-56px_rgba(26,26,26,0.5)] sm:p-8 cursor-pointer",
                hoverBg,
                className
            )}
        >
            <div className={cn("flex h-14 w-14 items-center justify-center rounded-2xl", iconBg, iconColor)}>
                <Icon className="h-7 w-7" strokeWidth={2.25} aria-hidden />
            </div>

            <h3 className="mt-4 max-w-md font-display text-3xl font-black leading-tight text-foreground sm:text-[2.15rem]">
                {title}
            </h3>
            <p className="mt-4 max-w-xl font-sans text-base font-semibold leading-7 text-foreground/68">
                {description}
            </p>

            <div className="mt-auto pt-7">
                <span className="inline-flex items-center gap-3 font-sans text-sm font-extrabold text-foreground">
                    <span className="underline underline-offset-4">Get Started</span>
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
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-7 lg:grid-cols-[0.97fr_1.03fr] lg:items-center">
                    <div className="py-4 lg:pr-10 ">
                        <h2 className="mt-5 max-w-xl font-display text-5xl font-black leading-[0.96] text-foreground sm:text-6xl lg:text-7xl">
                            My Focus <span className="relative">Areas <span aria-hidden className="absolute -bottom-1 -right-10 sm:w-2/3 w-full -rotate-1 -translate-x-1/2 rounded-full bg-primary/65 sm:-bottom-1 h-1.5" /></span>

                        </h2>
                        <p className="mt-6 max-w-lg font-sans text-lg font-medium leading-8 text-foreground/70">
                            I help build memorable Instagram brands through sharper positioning, stronger content strategy, and digital products that convert.
                        </p>
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
                            I can help with profile audits, content planning, scripting, launch assets, and monthly strategy support.
                        </p>
                    </div>

                    <MascotCTA
                        href="#contact"
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
