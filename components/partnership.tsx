"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import { Linkedin, Twitter, Mail, X } from "lucide-react"
import Image from "next/image"

const TEAM = [
    {
        name: "Hanzla",
        role: "Technical Lead & Client Fulfillment",
        image: "/hanzla.jpg",
        testimonial: {
            quote:
                "Having been in the industry for 20 years, Hanzla is one of the best full-stack developers I've ever worked with. An unstoppable powerhouse.",
            author: "Amir Deilami",
            authorImage: "/hanzla.jpg",
        },
        socials: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "mailto:hanzla@staxly.com",
        },
    },
    {
        name: "Arfah",
        role: "Co-Founder: Marketing & Operations",
        image: "/arfah.jpeg",
        testimonial: {
            quote:
                "I found the right person for the job. Intelligent, professional, and goes the extra mile. I'd recommend her without hesitation.",
            author: "Raman",
            authorImage: "/fun2.jpg",
        },
        socials: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "mailto:arfah@staxly.com",
        },
    },
]

export default function Partnership() {
    const { ref, isVisible } = useScrollAnimation()

    return (
        <section
            id="partnership"
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-16">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">BUILT FOR YOU</p>
                    <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground">
                        Direct Access to <span className="text-primary">Your Co-Founders</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
                        You work directly with Hanzla and Arfah—no delays, no confusion, no corporate overhead. Just two co-founders
                        committed to your success.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {TEAM.map((member, idx) => (
                        <div key={idx} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                {/* Avatar and name/role in row */}
                                <div className="flex items-end gap-4">
                                    <div className="relative shrink-0">
                                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-lg opacity-60" />
                                        <Image
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            className="relative w-32 h-32 rounded-full object-cover object-center border border-primary/30 shadow-lg"
                                            width={128}
                                            height={128}
                                        />
                                    </div>

                                    <div className="flex-1 pb-1">
                                        <h3 className="text-3xl font-bold text-foreground">{member.name}</h3>
                                        <p className="text-primary font-semibold text-base mt-2">{member.role}</p>
                                        <div className="flex items-center gap-2 mt-4">
                                            <Link
                                                href={member.socials.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                                                aria-label="LinkedIn"
                                            >
                                                <Linkedin size={16} />
                                            </Link>
                                            <Link
                                                href={member.socials.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                                                aria-label="Twitter"
                                            >
                                                <X size={16} />
                                            </Link>
                                            <Link
                                                href={member.socials.email}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                                                aria-label="Email"
                                            >
                                                <Mail size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial section */}
                                <div className="border-l-4 border-primary pl-4 py-2">
                                    <p className="text-foreground text-sm leading-relaxed italic">
                                        &quot;{member.testimonial.quote}&quot;
                                    </p>
                                    <div className="flex items-center gap-2 mt-4">
                                        <Image
                                            src={member.testimonial.authorImage || "/placeholder.svg"}
                                            alt={member.testimonial.author}
                                            className="w-7 h-7 rounded-full object-cover"
                                            width={28}
                                            height={28}
                                        />
                                        <p className="text-xs font-medium text-muted-foreground">{member.testimonial.author}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
