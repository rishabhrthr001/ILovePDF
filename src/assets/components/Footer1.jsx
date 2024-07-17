const Footer1 = () => {
    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between p-3">
                    <div>
                        <h4 className="text-red-500 font-semibold mb-2">ILOVEPDF</h4>
                        <ul>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">Home</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">Features</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">Pricing</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">Tools</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-red-500 font-semibold mb-2">PRODUCT</h4>
                        <ul>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">iLovePDF Desktop</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">iLovePDF Mobile</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">Developers</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">WordPress Plugin</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">iloveimg.com</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-red-500 font-semibold mb-2">SOLUTIONS</h4>
                        <ul>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">Business</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">Education</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-red-500 font-semibold mb-2">COMPANY</h4>
                        <ul>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">Our Story</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">Blog</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">Press</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">Legal & Privacy</li>
                            <li className="mb-1 hover:text-red-500 font-extralight cursor-pointer">Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end pr-3 mt-8">
                    <img src="/512x512.png" alt="Google Play Store" className="h-12 mr-4"/>
                    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-12"/>
                </div>

            </div> <hr className="m-4"/>
        </footer>
    );
}

export default Footer1;
