import Image from "next/image"
import { FaMoneyBill } from "react-icons/fa6"

interface productProps {
    product: {
        name: string,
        image: string,
        price: number
    }
}

export default function ProductCard(
    {product}: productProps
) {
    return (
        <div
            className="w-64 h-80 flex flex-col items-center justify-center rounded"
        >
            <Image
                className="w-full h-3/4"
                alt="product image"
                src={product.image}
                width={500}
                height={500}
            />
            <p className="font-bold">{product.name}</p>
            <div
                className="flex gap-4 items-center justify-center"
            >
                <FaMoneyBill />
                <span>{ product.price}</span>
            </div>
        </div>
    )
}