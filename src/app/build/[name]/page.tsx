import { FC } from "react"

interface pageProps {
    params: {
        name: string
    }
}

const page: FC<pageProps> = ({ params }) => {
    return <div>This where you build your {params.name}</div>
}

export default page
