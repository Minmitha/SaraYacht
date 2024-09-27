import { Button } from "./Button";
import { Navbar } from "./Navbar";

export function Home() {
    return (
        <>
            <div className="h-screen bg-[#022447]">
                <Navbar />
                <div className="h-full w-full">
                    <div className="relative h-screen">
                        <img src="./images/Rectangle.webp" className="h-full w-full object-cover" alt="Yacht Background" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                            <p className="text-4xl font-bold md:text-6xl">Discover the Ultimate Yacht Experience</p>
                            <p className="text-lg md:text-5xl mt-4">Book your dream yacht adventure today!</p>
                            <p className="text-lg md:text-5xl mt-2">Luxury, Comfort, and Unmatched Sailing</p>
                            <div className="mt-6"> 
                                <Button /> 
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}