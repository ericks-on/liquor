'use client'
import clsx from "clsx"
import { on } from "events"
import next from "next"
import Image from "next/image"
import { useState } from "react"
import { FaMoneyBill } from "react-icons/fa6"

interface productProps {
    product: {
        name: string,
        image: string[],
        price: number,
        status: string
    }
}


export default function ProductCard(
    {product}: productProps
) {
    const [currentImage, setCurrentImage] = useState(0)
    return (
        <div
            className="w-64 h-80 flex flex-col items-center justify-center rounded-lg shadow-lg p-4"
        >
            {/* images for the product */}
            <div
                className="w-full h-3/4 flex items-center justify-center relative"
            >
                {
                    product.image.map((image, index) => {
                        return (
                            <Image
                                className={clsx(
                                    "w-full h-full",
                                    { "hidden": index !== currentImage }
                                )}
                                alt="product image"
                                src={image}
                                width={500}
                                height={500}
                                key={index}
                            />
                        )
                        
                    })
                }
                {/* buttons to change image */}
                <div
                    className="absolute bottom-2 flex gap-2">
                    {
                        product.image.map((_, index) => {
                            return (
                                <button
                                    className={clsx(
                                        "w-4 h-4 rounded-full",
                                        { "bg-gray-400": index === 0, "bg-gray-200": index !== 0 }
                                    )}
                                    key={index}
                                    onClick={() => { setCurrentImage(index) }
                                    }
                                />
                            )
                        })
                    }
                </div>
                </div>
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