import Link from "next/link"
import { ArrowUpRight, Instagram, Linkedin, Mail, Youtube } from "lucide-react"

import BrandMark from "./brand-mark"

const navLinks = [
    { label: "Focus", href: "/#focus-areas" },
    { label: "Work With Me", href: "/services" },
    { label: "Content", href: "/#content-library" },
    { label: "Resources", href: "/#resources" },
]

const workLinks = [
    { label: "Staxly", href: "https://www.staxlysolutions.com/" },
    { label: "AutoReady", href: "https://www.autoready.app/" },
    { label: "Gumroad", href: "https://arfah.gumroad.com/" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~01569a5d5741fa327a" },
]

const socialLinks = [
    {
        label: "Instagram",
        href: "https://instagram.com/arfah_talks",
        Icon: Instagram,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@arfah_talks?sub_confirmation=1",
        Icon: Youtube,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/arfahali-personalbrandingstrategist/",
        Icon: Linkedin,
    },
    {
        label: "Email",
        href: "mailto:arfahaliqureshi@gmail.com",
        Icon: Mail,
    },
]

export default function Footer() {
    return (
        <footer className="w-full bg-background px-5 pb-9 pt-4 sm:px-8 lg:px-16">
            <div className="mx-auto grid max-w-[82.25rem] gap-9 border-t border-foreground/10 pt-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.8fr_0.9fr]">
                <div>
                    <BrandMark size="lg" />
                    <p className="mt-1 max-w-xs font-sans text-sm font-semibold leading-6 text-foreground/58">
                        Personal branding, content strategy, and digital products.
                    </p>
                    <p className="mt-6 font-sans text-xs font-semibold text-foreground/38">
                        © {new Date().getFullYear()} Arfah. All rights reserved.
                    </p>
                </div>

                <div>
                    <h2 className="font-sans text-sm font-extrabold text-foreground">Explore</h2>
                    <nav className="mt-4 grid gap-3 font-sans text-sm font-semibold text-foreground/62">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="w-fit underline-offset-4 transition-colors hover:text-foreground hover:underline"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div>
                    <h2 className="font-sans text-sm font-extrabold text-foreground">Elsewhere</h2>
                    <div className="mt-4 grid gap-3 font-sans text-sm font-semibold text-foreground/62">
                        {workLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex w-fit items-center gap-1.5 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                            >
                                {link.label}
                                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="font-sans text-sm font-extrabold text-foreground">Get in touch</h2>
                    <div className="mt-4 flex items-center gap-3">
                        {socialLinks.map(({ label, href, Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f6f1ef] text-foreground/64 transition-colors hover:bg-primary hover:text-white"
                                aria-label={label}
                            >
                                <Icon size={18} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
