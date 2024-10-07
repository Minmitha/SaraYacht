import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

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
                                <button className="relative px-6 py-2 text-lg font-bold text-white bg-transparent border-2 hover:bg-white hover:text-[#C5A981] mt-8">Begin Your Sailing Adventure</button>
                            </div>
                        </div>
                    </div>

                    {/* Icon Section */}
                    <div className="flex bg-[#2B3A42] items-center justify-center flex-wrap gap-6 p-4 lg:flex-nowrap lg:p-8">
                        {/* Block 1 */}
                        <div className="flex flex-col items-center justify-center my-4 lg:my-0">
                            <img src="./images/ship1.svg" className="w-12 h-16 lg:w-24 lg:h-28 mb-4" />
                            <div className="text-sm lg:text-xl text-[#FFFFF3] hover:text-[#C5A981] text-center">
                                <p>Tell us what you need.</p>
                                <p>We will do the rest.</p>
                            </div>
                        </div>

                        {/* Vertical divider for larger screens */}
                        <div className="hidden lg:block w-px h-24 lg:h-52 bg-[#515E64] mx-4 lg:mx-10 my-4 lg:my-10"></div>

                        {/* Block 2 */}
                        <div className="flex flex-col items-center justify-center my-4 lg:my-0">
                            <img src="./images/maps.svg" className="w-12 h-16 lg:w-24 lg:h-28 mb-4" />
                            <div className="text-sm lg:text-xl text-[#FFFFF3] hover:text-[#C5A981] text-center">
                                <p>Check our Early Season</p>
                                <p>Mediterranean Deals.</p>
                            </div>
                        </div>

                        {/* Vertical divider for larger screens */}
                        <div className="hidden lg:block w-px h-24 lg:h-52 bg-[#515E64] mx-4 lg:mx-10 my-4 lg:my-10"></div>

                        {/* Block 3 */}
                        <div className="flex flex-col items-center justify-center my-4 lg:my-0">
                            <img src="./images/compass.svg" className="w-12 h-16 lg:w-24 lg:h-28 mb-4" />
                            <div className="text-sm lg:text-xl text-[#FFFFF3] hover:text-[#C5A981] text-center">
                                <p>New to Sailing?</p>
                                <p>We've got you Covered.</p>
                            </div>
                        </div>

                        {/* Vertical divider for larger screens */}
                        <div className="hidden lg:block w-px h-24 lg:h-52 bg-[#515E64] mx-4 lg:mx-10 my-4 lg:my-10"></div>

                        {/* Block 4 */}
                        <div className="flex flex-col items-center justify-center my-4 lg:my-0">
                            <img src="./images/wheels.svg" className="w-12 h-16 lg:w-24 lg:h-28 mb-4" />
                            <div className="text-sm lg:text-xl text-[#FFFFF3] hover:text-[#C5A981] text-center">
                                <p>Win a Sailing Holiday in</p>
                                <p>Mediterranean.</p>
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
                                <button className="relative px-6 py-2 text-lg font-bold text-white bg-transparent border-2 border-white hover:bg-white hover:text-[#C5A981]">
                                    Buy This Now
                                </button>

                            </div>
                        </div>
                    </div>

                    {/* Download our mobile booking app section */}
                    <div className="bg-white flex flex-col lg:flex-row">
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
                        <div className="flex items-center justify-center mb-12">
                            <button className="relative px-6 py-2 text-lg font-bold text-white bg-[#C5A981] border-[0.25em] hover:bg-white hover:text-[#C5A981]">
                                Download Now
                            </button>
                        </div>
                    </div>



                    <div className="relative min-h-screen">
                        {/* Background image and content */}
                        <div className="relative">
                            {/* Background image */}
                            <div className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat h-[450px] backdrop-blur-md" style={{ backgroundImage: "url('./images/bground.jpg')" }}></div>

                            {/* Centering text within the image height */}
                            <div className="relative flex flex-col items-center justify-center h-[450px] text-white px-4 z-10">
                                <p className="text-2xl md:text-5xl max-w-5xl text-center font-bold">Find out more about our sailing destinations, marinas and suggested itineraries</p>
                                <p className="text-lg md:text-2xl mt-4 max-w-2xl text-center">Wild, exotic and remote; cosmopolitan and cutting-edge; untouched and tranquil, discover our incredible sailing destinations. See the world. Differently.</p>
                                <button className="relative px-6 py-2 text-lg text-white bg-transparent border-2 hover:bg-white hover:text-[#C5A981] font-bold mt-8">Find Out More</button>
                            </div>
                        </div>

                        {/* Content section with image divs */}
                        <div className="bg-white text-white flex items-center justify-center m-4 lg:m-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                                {/* Example of the image div */}
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <div className="rounded-full border border-[#C5A981] w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center text-lg lg:text-xl">
                                        <img src="./images/compass1.svg" className="w-8 h-8 lg:w-14 lg:h-14" />
                                    </div>
                                    <div>
                                        <p className="text-black font-semibold text-sm lg:text-lg text-center mb-2">Our sailing destinations</p>
                                        <p className="text-black text-xs lg:text-base leading-normal max-w-[300px] text-center">Lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-4">
                                    <div className="rounded-full border border-[#C5A981] w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center text-lg lg:text-xl">
                                        <img src="./images/map1.svg" className="w-8 h-8 lg:w-14 lg:h-14" />
                                    </div>
                                    <div>
                                        <p className="text-black font-semibold text-sm lg:text-lg text-center mb-2">Where to sail guide</p>
                                        <p className="text-black text-xs lg:text-base leading-normal max-w-[250px] text-center">Lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-4">
                                    <div className="rounded-full border border-[#C5A981] w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center text-lg lg:text-xl">
                                        <img src="./images/shipsail.svg" className="w-8 h-8 lg:w-14 lg:h-14" />
                                    </div>
                                    <div>
                                        <p className="text-black font-semibold text-sm lg:text-lg text-center mb-2">Our yachts and pricing</p>
                                        <p className="text-black text-xs lg:text-base leading-normal max-w-[250px] text-center">Lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-4">
                                    <div className="rounded-full border border-[#C5A981] w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center text-lg lg:text-xl">
                                        <img src="./images/student.svg" className="w-8 h-8 lg:w-14 lg:h-14" />
                                    </div>
                                    <div>
                                        <p className="text-black font-semibold text-sm lg:text-lg text-center mb-2">New to sailing?</p>
                                        <p className="text-black text-xs lg:text-base leading-normal max-w-[250px] text-center">Lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-4">
                                    <div className="rounded-full border border-[#C5A981] w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center text-lg lg:text-xl">
                                        <img src="./images/anchor1.svg" className="w-8 h-8 lg:w-14 lg:h-14" />
                                    </div>
                                    <div>
                                        <p className="text-black font-semibold text-sm lg:text-lg text-center mb-2">Sail with a skipper</p>
                                        <p className="text-black text-xs lg:text-base leading-normal max-w-[250px] text-center">Lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-4">
                                    <div className="rounded-full border border-[#C5A981] w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center text-lg lg:text-xl">
                                        <img src="./images/education.svg" className="w-8 h-8 lg:w-14 lg:h-14" />
                                    </div>
                                    <div>
                                        <p className="text-black font-semibold text-sm lg:text-lg text-center mb-2">Skipper training</p>
                                        <p className="text-black text-xs lg:text-base leading-normal max-w-[250px] text-center">Lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-4">
                                    <div className="rounded-full border border-[#C5A981] w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center text-lg lg:text-xl">
                                        <img src="./images/beach.svg" className="w-8 h-8 lg:w-14 lg:h-14" />
                                    </div>
                                    <div>
                                        <p className="text-black font-semibold text-sm lg:text-lg text-center mb-2">Beach club</p>
                                        <p className="text-black text-xs lg:text-base leading-normal max-w-[250px] text-center">Lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-4">
                                    <div className="rounded-full border border-[#C5A981] w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center text-lg lg:text-xl">
                                        <img src="./images/hotspot.svg" className="w-8 h-8 lg:w-14 lg:h-14" />
                                    </div>
                                    <div>
                                        <p className="text-black font-semibold text-sm lg:text-lg text-center mb-2">Flotilla sailing</p>
                                        <p className="text-black text-xs lg:text-base leading-normal max-w-[250px] text-center">Lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <Footer />
                    </div>


                </div>
            </div>
        </>
    );
}
