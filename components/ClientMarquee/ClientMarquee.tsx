import Image from "next/image";
import pkflogo from '../../public/logos/PKFLogoMonoWhite.png'


export default function ClientMarquee() {

    return (
        <section className="bg-white dark:bg-gray-900 p-4 py-12">
            <div className="flex flex-row flex-nowrap justify-center">
                <h3 className="md:text-5xl xl:text-2xl p-10">Trusted by clients including</h3>
            </div>
            <div className="flex flex-row flex-nowrap justify-center space-x-12">
                <Image src={pkflogo} alt={"PKF Logo"} className="w-1/12"/>
                <Image src={pkflogo} alt={"PKF Logo"} className="w-1/12"/>
                <Image src={pkflogo} alt={"PKF Logo"} className="w-1/12"/>
                <Image src={pkflogo} alt={"PKF Logo"} className="w-1/12"/>
                <Image src={pkflogo} alt={"PKF Logo"} className="w-1/12"/>
            </div>
        </section>
    )
}