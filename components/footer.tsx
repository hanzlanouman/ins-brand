import Link from "next/link"
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react"
import BrandMark from "./brand-mark"

export default function Footer() {
    const links = [
        {
            label: "Email",
            href: "mailto:arfahaliqureshi@gmail.com",
            icon: Mail,
        },
        {
            label: "Instagram",
            href: "https://instagram.com/arfah_talks",
            icon: Instagram,
        },
        {
            label: "YouTube",
            href: "https://www.youtube.com/@arfah_talks?sub_confirmation=1",
            icon: Youtube,
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/arfahali-personalbrandingstrategist/",
            icon: Linkedin,
        },
    ]

    return (
        <footer className="w-full border-t border-border px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                    <div className="space-y-2">
                        <BrandMark size="lg" variant="footer" />
                        <a
                            href="mailto:arfahaliqureshi@gmail.com"
                            className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            arfahaliqureshi@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        {links.map((item) => {
                            const Icon = item.icon

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="flex h-11 w-11 items-center justify-center rounded-xs border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                                    aria-label={item.label}
                                >
                                    <Icon size={18} />
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </footer>
    )
}
