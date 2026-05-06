"use client"

import Image from "next/image"
import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const quickStats = [
    {
        value: "10K+",
        label: "Followers",
    },
    {
        value: "1M+",
        label: "Views",
    },
    {
        value: "3",
        label: "Platforms",
    },
]

const aboutLinks = [
    {
        label: "Watch my videos",
        href: "https://www.youtube.com/@arfah_talks",
        Icon: Youtube,
    },
    {
        label: "Follow Instagram",
        href: "https://www.instagram.com/arfah_talks/",
        Icon: Instagram,
    },
    {
        label: "Read LinkedIn",
        href: "https://www.linkedin.com/in/arfahali-personalbrandingstrategist/",
        Icon: Linkedin,
    },
]

const mobilePhotos = [
    {
        src: "/arfah/main.jpeg",
        alt: "Arfah in a pink outfit",
        objectPosition: "object-[50%_28%]",
    },
    {
        src: "/arfah/main-2.jpeg",
        alt: "Arfah in a black hijab",
        objectPosition: "object-[50%_34%]",
    },
    {
        src: "/arfah/main-3.jpeg",
        alt: "Arfah smiling",
        objectPosition: "object-[52%_44%]",
    },
    {
        src: "/arfah/main-4.jpeg",
        alt: "Arfah looking to the side",
        objectPosition: "object-[54%_34%]",
    },
]

export default function AboutArfah() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            id="about"
            ref={ref}
            className={`w-full bg-background px-2 py-16 transition-all duration-1000 sm:px-6 lg:py-24 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
        >
            <div className="mx-auto max-w-[82.25rem] overflow-hidden rounded-3xl bg-[#efc5d040] px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
                <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
                    <div>

                        <h2 className="mt-5 max-w-xl  text-5xl font-black leading-[1.2] text-foreground sm:text-6xl lg:text-7xl">
                            Hey, I&apos;m{" "}
                            <span className="relative inline-block font-display">
                                Arfah
                                <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-primary/70" />
                            </span>
                        </h2>

                        <div className="mt-8 max-w-xl space-y-5 font-sans text-base font-semibold leading-8 text-foreground/72 sm:text-lg">
                            <p>
                                I create content about personal branding, Instagram growth, and the strategy behind showing up online with more clarity.
                            </p>
                            <p>
                                I help founders, creators, and personal brands turn strong ideas into content people remember, trust, and act on.
                            </p>
                            <p>
                                Along the way, I&apos;ve grown to 10K+ followers and reached over 1M views by testing hooks, formats, stories, and content systems in public.
                            </p>
                        </div>

                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center gap-3 font-sans text-sm font-extrabold text-foreground"
                        >
                            <span className="underline underline-offset-4">Work with me</span>
                            <ArrowRight className="h-4 w-4" aria-hidden />
                        </a>
                    </div>

                    <div>
                        <div className="grid grid-cols-2 gap-3 sm:hidden">
                            {mobilePhotos.map(({ src, alt, objectPosition }) => (
                                <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-white p-2 shadow-[0_24px_70px_-58px_rgba(26,26,26,0.75)]">
                                    <div className="relative h-full overflow-hidden rounded-[17px]">
                                        <Image
                                            src={src}
                                            alt={alt}
                                            fill
                                            sizes="45vw"
                                            className={`object-cover ${objectPosition}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative hidden min-h-[35rem] sm:block lg:min-h-[38rem]">
                            <div className="absolute left-[7%] top-[8%] h-[78%] w-[78%] rounded-full border-[22px] border-white/48" />
                            <div className="absolute bottom-[5%] right-[-8%] h-[46%] w-[58%] rounded-full bg-white/28" />
                            <div className="absolute left-[12%] top-[18%] h-[60%] w-[62%] rounded-full border-[5px] border-primary/22" />

                            <div className="absolute right-[2%] top-0 w-[48%] overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_30px_90px_-58px_rgba(26,26,26,0.72)]">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                                    <Image
                                        src="/arfah/main-2.jpeg"
                                        alt="Arfah in a pink outfit"
                                        fill
                                        sizes="(min-width: 1024px) 360px, 45vw"
                                        className="object-cover object-[50%_28%]"
                                    />
                                </div>
                            </div>

                            <div className="absolute left-[14%] top-[8%] w-[35%] overflow-hidden rounded-[26px] bg-white p-2.5 shadow-[0_26px_76px_-56px_rgba(26,26,26,0.78)]">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                                    <Image
                                        src="/arfah/main.jpeg"
                                        alt="Arfah in a black hijab"
                                        fill
                                        sizes="(min-width: 1024px) 250px, 34vw"
                                        className="object-cover object-[50%_34%]"
                                    />
                                </div>
                            </div>

                            <div className="absolute left-[11%] -bottom-[2%] w-[38%] overflow-hidden rounded-[28px] bg-white p-2.5 shadow-[0_28px_80px_-56px_rgba(26,26,26,0.72)]">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
                                    <Image
                                        src="/arfah/main-3.jpeg"
                                        alt="Arfah smiling"
                                        fill
                                        sizes="(min-width: 1024px) 280px, 38vw"
                                        className="object-cover object-[52%_44%]"
                                    />
                                </div>
                            </div>

                            <div className="absolute -bottom-[14%] right-[9%] w-[38%] overflow-hidden rounded-[26px] bg-white p-2.5 shadow-[0_26px_76px_-56px_rgba(26,26,26,0.78)]">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
                                    <Image
                                        src="/arfah/main-4.jpeg"
                                        alt="Arfah looking to the side"
                                        fill
                                        sizes="(min-width: 1024px) 255px, 35vw"
                                        className="object-cover object-[54%_74%]"
                                    />
                                </div>
                            </div>

                            <div className="absolute left-[35%] bottom-[35%] w-[34%] rounded-[24px] bg-white/92 p-4 shadow-[0_24px_70px_-54px_rgba(26,26,26,0.7)] backdrop-blur">
                                <div className="grid grid-cols-3 gap-3">
                                    {quickStats.map(({ value, label }) => (
                                        <div key={label} className="min-w-0">
                                            <p className="font-display text-2xl font-black leading-none text-foreground">
                                                {value}
                                            </p>
                                            <p className="mt-1 font-sans text-[0.62rem] font-extrabold uppercase tracking-wider text-foreground/45">
                                                {label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid gap-3 border-foreground/10 pt-8 sm:grid-cols-[1fr_auto_1fr] sm:items-center lg:mt-12">
                    <div className="hidden h-px bg-foreground/10 sm:block" />
                    <div className="grid gap-3 sm:grid-cols-3">
                        {aboutLinks.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 font-sans text-sm font-extrabold text-white shadow-[0_0_22px_rgba(214,26,255,0.2)] transition-colors hover:bg-[#e143ff]"
                            >
                                <Icon className="h-4 w-4" aria-hidden />
                                {label}
                            </a>
                        ))}
                    </div>
                    <div className="hidden h-px bg-foreground/10 sm:block" />
                </div>
            </div>
        </section>
    )
}
