import {Theme} from "@radix-ui/themes";
import { Metadata } from "next"
import '@radix-ui/themes/styles.css';
import Header from "../../components/Header/Header";



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
                <Header/>
                    <section className="bg-white dark:bg-gray-900 py-12">
                        <div className="flex justify-center flex-wrap p-5 items-center w-full">
                            <iframe src="https://forms.monday.com/forms/embed/4fa394c5149ef1a51eeed6b8d8ee4a7d?r=use1"
                                    width="800" height="1000"
                                    style={{border: 0, boxShadow: "5px 5px 56px 0px rgba(0,0,0,0.25)"}}
                                    className={"content-center"}>

                            </iframe>
                        </div>
                    </section>
            </Theme>
        </>
)
}
