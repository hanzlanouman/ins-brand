"use client"

import { FormEvent, useState } from "react"

import { MascotCTA } from "@/components/mascot-cta"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type Status = "idle" | "loading" | "success" | "error"

export default function FinalConversionCTA() {
    const { ref, isVisible } = useScrollAnimation()
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<Status>("idle")

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (status === "loading") return

        const cleanEmail = email.trim()
        if (!cleanEmail) return

        setStatus("loading")
        const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: "Homepage final CTA subscriber",
                    email: cleanEmail,
                    dealership: "Content Notes",
                    message: "Joined Content Notes from the final homepage CTA.",
                    utm: {
                        source: params?.get("utm_source") ?? "homepage",
                        medium: params?.get("utm_medium") ?? "final-cta",
                        campaign: params?.get("utm_campaign") ?? "",
                    },
                }),
                cache: "no-store",
                keepalive: true,
            })

            const json: { ok?: boolean } = await res.json().catch(() => ({}))
            if (!res.ok || !json.ok) throw new Error("Signup failed")

            setStatus("success")
            setEmail("")
        } catch {
            setStatus("error")
        }
    }

    return (
        <section
            id="contact"
            ref={ref}
            className={`w-full bg-background px-5 py-14 transition-all duration-1000 sm:px-8 lg:px-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
        >
            <div className="mx-auto max-w-[82.25rem]  pt-10">
                <div className="grid gap-6 rounded-[30px] bg-[#efc5d040] p-6 sm:p-8 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:p-10">
                    <div>
                        <h2 className="max-w-3xl font-display text-4xl font-black leading-[1] text-foreground sm:text-5xl">
                            Want clearer content people remember?
                        </h2>
                        <p className="mt-4 max-w-2xl font-sans text-base font-medium leading-7 text-foreground/70">
                            Book a strategy call for hands-on help, or join Content Notes for practical ideas as the free resources roll out.
                        </p>
                        <MascotCTA href="/book-your-call" reserveSpace wrapperClassName="mt-1">
                            Book a strategy call
                        </MascotCTA>
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-[24px] bg-white/70 p-4 sm:p-5">
                        <h3 className="font-display text-4xl font-black leading-tight text-foreground">
                            Join Content Notes
                        </h3>
                        <p className="mt-3 font-sans text-sm font-semibold leading-6 text-foreground/62">
                            Free resources are coming soon. Join the list and I&apos;ll send the first notes when they&apos;re ready.
                        </p>

                        <div className="mt-5 flex flex-col gap-3 rounded-[2rem] bg-white p-2 sm:flex-row sm:rounded-full">
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                    if (status !== "idle") setStatus("idle")
                                }}
                                placeholder="Your email"
                                required
                                disabled={status === "loading"}
                                className="min-h-12 flex-1 rounded-full bg-transparent px-5 font-sans text-base font-semibold text-foreground placeholder:text-foreground/42 focus:outline-none disabled:opacity-60"
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-foreground px-6 font-sans text-sm font-extrabold text-background transition-colors hover:bg-foreground/86 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {status === "loading" ? "Joining" : "Join"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
