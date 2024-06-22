import Image from "next/image";
import logograd from "../../public/logos/DealFusion_Icon_Gradient.png";

export default function DiveInNow() {

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="flex flex-row flex-wrap justify-center">
                    <div
                        className="flex justify-center items-center h-fit rounded-3xl p-20 bg-purple-500">
                        <div className="px-2">
                            <p>
                                Dive
                            </p>
                            <p>
                                IN NOW
                            </p>
                            <div className={"flex justify-center w-full"}>
                                <Image src={logograd} alt={"Logo"} className={"p-4"}/>
                            </div>
                            <p className="text-xl">Businesses are bought and sold every day. But it&apos;s not accessible to all.
                                It&apos;s a time consuming process. Finding the right match is difficult. It has limited capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}