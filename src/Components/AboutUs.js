import '../App.css';
import { AboutDetails } from './AboutDetails';
import { Navbar } from './Navbar';

export function AboutUs() {
    return (
        <div className="h-full bg-[#108088]">
            <Navbar />
            <div className="container mx-auto w-full pt-24 px-4 lg:px-0">
                <div className="bg-[#108088] mb-16">
                    <div className="flex items-center justify-center">
                        <img src="./images/anchor.svg" alt="anchor" className="w-24 h-32  animate-bounce-custom" />
                    </div>
                    <div className="flex items-center justify-center mb-12 flex-col">
                        <div className="relative flex flex-col items-center justify-center text-center">
                            <span className="absolute inset-0 flex flex-col items-center justify-center font-extrabold">
                                {/* <span className="text-white mr-2 md:mr-3 font-serif text-xl">Yacht Booking</span> */}
                                <span className="text-white text-5xl uppercase">Sara Yacht</span>
                            </span>
                            <p className="text-[#98d1d4] text-5xl md:text-8xl font-extrabold font-serif">EXPLORE</p>
                        </div>
                    </div>


                </div>

                <AboutDetails />
                <div className="bg-white">
                    <div >
                        <img src="./images/uniqueyacht.webp" alt="" className="w-full h-[500px]" />
                    </div>
                </div>
            </div>
        </div>


    )
}