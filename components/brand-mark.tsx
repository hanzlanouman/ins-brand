"use client"

import Image from "next/image"
import Link from "next/link"

type BrandMarkProps = {
    href?: string
    theme?: "light" | "dark" | "system"
    size?: "sm" | "md" | "lg"
    variant?: "header" | "footer"
}

const sizeMap = {
    sm: "h-10 w-[140px]",
    md: "h-14 w-[180px]",
    lg: "h-16 w-[220px]",
}

export default function BrandMark({ href = "/", theme = "system", size = "md", variant = "header" }: BrandMarkProps) {
    const lightLogo = variant === "header" ? "/logo/logo-light.png" : "/logo/logo-large-light.png";
    const darkLogo = variant === "header" ? "/logo/logo-dark.png" : "/logo/logo-full-dark.png";

    // Adding a dramatic scale to combat internal image padding while keeping it visually left-aligned
    const scaleClass = variant === "footer" ? "scale-[1.8]" : "scale-[2.4]";
    const imageClasses = `object-contain object-left origin-left transition-transform duration-300 ${scaleClass}`;

    return (
        <Link href={href} className="inline-flex items-center">
            <span className={`relative block overflow-visible ${sizeMap[size]}`}>
                {theme === "dark" ? (
                    <Image
                        src={darkLogo}
                        alt="Staxly Solutions"
                        fill
                        className={imageClasses}
                        sizes="300px"
                        priority={size === "md"}
                    />
                ) : theme === "light" ? (
                    <Image
                        src={lightLogo}
                        alt="Staxly Solutions"
                        fill
                        className={imageClasses}
                        sizes="300px"
                        priority={size === "md"}
                    />
                ) : (
                    <>
                        <Image
                            src={lightLogo}
                            alt="Staxly Solutions"
                            fill
                            className={`${imageClasses} logo-light`}
                            sizes="300px"
                            priority={size === "md"}
                        />
                        <Image
                            src={darkLogo}
                            alt="Staxly Solutions"
                            fill
                            className={`${imageClasses} logo-dark`}
                            sizes="300px"
                            priority={size === "md"}
                        />
                    </>
                )}
            </span>
        </Link>
    )
}
