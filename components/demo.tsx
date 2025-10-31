"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"

export default function Demo() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        See the 24/7 Helper in Action
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">Real conversations. Real leads. Real results.</p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    {/* Website Preview */}
                    <div className="rounded-lg overflow-hidden bg-muted border border-border">
                        <img
                            src="/car-dealership-website.jpg"
                            alt="Summit Auto CA Demo Site"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Chat Interface */}
                    <div className="space-y-6">
                        <div className="bg-muted/50 rounded-lg p-5 space-y-4 min-h-96 flex flex-col justify-between border border-border/50">
                            {/* Messages */}
                            <div className="space-y-4 flex-1 overflow-y-auto">
                                {/* Customer Message 1 */}
                                <div className="flex justify-end">
                                    <div className="max-w-xs bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
                                        <p>Hey! Do you have red trucks under $30k in stock?</p>
                                    </div>
                                </div>

                                {/* Bot Response 1 */}
                                <div className="flex justify-start">
                                    <div className="max-w-xs bg-secondary text-secondary-foreground rounded-2xl rounded-tl-sm px-4 py-3 text-sm space-y-2">
                                        <p>Yes! We have 2 red trucks:</p>
                                        <ul className="space-y-1 ml-2">
                                            <li>• 2019 Ford F-150 - $28,900</li>
                                            <li>• 2020 Chevy Silverado - $29,500</li>
                                        </ul>
                                        <p className="pt-1">Both at our Main St lot. Ready to see them?</p>
                                    </div>
                                </div>

                                {/* Customer Message 2 */}
                                <div className="flex justify-end">
                                    <div className="max-w-xs bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
                                        <p>Can I schedule a test drive tomorrow morning?</p>
                                    </div>
                                </div>

                                {/* Bot Response 2 */}
                                <div className="flex justify-start">
                                    <div className="max-w-xs bg-secondary text-secondary-foreground rounded-2xl rounded-tl-sm px-4 py-3 text-sm space-y-2">
                                        <p>Perfect! I have:</p>
                                        <ul className="space-y-1 ml-2">
                                            <li>• 9 AM - Available</li>
                                            <li>• 11 AM - Available</li>
                                        </ul>
                                        <p className="pt-1">What&apos;s your name and number? I&apos;ll lock it in.</p>
                                    </div>
                                </div>

                                {/* Customer Message 3 */}
                                <div className="flex justify-end">
                                    <div className="max-w-xs bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
                                        <p>Mike Johnson, 555-1234. 9 AM works!</p>
                                    </div>
                                </div>

                                {/* Bot Response 3 */}
                                <div className="flex justify-start">
                                    <div className="max-w-xs bg-secondary text-secondary-foreground rounded-2xl rounded-tl-sm px-4 py-3 text-sm">
                                        <p>✓ You&apos;re all set for tomorrow at 9 AM! Our team will meet you then. See you soon!</p>
                                    </div>
                                </div>
                            </div>

                            {/* Timestamp */}
                            <div className="text-center text-xs text-muted-foreground pt-3 border-t border-border/30">
                                10:30 PM • Sunday • Assistant still working
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">What just happened:</span> A customer found your
                                inventory, booked a test drive, and your team has all their info—all at 10:30 PM on a Sunday. Your
                                competitor? Still sleeping.
                            </p>

                            <Link
                                href="https://summit-auto-ca.example.com"
                                target="_blank"
                                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                            >
                                See Live Demo
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
