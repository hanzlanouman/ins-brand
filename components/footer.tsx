import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full bg-background px-4 pt-16 sm:px-6 lg:px-8 border-t border-border">
            <div className="mx-auto max-w-5xl">
                <div className="space-y-16">
                    {/* Top Section - Navigation & CTA */}
                    <div className="grid gap-12 md:grid-cols-3">
                        {/* Left - Navigation */}
                        <div className="space-y-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Navigate</p>
                            <nav className="space-y-2">
                                <Link href="#demo" className="block text-sm text-foreground hover:text-primary transition-colors"

                                >
                                    Our Work
                                </Link>
                                <Link href="#services" className="block text-sm text-foreground hover:text-primary transition-colors">
                                    Services
                                </Link>
                                <Link href="#contact" className="block text-sm text-foreground hover:text-primary transition-colors">
                                    Get in Touch
                                </Link>
                            </nav>
                        </div>

                        {/* Center - Main CTA */}
                        <div className="flex flex-col items-center justify-start text-center space-y-3">
                            <p className="text-sm font-semibold text-foreground">Ready to build?</p>
                            <a href="#contact" className="text-sm text-primary hover:underline transition-colors font-medium">
                                Let&apos;s create something great
                            </a>
                        </div>

                        {/* Right - Social */}
                        <div className="space-y-4 md:text-right">
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Connect</p>
                            <nav className="space-y-2">
                                <a href="#" className="block text-sm text-foreground hover:text-primary transition-colors">
                                    Instagram
                                </a>
                                <a href="#" className="block text-sm text-foreground hover:text-primary transition-colors">
                                    Twitter
                                </a>
                                <a href="#" className="block text-sm text-foreground hover:text-primary transition-colors">
                                    LinkedIn
                                </a>
                            </nav>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border"></div>

                    {/* Bottom Section - Branding & Copyright */}
                    <div className="text-center space-y-6">
                        <Link href="/" className="flex w-full h-48 justify-center items-center gap-2">
                            {/* Light theme */}
                            <Image
                                src="/logo/logo-large-light.png"
                                alt="Staxly Logo"
                                width={560}
                                height={50}
                                priority
                                className="object-contain logo-light"
                            />
                            {/* Dark theme */}
                            <Image
                                src="/logo/logo-full-dark.png"
                                alt="Staxly Logo"
                                width={560}
                                height={500}
                                priority
                                className="object-contain logo-dark"
                            />
                        </Link>
                        <p className="text-xs text-muted-foreground">
                            © {currentYear} Staxly Solutions. Crafted with care by Arfah & Hanzla.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
