"use client"

import { FormEvent, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = [
    {
        label: "Followers",
        value: "10K+",
    },
    {
        label: "Views",
        value: "1M+",
    },
    {
        label: "Clients Served",
        value: "20+",
    },
]


type Status = "idle" | "loading" | "success" | "error"

export default function ContentNotes() {
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
                    name: "Content Notes subscriber",
                    email: cleanEmail,
                    dealership: "Content Notes",
                    message: "Requested Arfah's Content Notes and Content Clarity Kit from the homepage.",
                    utm: {
                        source: params?.get("utm_source") ?? "homepage",
                        medium: params?.get("utm_medium") ?? "content-notes",
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
            ref={ref}
            id="content-notes"
            className={`px-5 pb-16 sm:px-8 lg:px-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_30px_90px_-62px_rgba(26,26,26,0.55)] sm:px-8 sm:py-8 lg:px-12 lg:py-8">
                <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                    <div>
                        {/* <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 font-sans text-xs font-extrabold uppercase tracking-widest text-primary">
                            <Sparkles className="h-3.5 w-3.5" aria-hidden />
                            Coming Soon
                        </p> */}

                        <h2 className="mt-5 max-w-xl font-display text-4xl font-black leading-[0.98] text-foreground sm:text-5xl">
                            Join <span className="relative block">Content Notes</span>
                        </h2>



                        <div className="mt-8 grid grid-cols-3 gap-4 border-y border-foreground/10 py-5">
                            {stats.map(({ label, value }) => (
                                <div key={label} className="min-w-0">
                                    <p className="font-display text-2xl font-black leading-none text-foreground sm:text-3xl">
                                        {value}
                                    </p>
                                    <p className="mt-1 font-sans text-xs font-bold uppercase tracking-wider text-foreground/50">
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:pl-4">
                        <p className="mt-5 max-w-xl font-sans text-lg font-medium leading-9  sm:text-[1.257rem]">
                            Get my upcoming newsletter on content strategy, hooks, and building an Instagram brand people remember.
                        </p>


                        <form onSubmit={handleSubmit} className="mt-8">
                            <div className="flex flex-col gap-3 rounded-[2rem] bg-[#f6eef1] p-2 sm:flex-row sm:rounded-full">
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
                                    className="min-h-12 flex-1 rounded-full bg-transparent px-5 font-sans text-base font-semibold text-foreground placeholder:text-foreground/45 focus:outline-none disabled:opacity-60"
                                />
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 font-sans text-sm font-extrabold tracking-wider text-white shadow-[0_0_22px_rgba(214,26,255,0.24)] transition-colors hover:bg-[#e143ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {status === "loading" ? "Joining" : "Join the list"}
                                    <ArrowRight className="h-4 w-4" aria-hidden />
                                </button>
                            </div>

                            <p className="mt-3 min-h-5 font-sans text-xs font-medium text-foreground/50 text-center">
                                {status === "success"
                                    ? "You are on the list. We will send the first notes when they are ready."
                                    : status === "error"
                                        ? "Something went wrong. Please try again in a moment."
                                        : "No spam. Just practical content notes and the free kit when it launches."}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}
