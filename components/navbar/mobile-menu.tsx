"use client"

import Link from "next/link"
import { useEffect } from "react"

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 top-16 z-40 md:hidden">
            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-background border-b border-border">
                <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
                    <Link
                        href="/about"
                        className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                        onClick={onClose}
                    >
                        About
                    </Link>
                    <Link
                        href="/pricing"
                        className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                        onClick={onClose}
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#contact"
                        className="block w-full px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium text-center hover:opacity-90 transition-opacity mt-4"
                        onClick={onClose}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}
