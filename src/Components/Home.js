import { Button } from "./Button";
import { Navbar } from "./Navbar";

export function Home() {
    return (
        <>
            <div className="h-screen bg-[#022447]">
                <Navbar />
                <div className="h-full w-full">
                    <div className="relative h-screen">
                        <img src="./images/uniqueyacht.webp" className="h-full w-full object-cover" alt="Yacht Background" />
                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="absolute inset-x-0 bottom-44 flex flex-col justify-center items-center text-center text-white px-4">
                            <p className="text-2xl font-bold md:text-6xl">Discover the Ultimate Yacht Experience</p>
                            <p className="text-lg md:text-5xl mt-4">Book your dream yacht adventure today!</p>
                            <div className="lg:mt-10 mt-10">
                                <button className="relative px-6 py-2 text-[15px] text-white bg-transparent border-[0.25em] border-white hover:bg-white hover:text-[#C5A981]">
                                    Begin Your Sailing Adventure
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Icon Section */}
                    <div className="flex bg-[#2B3A42] items-center justify-center flex-wrap lg:flex-nowrap">
                        <div className="flex items-center">
                            <hr className="w-px h-24 lg:h-52 bg-[#515E64] mx-4 lg:mx-10 my-4 lg:my-10" />
                            <div className="flex flex-col items-center justify-center my-4">
                                <img src="./images/roman.svg" className="w-12 h-16 lg:w-24 lg:h-28 mb-4" />
                                <div className="text-sm lg:text-xl text-[#FFFFF3] hover:text-[#C5A981]">
                                    <p>Tell us what you need.</p>
                                    <p>We will do the rest.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <hr className="w-px h-24 lg:h-52 bg-[#515E64] mx-4 lg:mx-10 my-4 lg:my-10" />
                            <div className="flex flex-col items-center justify-center">
                                <img src="./images/map.svg" className="w-12 h-16 lg:w-24 lg:h-28 mb-4" />
                                <div className="text-sm lg:text-xl text-[#FFFFF3] hover:text-[#C5A981]">
                                    <p>Check our Early Season</p>
                                    <p>Mediterranean Deals.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <hr className="w-px h-24 lg:h-52 bg-[#515E64] mx-4 lg:mx-10 my-4 lg:my-10" />
                            <div className="flex flex-col items-center justify-center">
                                <img src="./images/compass1.svg" className="w-12 h-16 lg:w-24 lg:h-28 mb-4" />
                                <div className="text-sm lg:text-xl text-[#FFFFF3] hover:text-[#C5A981]">
                                    <p>New to Sailing?</p>
                                    <p>We've got you Covered.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <hr className="w-px h-24 lg:h-52 bg-[#515E64] mx-4 lg:mx-10 my-4 lg:my-10" />
                            <div className="flex flex-col items-center justify-center">
                                <img src="./images/wheel.svg" className="w-12 h-16 lg:w-24 lg:h-28 mb-4" />
                                <div className="text-sm lg:text-xl text-[#FFFFF3] hover:text-[#C5A981]">
                                    <p>Win a Sailing Holiday in</p>
                                    <p>Mediterranean.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Convinced Section */}
                    <div className="polka flex items-center justify-center py-3">
                        <div className="flex flex-col items-center text-center max-w-7xl p-8">
                            <p className="text-white font-semibold text-2xl lg:text-3xl mb-4">Already Convinced?</p>
                            <p className="text-white text-md lg:text-xl">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorperut commodo consequat.
                            </p>
                            <div className="lg:mt-8 mt-8">
                                <button className="relative px-6 py-2 text-[15px] font-bold text-white bg-transparent border-[0.25em] border-white hover:bg-white hover:text-[#C5A981]">
                                    Buy This Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Download our mobile booking app section */}
                    <div className="bg-white flex flex-col lg:flex-row lg:items-center">
                        <div className="relative overflow-hidden basis-full lg:basis-1/2 h-full">
                            <img className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                                src="./images/yacht5.jpg" alt="yacht" />
                        </div>
                        <div className="basis-full lg:basis-1/2">
                            <div className="bg-[#F4F4F4] p-4 mb-8">
                                <p className="text-[#9F789F] text-2xl lg:text-3xl font-semibold ml-4">Our Exclusive Deals</p>
                            </div>
                            <div className="flex flex-col p-4 gap-4 max-w-3xl mb-10">
                                <p className="text-[#444444] text-xl lg:text-3xl font-semibold ml-4 font-serif">Elan 1923 Impression</p>
                                <p className="text-[#583000] text-sm lg:text-md ml-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorperut commodo consequat.</p>
                            </div>
                            <div className="flex items-center justify-center mb-32">
                                <button className="relative px-6 py-2 text-[15px] font-bold text-black bg-[#C5A981] border-[0.25em] hover:bg-white hover:text-[#C5A981]">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Testimonial Section */}
                    <div className="flex flex-col bg-[#CECECE] items-center justify-center p-16 lg:p-24 gap-4">
                        <p className="text-xl lg:text-3xl text-black">WOW – This is the Best Theme I have ever seen.</p>
                        <p className="text-black text-md lg:text-xl max-w-2xl">“Excellent - you found the right boat in the right place at the right time, and managed to change the dates for our convenience - brilliant!”</p>
                        <p className="text-md lg:text-xl text-black">- Johnatan Davidson</p>
                    </div>

                    {/* Download App Section */}
                    <div className="bg-[#FFFFFF] flex flex-col items-center justify-center p-8 lg:p-12 gap-8 lg:gap-12">
                        <p className="text-black text-2xl lg:text-4xl text-center">Download our mobile booking app</p>
                        <p className="text-black text-md lg:text-xl max-w-7xl text-center">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>

                        <div className="flex flex-col lg:flex-row lg:gap-10 gap-6">
                            <div className="flex gap-4 items-center">
                                <div className="rounded-full border border-[#C5A981] w-8 h-8 lg:w-16 lg:h-16 flex items-center justify-center text-lg lg:text-xl">
                                    <p className="text-[#C5A981]">1</p>
                                </div>
                                <div>
                                    <p className="text-black font-semibold text-sm lg:text-lg">Find a yacht</p>
                                    <p className="text-black text-xs lg:text-base leading-normal max-w-[300px]">Lorem ipsum dolor sit consectetuer adipiscing elit, sed diam nonummy nibh amet.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="rounded-full border border-[#C5A981] w-8 h-8 lg:w-16 lg:h-16 flex items-center justify-center text-lg lg:text-xl">
                                    <p className="text-[#C5A981]">2</p>
                                </div>
                                <div>
                                    <p className="text-black font-semibold text-sm lg:text-lg">Book a yacht</p>
                                    <p className="text-black text-xs lg:text-base leading-normal max-w-[300px]">Lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="rounded-full border border-[#C5A981] w-8 h-8 lg:w-16 lg:h-16 flex items-center justify-center text-lg lg:text-xl">
                                    <p className="text-[#C5A981]">3</p>
                                </div>
                                <div>
                                    <p className="text-black font-semibold text-sm lg:text-lg">Sail the world</p>
                                    <p className="text-black text-xs lg:text-base leading-normal max-w-[300px]">Lorem ipsum dolor sit consectetuer adipiscing elit, sed diam nonummy.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}
