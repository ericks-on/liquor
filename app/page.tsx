'use client'

import Image from "next/image";
import Header from "./ui/Header";
import ProductCard from "./ui/ProductCard";
import { products } from "./lib/data";
import WaQr from "./ui/qr";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [isHiddenDivVisible, setIsHiddenDivVisible] = useState(false);

  return (
    <main
      className="w-screen h-screen pt-28 flex flex-col md:flex-row "
    >
      <Header
        isHiddenDivVisible={isHiddenDivVisible}
        setIsHiddenDivVisible={setIsHiddenDivVisible}
      />
      <div className={clsx(
        { "hidden md:flex": isHiddenDivVisible === false },
        "w-full h-auto md:w-1/5 md:border-r-2 border-grey-300 md:h-full items-center p-2 flex flex-col gap-4",
        "justify-center md:justify-start"
      )}>
        <WaQr />
        <p className="text-center hidden md:block">To order Whatsapp 0700120294 or scan the QR code</p>
        <h2>Cocktail and Bar management Events</h2>
      </div>
      {/*  for products */}
      <div className="flex flex-col md:w-4/5 w-full h-full md:overflow-auto">
        {/* instructions to order for mobile */}
        <p className="text-center md:hidden">
          To order Whatsapp
          <a
            className='font-bold bb-2 text-green-400'
            href="https://wa.me/+254700120294"
            target='_blank'
          >
            0700120294
          </a>
          or click red button for QR code
        </p>
        <h2 className="md:hidden text-center">Cocktail and Bar management Events</h2>
        {/* events top banner image */}
        <div
          className="w-full h-1/2 flex items-center justify-center"
        >
          <Image
            className="w-auto h-full  rounded-lg shadow-lg"
            src="/events.jpg"
            alt="banner image"
            width={500}
            height={500}
          />
        </div>
        {/* products container with sealed products */}
        <div
          className="w-full md:h-full flex flex-col md:flex-row items-center justify-center md:flex-wrap gap-4 p-4"
        >
          {
            products.map((prod) => {
              if (!prod) return null;
              return (
                <ProductCard
                  key={prod.name}
                  product={prod} />
              )
              
            })
          }
        </div>
      </div>
      
    </main>
  );
}
