import {Button} from "@radix-ui/themes";
import bg from "../../public/assets/HeroBG.png";
import Link from "next/link";


export default function Hero() {

    return (
        <div className="bg-white dark:bg-gray-900 w-screen" style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: '60%',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
        }}>
            <div className="flex flex-row p-10">
                <div className="basis-2/3">
                    <h1 className="text-4xl font-extrabold dark:text-white md:text-5xl xl:text-9xl p-10">
                        <section className="font-serif">Connecting</section> Business Opportunities
                    </h1>
                    <h2 className="font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-3xl p-10">
                        Jumpstart your enterprise project with our feature-packed, high-performance Next.js
                        boilerplate! And some more text to hit a 2nd row!
                    </h2>
                    <div className="flex justify-items-start px-10 gap-2">
                        <Button
                            className="w-10 px-2"
                            variant="solid"
                            size="4"
                        >
                            <span className="px-6">
                                Buy
                            </span>
                        </Button>
                        <Button
                            variant="outline"
                            className="mr-3 px-2"
                            size="4"
                        >
                            <span className="px-6">
                                Sell
                            </span>
                        </Button>
                        <Button
                            variant="outline"
                            className="mr-3 px-2"
                            size="4"
                        >
                            <Link href="/contact" className="px-6">
                                Invest
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            className="mr-3 px-2"
                            size="4"
                        >
                            <span className="px-6">
                                Seek Capital
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="basis-1/3">

                </div>
            </div>
</div>
)
}