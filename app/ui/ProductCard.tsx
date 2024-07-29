import Image from "next/image"
import { FaMoneyBill } from "react-icons/fa6"

interface productProps {
    product: {
        name: string,
        image: string,
        price: number,
        status: string
    }
}

export default function ProductCard(
    {product}: productProps
) {
    return (
        <div
            className="w-64 h-80 flex flex-col items-center justify-center rounded-lg shadow-lg p-4"
        >
            <Image
                className="w-full h-3/4"
                alt="product image"
                src={product.image}
                width={500}
                height={500}
            />
            <p className="font-bold">{product.name}</p>
            {/* display not sealed if product is not sealed */}
            {
                product.status === 'not-sealed' && (
                    <div
                        className="bg-red-500 text-white rounded-full p-1"
                    >
                        Not Sealed
                    </div>
                )
            }
            {
                product.status === 'sealed' && (
                    <div
                        className="bg-green-500 text-white rounded-full p-1"
                    >
                        Sealed
                    </div>
                )
            }
            {/* display price */}
            <div
                className="flex gap-4 items-center justify-center"
            >
                <FaMoneyBill />
                <span>{ product.price}</span>
            </div>
        </div>
    )
}