import { FC } from "react"
import Image from "next/image"
import Link from "next/link"

interface SelectEbotProps {
    name: string
    image: string
}

const SelectEbot: FC<SelectEbotProps> = ({ name, image }) => {
    return (
        <div className="flex flex-col">
            <h2 className="mb-2 text-xl font-extrabold underline decoration-aim-blue decoration-4 underline-offset-4">
                {name}
            </h2>
            <Link href={`/build/${name}`}>
                <div className="flex max-h-64 items-center justify-center overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        width={400}
                        height={256}
                        className="h-full object-contain"
                    />
                </div>
            </Link>
        </div>
    )
}

export default SelectEbot
