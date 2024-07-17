
import { Link } from 'react-router-dom';

const PremiumSection = () => {


    return (
        <div className="flex justify-between items-center bg-gray-700 text-white p-24 ">
            <div className="max-w-md">
                <h2 className="text-4xl mb-4">Get more with Premium</h2>
                <p className="text-xl mb-6 font-thin">Complete projects faster with batch file processing, convert scanned documents with OCR and e-sign your business agreements.</p>
                <Link to='/pricing' >
                <button  className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600">
                    Get Premium
                </button>
                </Link>
            </div>
            <div className="flex-shrink-0">
            </div>
        </div>
    );
}

export default PremiumSection;

