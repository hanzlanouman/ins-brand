"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Logo from "./logo"
import NavLinks from "./nav-links"
import MobileMenu from "./mobile-menu"
import { PrimaryCTA } from "../primary-cta"

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <>
            <nav
                className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 `}
            >
                <div className="mx-auto max-w-[82.5rem] px-4 py-10 sm:px-6 lg:px-16">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Logo />

                        {/* Desktop Navigation */}


                        {/* Right Side - Desktop */}
                        <div className="hidden md:flex items-center gap-12">

                            {/* <ThemeSwitcher /> */}
                            <NavLinks />

                            {/* <button
                                onClick={() => {
                                    //Scroll into view but the top part of the section is not hidden behind the navbar
                                    const element = document.getElementById("contact")
                                    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
                                }}
                                className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:bg-primary/90 transition-colors cursor-pointer"
                            >
                                Book Your Free Strategy Call
                            </button> */}
                            <PrimaryCTA
                                id="hero-cta"
                                href="/book-your-call"
                            />

                        </div>

                        {/* Mobile Menu Button */}
                        {/* Show the CTA on mobile as well*/}
                        <div className="md:hidden flex items-center gap-3">
                            {/* <ThemeSwitcher /> */}
                            <PrimaryCTA
                                id="hero-cta"
                                href="/book-your-call"
                            />
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    )
}
