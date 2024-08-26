import Image from "next/image";
import logograd from "../../public/logos/DealFusion_Icon_Gradient.png";
import logowhite from "../../public/logos/DealFusion_Icon_White.png";
import {Button} from "@radix-ui/themes";
import Link from "next/link";

export default function TextWhoWeAre() {

    return (
        <>
            <section className="bg-white dark:bg-gray-900 py-12">
                <div className="flex justify-center flex-wrap p-5 items-center w-full">
                    <div className="w-5/6">
                        <p className="text-5xl text-center text-purple-400">WHO WE ARE</p>

                        <p className="text-9xl text-center">GETTING THE</p>

                        <p className="text-9xl text-center"><span className="italic font-serif">deal.</span> DONE</p>

                        <p className="text-xl text-center">DealFusion automates a manual process process for advisors (accountants, consultants, etc.) This process
                            involves matching businesses that want to sell with individuals or entities that want to buy/invest. Currently
                            advisors use Excel Deal Sheets and manually search for matches by sending emails to databases and other advisors.</p>
                    </div>
                    <div className="flex justify-center p-8 w-full">
                        <Button
                            className="w-10 px-2"
                            variant="solid"
                            size="4"
                        >
                                <Link href="/contact" className="px-6">
                                    Enquire Now
                                </Link>
                        </Button>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 p-4">
                <div className="flex flex-row flex-wrap justify-center">
                    <div
                        className="flex justify-center items-center lg:w-2/5 sm:w-full border-2 border-gray-500 rounded-3xl p-20 m-4"
                        style={{height: 600} }>
                        <div className="px-2">
                            <h4 className="md:text-5xl xl:text-6xl my-3">
                                The Problem
                            </h4>
                            <div className={"flex justify-center w-full"}>
                                <Image src={logograd} alt={"Logo"} className={"p-4"}/>
                            </div>
                            <p className="text-xl">Businesses are bought and sold every day. But it&apos;s not accessible to all.
                                It&apos;s a time consuming process. Finding the right match is difficult. It has limited capabilities.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex justify-center items-center lg:w-2/5 sm:w-full border-2 border-gray-500 rounded-3xl p-20 m-4 bg-purple-400"
                        style={{height: 600} }>
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
                            <ul className={"list-disc"}>
                                <li className={"list-item ml-6"}>Advisors</li>
                                <li className={"list-item ml-6"}>Business Owners</li>
                                <li className={"list-item ml-6"}>Investors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}