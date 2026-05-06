import Link from "next/link"
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react"

import BrandMark from "./brand-mark"

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

const navLinks = [
    { label: "Focus", href: "#focus-areas" },
    { label: "About", href: "#about" },
    { label: "Content", href: "#content-library" },
    { label: "Resources", href: "#resources" },
]

export default function Footer() {
    return (
        <footer className="w-full bg-background px-5 pb-8 pt-4 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-[82.25rem]  border-foreground/10 pt-7">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <BrandMark size="lg" />
                        <a
                            href="mailto:arfahaliqureshi@gmail.com"
                            className="mt-3 block font-sans text-sm font-semibold text-foreground/58 transition-colors hover:text-foreground"
                        >
                            arfahaliqureshi@gmail.com
                        </a>
                    </div>

                    <nav className="flex flex-wrap gap-x-6 gap-y-3 font-sans text-sm font-extrabold text-foreground/62">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        {socialLinks.map(({ label, href, Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 text-foreground/62 transition-colors hover:border-primary/35 hover:text-primary"
                                aria-label={label}
                            >
                                <Icon size={18} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mt-7 flex flex-col gap-3 font-sans text-xs font-semibold text-foreground/42 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Arfah. All rights reserved.</p>
                    <p>Personal branding, content strategy, and digital products.</p>
                </div>
            </div>
        </footer>
    )
}
