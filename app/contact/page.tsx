import {Theme} from "@radix-ui/themes";
import { Metadata } from "next"
import '@radix-ui/themes/styles.css';


export const metadata: Metadata = {
    title: "DealFusion Web",
    twitter: {
        card: "summary_large_image",
    },
    openGraph: {
        url: "https://next-enterprise.vercel.app/",
        images: [
            {
                width: 1200,
                height: 630,
                url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
            },
        ],
    },
}

export default function Web() {
    return (
        <>
            <Theme
                appearance={"dark"}
                accentColor="purple"
                grayColor="gray"
                panelBackground="solid"
                scaling="100%"
                radius="full"
            >
                <section className="bg-white dark:bg-gray-900">

                </section>
            </Theme>
        </>
    )
}
