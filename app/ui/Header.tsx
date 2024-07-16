import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

interface HeaderProps {
    isHiddenDivVisible: boolean;
    setIsHiddenDivVisible: (visible:boolean) => void;
}

export default function Header(
    { isHiddenDivVisible, setIsHiddenDivVisible }:HeaderProps
) {
    

    const toggleHiddenDiv = () => {
        setIsHiddenDivVisible(!isHiddenDivVisible);
    };

    return (
        <div
            className="w-full h-28  fixed top-0 flex items-center justify-center"
        >
            <Image 
                alt='logo'
                src='/deals.jpeg'
                width={80}
                height={80} />
            <Link
                href='/'
                onClick={toggleHiddenDiv}
                className="bg-red-600 rounded flex gap-4 items-center justify-center md:hidden absolute right-0 mr-4 cursor-pointer">
                <FaWhatsapp className="fill-green-700 w-10 h-10"/>
            </Link>
        </div>
    )
}