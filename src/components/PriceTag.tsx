import { formatPrice } from "@/lib/format"

interface PriceTagProbs{
    price: number,
    className?: string,
}
export default function PriceTag({price, className}:PriceTagProbs){
    return <span className={`badge ${className}`}>{formatPrice(price)}</span>
}