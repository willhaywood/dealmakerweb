import Image from "next/image";
import logograd from "../../public/logos/DealFusion_Icon_Gradient.png";
import logowhite from "../../public/logos/DealFusion_Icon_White.png";
import {Button} from "@radix-ui/themes";

export default function HowItWorks() {

    return (
        <>
            <section className="bg-white dark:bg-gray-900 py-12">
                <div className="flex justify-center flex-wrap p-5 items-center w-full">
                    <div className="w-5/6">
                        <p className="text-5xl text-center text-purple-400">HOW IT WORKS</p>

                        <p className="text-9xl text-center">SIMPLE, EFFECTIVE</p>

                        <p className="text-9xl text-center"><span className="italic font-serif">AUTOMATED.</span></p>

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
                                <span className="px-6">
                                    Enquire Now
                                </span>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}