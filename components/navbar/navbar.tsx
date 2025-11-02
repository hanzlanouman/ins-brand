"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Logo from "./logo"
import NavLinks from "./nav-links"
import MobileMenu from "./mobile-menu"
import { PrimaryCTA } from "../primary-cta"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-background/80 border-b border-border" : "bg-transparent"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                onClick={() => {
                                    // defer by one frame to allow Chrome focus propagation
                                    requestAnimationFrame(() => {
                                        document.getElementById("contact")?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        })
                                    })
                                }}
                            />

                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-3">
                            {/* <ThemeSwitcher /> */}

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
