/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import type React from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useState, useMemo, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"

export default function ContactForm() {
    const { ref, isVisible } = useScrollAnimation()
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dealershipName: "",
        challenge: "",
    })
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    // fire prefetch only once
    const prefetchDone = useRef(false)

    const qs =
        typeof window !== "undefined"
            ? new URLSearchParams(window.location.search)
            : null

    const targetUrl = useMemo(() => {
        const params = new URLSearchParams()
        if (formData.name) params.set("name", formData.name)
        if (formData.email) params.set("email", formData.email)
        return `/book-your-call${params.toString() ? `?${params.toString()}` : ""}`
    }, [formData.name, formData.email])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const prefetchBooking = useCallback(() => {
        if (prefetchDone.current) return
        prefetchDone.current = true
        Promise.resolve(router.prefetch(targetUrl)).catch(() => { })
    }, [router, targetUrl])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (loading) return
        setLoading(true)

        prefetchBooking() // ensure it’s already warmed

        const payload = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            dealership: formData.dealershipName.trim(),
            message: formData.challenge.trim(),
            utm: {
                source: qs?.get("utm_source") ?? "",
                medium: qs?.get("utm_medium") ?? "",
                campaign: qs?.get("utm_campaign") ?? "",
            },
        }

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
                cache: "no-store",
                keepalive: true,
            })

            const json: { ok?: boolean } = await res.json().catch(() => ({} as { ok?: boolean }))

            if (res.ok && json.ok) {
                setSubmitted(true)
                router.push(targetUrl)
                return
            }
            console.error("Lead submit failed", { status: res.status, json })
        } catch (err) {
            console.error("Network error submitting lead", err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <section
            id="contact"
            ref={ref}
            aria-busy={loading ? "true" : "false"}
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
                        No sales pressure. No hidden fees. Just a real 15-minute conversation about how we can help your dealership grow.
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
                            onFocus={prefetchBooking} // prefetch on first focus
                            required
                            className="bg-card border-border/50"
                            disabled={loading}
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-card border-border/50"
                            disabled={loading}
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
                        disabled={loading}
                    />

                    <Textarea
                        name="challenge"
                        placeholder="What's your biggest challenge online?"
                        value={formData.challenge}
                        onChange={handleChange}
                        rows={4}
                        className="bg-card border-border/50 resize-none"
                        disabled={loading}
                    />

                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="inline-flex items-center justify-center gap-2">
                                <svg
                                    className="animate-spin h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Submitting…
                            </span>
                        ) : (
                            "Book My Free 15-Min Call"
                        )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center pt-2">
                        No spam. We&apos;ll confirm your time via email within 2 hours.
                    </p>
                </form>
            </div>
        </section>
    )
}
