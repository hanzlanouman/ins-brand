"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
    const { ref, isVisible } = useScrollAnimation()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dealershipName: "",
        challenge: "",
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const params = new URLSearchParams({
            name: formData.name,
            email: formData.email,
        }).toString()

        // In production, this would be a real backend endpoint
        console.log("Form data:", formData)
        window.location.href = `/book-your-call?${params}`
    }

    return (
        <section
            id="contact"
            ref={ref}
            className={`w-full bg-background px-4 py-20 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-12">
                    <p className="text-xs md:text-center font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                        LET&apos;S GET STARTED
                    </p>
                    <h2 className="text-5xl md:text-center sm:text-7xl font-bold tracking-tight text-foreground">
                        Book Your <span className="text-primary">Free Strategy Call</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-center">
                        No sales pressure. No hidden fees. Just a real 15-minute conversation about how we can help your dealership
                        grow.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-card border-border/50"
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-card border-border/50"
                        />
                    </div>

                    <Input
                        type="text"
                        name="dealershipName"
                        placeholder="Dealership Name"
                        value={formData.dealershipName}
                        onChange={handleChange}
                        required
                        className="bg-card border-border/50"
                    />

                    <Textarea
                        name="challenge"
                        placeholder="What's your biggest challenge online?"
                        value={formData.challenge}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="bg-card border-border/50 resize-none"
                    />

                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 cursor-pointer"
                    >
                        Book My Free 15-Min Call
                    </Button>

                    <p className="text-xs text-muted-foreground text-center pt-2">
                        No spam. We&apos;ll confirm your time via email within 2 hours.
                    </p>
                </form>
            </div>
        </section>
    )
}
