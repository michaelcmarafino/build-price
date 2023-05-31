import { FC } from "react"
import Image from "next/image"
import { selectEbot } from "../../data/data"
import SelectEbot from "@/components/SelectEbot"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
            <h1 className="text-6xl font-extrabold tracking-widest text-aim-blue">
                BUILD AN{" "}
                <span className="font-extralight tracking-normal">eBOT</span>
            </h1>
            <p>
                Customize your own eBot, clamp, conveyor, fork, lift, or tugger
                by selecting the below models to get started.
            </p>
            <section className="flex">
                <Image
                    src="https://static.wixstatic.com/media/ce034b_cc0e862e24cf447da6b8821eb9adce30~mv2.png"
                    alt="eCarrier logo"
                    width={200}
                    height={200}
                />
                {/* video here */}
            </section>
            <section className="mx-auto flex max-w-screen-xl flex-wrap items-center gap-8">
                {selectEbot.map((ebot) => (
                    <SelectEbot
                        key={ebot.name}
                        name={ebot.name}
                        image={ebot.image}
                    />
                ))}
            </section>
        </main>
    )
}

export default page
