import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
            <h1 className="text-6xl font-extrabold tracking-widest text-aim-blue">
                BUILD AN{" "}
                <span className="font-extralight tracking-normal">eBOT</span>
            </h1>
            <section className="flex max-w-screen-xl flex-wrap justify-center justify-items-center gap-6">
                <Image
                    src="https://static.wixstatic.com/media/ce034b_cf74e1999e9d415abaa120e80efc3ca5~mv2.png"
                    width={1200}
                    height={1200}
                    alt="eBot selection"
                ></Image>
            </section>
            <h2 className="text-2xl font-extrabold text-aim-blue">
                Let's begin!
            </h2>
            {/* <iframe src="" frameborder="0">
                Video goes here
            </iframe> */}
            <p className="max-w-screen-lg text-center text-xl">
                My name is Emily and I will be your guide in the eBOT Build &
                Price experience. In each section of the quoting process, there
                will be a video where I provide assistance so you can build an
                eBOT perfect for your operation. If you prefer to watch the
                video all in one rather than in each section,{" "}
                <a href="#">click here</a>.
            </p>
            <Link href="/selectEbot">
                <button className="bg-aim-blue px-8 py-2.5 text-xl font-semibold tracking-widest text-white duration-150 ease-in-out hover:scale-105">
                    Get Started
                </button>
            </Link>
        </main>
    )
}
