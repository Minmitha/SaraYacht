import { Navbar } from "./Navbar";

export function Home() {
    return (
        <>
            <div className="h-screen bg-blue-500">
                <Navbar />
                <div>
                    <img src="./images/Rectangle.webp" className="h-screen w-full"/>
                </div>
            </div>
        </>
    )
}