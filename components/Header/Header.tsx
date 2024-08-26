import {ArrowTopRightIcon} from "@radix-ui/react-icons";
import {Button} from "@radix-ui/themes";
import Image from "next/image";

import logo from "../../public/logos/DealFusion_Logo_Stacked_ReverseWhite.png"


export default function Header() {

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex flex-row flex-nowrap">
                <a className="basis-1/2" href={"/"}>
                    <Image src={logo} alt={"DealFusion Logo"} width={250} className={"p-8"}/>
                </a>
                <div className="basis-1/2 flex justify-end p-5">
                    <Button
                        className="mr-3"
                        variant="soft"
                        size="3"
                    >
                        Enquire Now
                        <ArrowTopRightIcon/>
                    </Button>
                </div>
            </div>
        </section>
    )
}