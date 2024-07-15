import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

export default function Header() {
    return (
        <div
            className="w-full h-28  fixed top-0 flex items-center justify-center"
        >
            <Image 
                alt='logo'
                src='/deals.jpeg'
                width={80}
                height={80} />
            <div className="bg-red-600 rounded flex gap-4 items-center justify-center md:hidden absolute right-0 mr-4 cursor-pointer">
                <FaWhatsapp className="fill-green-700 w-10 h-10"/>
            </div>
        </div>
    )
}