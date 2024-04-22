import Image from "next/image";
import buyhero from "../../public/assets/HeroBuy.png";
import {Button} from "@radix-ui/themes";

export default function ServiceHero() {

    return (
        <section className="bg-white dark:bg-gray-900 p-4">
            <div className="flex flex-row flex-nowrap justify-center">
                <div className="flex justify-center items-center w-5/6 h-fit border-2 border-gray-500 rounded-3xl p-32">
                    <div className="w-1/2">
                        <h5 className="md:text-5xl xl:text-4xl text-purple-400 my-3">BUY</h5>
                        <h4 className="md:text-5xl xl:text-6xl my-3">
                            I am <span className="font-serif text-purple-400">seeking</span> to buy
                        </h4>
                        <p className="text-xl">Connecting people to buy companies has never been easier. Our platform provides a seamless
                            experience for both buyers and sellers, ensuring a smooth transaction process.
                        </p>
                        <div className="py-6">
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
                    <div className="w-1/2">
                        <Image src={buyhero} alt={"Buy Hero"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}