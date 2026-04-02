"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import { Linkedin, Mail, Instagram } from "lucide-react"
import Image from "next/image"

const TEAM = [
    {
        name: "Arfah Ali",
        role: "Content Strategist, Creator Support, and Personal Brand Partner",
        image: "/arfah.jpeg",
        testimonial: {
            quote:
                "I found the right person for the job. Intelligent, professional, and goes the extra mile. I'd recommend her without hesitation.",
            author: "Raman",
            authorImage: "/aaras.jpg",
        },
        socials: {
            linkedin: "https://www.linkedin.com/in/arfahali/",
            instagram: "https://instagram.com/arfah_talks",
            email: "mailto:arfahaliqureshi@gmail.com",
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
                        Work Directly with <span className="text-primary">Arfah</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
                        No agency maze. No handoff culture. You work directly with Arfah on the strategy, content direction,
                        and brand clarity behind the work.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-1">
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
                                                href={member.socials.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                                                aria-label="Instagram"
                                            >
                                                <Instagram size={16} />
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
                                            className="w-7 h-7 rounded-full object-contain object-center"
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
