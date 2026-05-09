"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import ThemeSwitcher from "./theme-switcher"
import { PrimaryCTA } from "../primary-cta"
import { X } from "lucide-react"
import Logo from "./logo"

type Props = { isOpen: boolean; onClose: () => void }

export default function MobileMenu({ isOpen, onClose }: Props) {
    const firstLinkRef = useRef<HTMLAnchorElement>(null)

    // body lock + Esc + initial focus when opening
    useEffect(() => {
        if (!isOpen) return
        const prev = document.body.style.overflow
        document.body.style.overflow = "hidden"
        firstLinkRef.current?.focus()
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
        window.addEventListener("keydown", onKey)
        return () => {
            document.body.style.overflow = prev
            window.removeEventListener("keydown", onKey)
        }
    }, [isOpen, onClose])

    const links = [
        { href: "/#focus-areas", label: "Focus" },
        { href: "/#resources", label: "Resources" },
        { href: "/services", label: "Work With Me" },
    ]

    return (
        <div
            className={`fixed inset-0 z-50 md:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
            role="dialog"
            aria-modal="true"
            aria-hidden={!isOpen}
        >
            {/* overlay with fade */}
            <button
                aria-label="Close menu"
                onClick={onClose}
                className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity ${isOpen ? "opacity-100" : "opacity-0"
                    }`}
            />

            {/* slide-in sheet */}
            <div
                className={`absolute right-0 top-0 h-full w-[88vw] max-w-[420px]
                    bg-background border-l border-border shadow-2xl
                    transition-transform duration-300 ease-out will-change-transform
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
                    <div className="flex h-6">
                        <Logo />
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-2 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* content */}
                <nav className="flex h-[calc(100%-56px)] flex-col">
                    {/* links + CTA */}
                    <ul className="px-3 py-3 space-y-1">
                        {links.map((link, index) => (
                            <li key={link.href}>
                                <Link
                                    ref={index === 0 ? firstLinkRef : undefined}
                                    href={link.href}
                                    onClick={onClose}
                                    className="block w-full rounded-lg px-3 py-4 text-left text-base font-medium text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/60"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        {/* Primary CTA clearly visible with links */}
                        <li className="pt-2 px-1">
                            <PrimaryCTA id="mobile-cta" href="/book-your-call" onClick={onClose} />
                        </li>
                    </ul>

                    {/* footer pinned to bottom: theme only */}
                    <div className="mt-auto px-5 pb-5 pt-3 border-t border-border/60 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Theme</span>
                        <ThemeSwitcher />
                    </div>
                </nav>
            </div>
        </div>
    )
}
