export function Footer() {
    return (
        <div className="bg-[#253238] w-full mt-16">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-20 p-8 sm:p-16">
                {/* About Us Section */}
                <div className="flex flex-col text-white space-y-2">
                    <p className="font-semibold">About us</p>
                    <p>Sailor theme ltd.</p>
                    <p>1211 Pensilvania Ave, Sacramento, CA</p>
                    <p>1-555-555-555</p>
                    <p>sailor@sailortheme.com</p>
                </div>

                {/* Why Book With Us Section */}
                <div className="flex flex-col text-white space-y-2">
                    <p className="font-semibold">Why book with us?</p>
                    <ul className="space-y-1">
                        {["Secure Booking", "Best Price Guarantee", "Passionate Service", "Exclusive Knowledge", "Benefits for Partners"].map((item) => (
                            <li className="flex items-center" key={item}>
                                <svg
                                    className="w-4 h-4 text-[#C5A981] mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Need Help Section */}
                <div className="flex flex-col text-white space-y-2">
                    <p className="font-semibold">Need help?</p>
                    <ul className="space-y-1">
                        {["Faq", "How do I make a reservation?", "Payment Options", "Privacy Policy", "Terms and Conditions"].map((item) => (
                            <li className="flex items-center" key={item}>
                                <span className="w-2 h-2 rounded-full bg-[#C5A981] mr-2"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div className="flex flex-col text-white space-y-4">
                    <p className="font-semibold">Follow us</p>
                    <p className="max-w-sm">
                        Lorem ipsum dolor sit amet, sectetuer adipiscing elit, sed diam nonummy dolore magna aliquam erat volutpat.
                    </p>
                    <div className="flex space-x-4">
                        <img src="./images/assets/facebook.svg" alt="Facebook" className="w-10 h-10" />
                        <img src="./images/assets/twitter.svg" alt="Twitter" className="w-10 h-10" />
                        <img src="./images/assets/instagram.svg" alt="Instagram" className="w-10 h-10" />
                        <img src="./images/assets/youtube.svg" alt="LinkedIn" className="w-10 h-10" />
                    </div>
                </div>
            </div>
        </div>

    )
}