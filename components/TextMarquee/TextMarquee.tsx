import Image from "next/image";
import pkflogo from '../../public/logos/PKFLogoMonoWhite.png'


export default function TextMarquee() {

    return (
        <section className="bg-white dark:bg-purple-900">
            <div className="flex flex-row flex-nowrap justify-center">
                <h2 className="md:text-5xl xl:text-6xl p-20 h-15 whitespace-nowrap"
                    style={{width: "4000px"}}>
                    Automated. Simple. <span className="font-serif font-extralight">Effective </span>
                    Automated. Simple. <span className="font-serif font-extralight">Effective </span>
                    Automated. Simple. <span className="font-serif font-extralight">Effective </span>
                    Automated. Simple. <span className="font-serif font-extralight">Effective </span>
                    Automated. Simple. <span className="font-serif font-extralight">Effective </span>
                </h2>
            </div>
        </section>
    )
}