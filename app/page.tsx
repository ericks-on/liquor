import Image from "next/image";
import Header from "./ui/Header";
import ProductCard from "./ui/ProductCard";
import { products } from "./lib/data";
import WaQr from "./ui/qr";

export default function Home() {
  return (
    <main
      className="w-screen h-screen pt-28 flex "
    >
      <Header />
      <div className="w-full h-auto hidden md:w-1/5 md:border-r-2 border-grey-300 md:h-full items-center p-2 md:flex flex-col gap-4">
        <WaQr />
        <p className="text-center ">To order Whatsapp 0700120294 or scan the QR code</p>
      </div>
      <div className="flex flex-col md:w-4/5 w-full h-full">
        <p className="text-center md:hidden">To order Whatsapp 0700120294 or click red button for QR code</p>
        <div
          className="w-full  h-full flex flex-col md:flex-row items-center justify-center flex-wrap gap-4 md:overflow-auto"
        >
          {
            products.map((prod) => {
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
