"use client"

import Image from "next/image"
import Link from "next/link"

type BrandMarkProps = {
    href?: string
    theme?: "light" | "dark" | "system"
    size?: "sm" | "md" | "lg"
}

const sizeMap = {
    sm: "h-10 w-[156px]",
    md: "h-12 w-[196px]",
    lg: "h-14 w-[248px]",
}

export default function BrandMark({ href = "/", theme = "system", size = "md" }: BrandMarkProps) {
    return (
        <Link href={href} className="inline-flex items-center">
            <span className={`relative overflow-visible ${sizeMap[size]}`}>
                {theme === "dark" ? (
                    <Image
                        src="/logo/logo-full-dark.png"
                        alt="Staxly Solutions"
                        fill
                        className="object-contain object-left scale-[1.45]"
                        sizes="220px"
                        priority={size === "md"}
                    />
                ) : theme === "light" ? (
                    <Image
                        src="/logo/logo-large-light.png"
                        alt="Staxly Solutions"
                        fill
                        className="object-contain object-left scale-[1.45]"
                        sizes="220px"
                        priority={size === "md"}
                    />
                ) : (
                    <>
                        <Image
                            src="/logo/logo-large-light.png"
                            alt="Staxly Solutions"
                            fill
                            className="object-contain object-left scale-[1.45] logo-light"
                            sizes="220px"
                            priority={size === "md"}
                        />
                        <Image
                            src="/logo/logo-full-dark.png"
                            alt="Staxly Solutions"
                            fill
                            className="object-contain object-left scale-[1.45] logo-dark"
                            sizes="220px"
                            priority={size === "md"}
                        />
                    </>
                )}
            </span>
        </Link>
    )
}
