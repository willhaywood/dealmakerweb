import {ArrowTopRightIcon, BookmarkIcon} from "@radix-ui/react-icons";
import {Button} from "@radix-ui/themes";


export default function Header() {

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex flex-row flex-nowrap">
                <div className="basis-1/2">
                    Main Logo
                </div>
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