"use client"

import Image from "next/image"
import { Instagram, Linkedin, Play, Youtube } from "lucide-react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const socialLinks = [
    {
        label: "Instagram",
        handle: "@arfah_talks",
        description: "Reels, content lessons, hooks, and behind-the-scenes brand building.",
        href: "https://www.instagram.com/arfah_talks/",
        Icon: Instagram,
        accent: "text-[#d61aff]/20",
    },
    {
        label: "YouTube",
        handle: "@arfah_talks",
        description: "Longer breakdowns on content, strategy, and growing with more clarity.",
        href: "https://www.youtube.com/@arfah_talks",
        Icon: Youtube,
        accent: "text-[#bd7a00]/20",
    },
    {
        label: "LinkedIn",
        handle: "Arfah Ali",
        description: "Sharper thoughts on personal branding, content systems, and creator-led growth.",
        href: "https://www.linkedin.com/in/arfahali-personalbrandingstrategist/",
        Icon: Linkedin,
        accent: "text-[#0b9580]/40",
    },
]

export default function ExploreArfah() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            id="explore-arfah"
            ref={ref}
            className={`w-full bg-background px-5 py-20 transition-all duration-1000 sm:px-8 lg:px-16 lg:py-28 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
        >
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
                <div className="relative rounded-[32px] bg-[#f6f1ef] p-4 shadow-[0_30px_90px_-70px_rgba(26,26,26,0.6)] sm:p-5">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[26px]">
                        <Image
                            src="/arfah/main-2.jpeg"
                            alt="Arfah creating content"
                            fill
                            sizes="(min-width: 1024px) 480px, 100vw"
                            className="object-cover object-[50%_28%]"
                        />
                    </div>

                    <div className="absolute -bottom-5 left-6 right-6 rounded-[24px] bg-white/92 p-4 shadow-[0_24px_70px_-50px_rgba(26,26,26,0.7)] backdrop-blur sm:left-8 sm:right-8">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="font-sans text-xs font-extrabold uppercase tracking-[0.18em] text-foreground/45">
                                    Content Proof
                                </p>
                                <p className="mt-1 font-display text-2xl font-black leading-none text-foreground">
                                    1M+ views
                                </p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                                <Play className="h-5 w-5 fill-current" aria-hidden />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-7 lg:pt-0">
                    <h2 className="mt-5 max-w-2xl font-display text-4xl font-black leading-[0.98] text-foreground sm:text-5xl lg:text-6xl">
                        Want to see how I think about content?
                    </h2>
                    <p className="mt-6 max-w-2xl font-sans text-lg font-medium leading-8 text-foreground/70">
                        I share what I am learning about hooks, content strategy, Instagram growth, and building a personal brand that feels clear instead of forced.
                    </p>

                    <div className="mt-8 grid gap-3">
                        {socialLinks.map(({ label, description, href, Icon, accent }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group grid gap-4 rounded-[24px] bg-[#f6f1ef] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_70px_-58px_rgba(26,26,26,0.55)] sm:grid-cols-[auto_1fr_auto] sm:items-center relative overflow-hidden"
                            >
                                <div className={`flex h-12 w-12 items-center absolute -left-4 justify-center rounded-2xl ${accent}`}>
                                    <Icon className="h-24 w-24" aria-hidden />
                                </div>
                                <div>

                                    <p className="mt-2 ml-6 max-w-xl font-sans text-sm font-semibold leading-6 text-foreground/66">
                                        {description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
