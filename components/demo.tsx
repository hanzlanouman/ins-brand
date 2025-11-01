"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import Link from "next/link"

export default function Demo() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            id="demo"
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-16">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                        YOUR COMPETITIVE ADVANTAGE
                    </p>
                    <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground text-balance">
                        From <span className="text-primary">First Message</span> to Sold
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Watch how leads find, engage, and buy—completely automated while you sleep.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    {/* Website Preview */}
                    <div className="rounded-xl overflow-hidden bg-muted border border-border shadow-lg">
                        <Image
                            src="/car-dealership-website.jpg"
                            alt="Summit Auto CA Demo Site"
                            className="w-full h-auto object-cover"
                            width={800}
                            height={1000}
                        />
                    </div>

                    {/* Chat Interface */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-background to-muted/50 rounded-xl p-6 space-y-4 min-h-96 flex flex-col justify-between border border-border shadow-lg">
                            {/* Messages */}
                            <div className="space-y-4 flex-1 overflow-y-auto pr-2">
                                {/* Customer Message 1 */}
                                <div className="flex justify-end">
                                    <div className="max-w-xs bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-medium">
                                        <p>Hey! Do you have red trucks under $30k in stock?</p>
                                    </div>
                                </div>

                                {/* Bot Response 1 */}
                                <div className="flex justify-start">
                                    <div className="max-w-xs bg-secondary/80 text-secondary-foreground rounded-2xl rounded-tl-sm px-4 py-3 text-sm space-y-2 shadow-sm">
                                        <p className="font-medium">Great question! We have 2 perfect matches for you:</p>
                                        <div className="space-y-2 mt-2 bg-background/30 rounded-lg p-2">
                                            <div className="text-xs">
                                                <p className="font-semibold">2019 Ford F-150</p>
                                                <p className="text-secondary-foreground/80">$28,900 • Main St Lot</p>
                                            </div>
                                            <div className="text-xs">
                                                <p className="font-semibold">2020 Chevy Silverado</p>
                                                <p className="text-secondary-foreground/80">$29,500 • Main St Lot</p>
                                            </div>
                                        </div>
                                        <p className="pt-2 text-xs">Want to schedule a test drive? I can book you in right now.</p>
                                    </div>
                                </div>

                                {/* Customer Message 2 */}
                                <div className="flex justify-end">
                                    <div className="max-w-xs bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-medium">
                                        <p>Can I schedule a test drive tomorrow morning?</p>
                                    </div>
                                </div>

                                {/* Bot Response 2 */}
                                <div className="flex justify-start">
                                    <div className="max-w-xs bg-secondary/80 text-secondary-foreground rounded-2xl rounded-tl-sm px-4 py-3 text-sm space-y-2 shadow-sm">
                                        <p className="font-medium">Here are your available slots tomorrow:</p>
                                        <div className="space-y-1 mt-2 bg-background/30 rounded-lg p-2">
                                            <div className="text-xs flex items-center justify-between">
                                                <span className="font-semibold">9:00 AM</span>
                                                <span className="text-green-600 dark:text-green-400 text-xs font-medium">Available</span>
                                            </div>
                                            <div className="text-xs flex items-center justify-between">
                                                <span className="font-semibold">11:00 AM</span>
                                                <span className="text-green-600 dark:text-green-400 text-xs font-medium">Available</span>
                                            </div>
                                        </div>
                                        <p className="pt-2 text-xs">Which time works best? I&apos;ll need your name and number to confirm.</p>
                                    </div>
                                </div>

                                {/* Customer Message 3 */}
                                <div className="flex justify-end">
                                    <div className="max-w-xs bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-medium">
                                        <p>Mike Johnson, 555-1234. 9 AM works!</p>
                                    </div>
                                </div>

                                {/* Bot Response 3 */}
                                <div className="flex justify-start">
                                    <div className="max-w-xs bg-secondary/80 text-secondary-foreground rounded-2xl rounded-tl-sm px-4 py-3 text-sm space-y-2 shadow-sm">
                                        <div className="bg-green-100/20 dark:bg-green-950/20 rounded-lg p-2 border border-green-200 dark:border-green-800">
                                            <p className="font-semibold text-green-700 dark:text-green-400 text-xs">Booking confirmed!</p>
                                            <p className="text-xs mt-1">Tomorrow, 9:00 AM • Mike Johnson • 555-1234</p>
                                        </div>
                                        <p className="text-xs">You&apos;ll get a confirmation call in 2 minutes. See you tomorrow!</p>
                                    </div>
                                </div>
                            </div>

                            {/* Timestamp */}
                            <div className="text-center text-xs text-muted-foreground pt-4 border-t border-border/30">
                                10:30 PM • Sunday • Your AI Assistant is working 24/7
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold text-foreground">What just happened:</span> A customer found exactly
                                    what they wanted, booked a test drive, and your team has their info—all at 10:30 PM on a Sunday.
                                    Meanwhile, your competitors aren&apos;t even answering.
                                </p>
                            </div>

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
