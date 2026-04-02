"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PrimaryCTA } from "./primary-cta"
import BrandMark from "./brand-mark"

const CONTACT_LINKS = [
    { label: "Email", href: "mailto:arfahaliqureshi@gmail.com", icon: Mail },
    { label: "Instagram", href: "https://instagram.com/arfah_talks", icon: Instagram },
    { label: "YouTube", href: "https://www.youtube.com/@arfah_talks", icon: Youtube },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/arfahali/", icon: Linkedin },
]

export default function ContactCTA() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            id="contact"
            ref={ref}
            className={`w-full bg-background  pt-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className=" ">
                <div className="relative overflow-hidden rounded-none bg-[#111317] px-6 py-12 text-white shadow-[0_32px_100px_-52px_rgba(0,0,0,0.55)] md:px-10 md:py-16 lg:px-14">
                    <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/18 blur-[110px]" />

                    <div className="relative text-center">
                        <h2 className="font-hero mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
                            Ready to grow with clearer content, stronger positioning, and a personal brand people remember?
                        </h2>

                        <div className="mt-8 flex justify-center">
                            <PrimaryCTA href="mailto:arfahaliqureshi@gmail.com" />
                        </div>

                        <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-8">
                            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                                <div className="space-y-2">
                                    <BrandMark theme="dark" size="lg" />
                                    <a
                                        href="mailto:arfahaliqureshi@gmail.com"
                                        className="block text-sm text-white/68 transition-colors hover:text-white"
                                    >
                                        arfahaliqureshi@gmail.com
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    {CONTACT_LINKS.map((item) => {
                                        const Icon = item.icon

                                        return (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                className="flex h-11 w-11 items-center justify-center rounded-xs border border-white/12 bg-white/6 text-white/82 transition-colors hover:border-primary/45 hover:text-white"
                                                aria-label={item.label}
                                            >
                                                <Icon size={18} />
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
