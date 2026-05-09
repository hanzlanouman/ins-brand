import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { FocusTopicPage, focusTopics, type FocusTopicSlug } from "@/components/focus-topic-page"

type PageProps = {
    params: Promise<{
        slug: string
    }>
}

export function generateStaticParams() {
    return Object.keys(focusTopics).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const topic = focusTopics[slug as FocusTopicSlug]

    if (!topic) {
        return {
            title: "Focus Area - Arfah Ali",
        }
    }

    return {
        title: `${topic.title} - Arfah Ali`,
        description: topic.intro,
    }
}

export default async function FocusTopicRoute({ params }: PageProps) {
    const { slug } = await params
    const topic = focusTopics[slug as FocusTopicSlug]

    if (!topic) notFound()

    return <FocusTopicPage topic={topic} />
}
