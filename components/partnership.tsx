"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"

const TEAM = [
    {
        name: "Hanzla",
        role: "Full-Stack Developer",
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
        role: "Product Lead & Strategy",
        image: "/fun.png",
        testimonial: {
            quote:
                "I found the right person for the job. Intelligent, professional, and goes the extra mile. I'd recommend her without hesitation.",
            author: "Raman",
            authorImage: "/fun.png",
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
            <div className="mx-auto max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Your Partners: Not a Faceless Company
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
                        We&apos;re Hanzla and Arfah. We&apos;re not a massive agency—we&apos;re a two-person specialist team. We partner with
                        dealership owners like you because we love making technology simple and seeing it actually help a business
                        grow. When you call, you get us.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    {TEAM.map((member, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                            {/* Professional photo */}
                            <div className="flex gap-8 justify-between items-end mb-4">
                                <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    className=" rounded-lg object-cover primary/10 border border-muted-foreground/20 w-64 h-72"
                                    width={256}
                                    height={256}
                                />

                            </div>

                            {/* Name and role */}
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                                    <p className="text-primary font-medium mt-1 text-sm">{member.role}</p>
                                </div>
                                <div className="flex flex- items-center gap-3">
                                    <Link
                                        href={member.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={16} />
                                    </Link>
                                    <Link
                                        href={member.socials.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                                        aria-label="Twitter"
                                    >
                                        <Twitter size={16} />
                                    </Link>
                                    <Link
                                        href={member.socials.email}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                                        aria-label="Email"
                                    >
                                        <Mail size={16} />
                                    </Link>
                                </div>
                            </div>

                            <div className="border-l-4 border-primary pl-4 py-2">
                                <p className="text-foreground text-sm leading-relaxed italic">&quot;{member.testimonial.quote}&quot;</p>
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

                            {/* Social links */}

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
