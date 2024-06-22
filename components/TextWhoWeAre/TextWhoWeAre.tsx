import Image from "next/image";
import logograd from "../../public/logos/DealFusion_Icon_Gradient.png";
import logowhite from "../../public/logos/DealFusion_Icon_White.png";

export default function TextWhoWeAre() {

    return (
        <>
            <section className="bg-white dark:bg-gray-900 py-12">
                <div className="flex justify-center p-5 items-center">
                    <div>
                        <p className="text-5xl text-center text-purple-400">WHO WE ARE</p>
                        <p className="text-9xl">GETTING THE</p>
                        <p className="text-9xl text-center"><span className="italic font-serif">DEAL</span> DONE</p>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 p-4">
                <div className="flex flex-row flex-wrap justify-center">
                    <div
                        className="flex justify-center items-center lg:w-2/5 sm:w-full h-fit border-2 border-gray-500 rounded-3xl p-20 m-4">
                        <div className="px-2">
                            <h4 className="md:text-5xl xl:text-6xl my-3">
                                The Problem
                            </h4>
                            <div className={"flex justify-center w-full"}>
                                <Image src={logograd} alt={"Logo"} className={"p-4"}/>
                            </div>
                            <p className="text-xl">Businesses are bought and sold every day. But it's not accessible to all.
                                It's a time consuming process. Finding the right match is difficult. It has limited capabilities.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex justify-center items-center lg:w-2/5 sm:w-full h-fit border-2 border-gray-500 rounded-3xl p-20 m-4 bg-purple-400">
                        <div className="px-2">
                            <h4 className="md:text-5xl xl:text-6xl my-3">
                                The Solution
                            </h4>
                            <div className={"flex justify-center w-full"}>
                                <Image src={logowhite} alt={"Logo"} className={"p-4"}/>
                            </div>
                            <p className="text-xl">We will create a platform that makes business transactions visible, streamlined and accessible.
                            </p>
                            <p>This will assist:</p>
                            <ul>
                                <li>Advisors</li>
                                <li>Business Owners</li>
                                <li>Investors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}