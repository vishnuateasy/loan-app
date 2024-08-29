/* eslint-disable @next/next/no-img-element */
interface MainProps {
  newItem: string;
  setNewItem: (value: string) => void;
  addItem: () => void;
}
const Main: React.FC<MainProps> = ({ newItem, setNewItem, addItem }) => {
 
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className=" w-5/12 bg-blue-100 flex  flex-col justify-center p-12">
        <div className="relative mb-28 ml-12">
          <h2 className=" text-2xl font-bold text-gray-900 mb-6">
            Business Loan
          </h2>
          <p className=" text-sm text-gray-700 mb-8">
            Every business needs capital to grow and at Paisabazaar, we ensure
            you get the best of what you need. Whether you are launching or
            expanding your business, we pledge to give you the best business
            loan offers.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg"
            alt="Business Illustration"
            className="w-full h-auto max-w-xs"
          />
        </div>
      </div>

      <div className="w-7/12 bg-white flex flex-col justify-center items-center  lg:p-12 ">
        <div className="flex flex-col  items-center  ">
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
            className="w-16 mb-4 lg:w-24 "
            alt="Logo"
          />

          <h3 className="text-lg lg:text-xl max-w-xs mb-6 lg:max-w-sm text-blue-800 font-semibold">
            Unlock Best <span className="font-bold">Business Loan</span> Offers
            <br /> for meeting your Capital requirements
          </h3>
        </div>

        {/* Features List */}
        <ul className="space-y-2 text-gray-700 pl-4 mr-36 mb-10">
          <li>✓ Best Offers from 10+ Lenders</li>
          <li>✓ Hassle-Free Documentation</li>
          <li>✓ Quick Disbursal</li>
        </ul>

        {/* Input Section */}
        <div className="w-full max-w-xs lg:max-w-sm">
          <input
            className="w-full px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
            type="number"
            placeholder="Mobile Number"
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
          />
          <button
            className="mt-5 tracking-wide font-semibold bg-blue-500 text-white w-full py-3 lg:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
            onClick={addItem}
          >
            Proceed
          </button>
          <p className="text-xs lg:text-sm text-gray-500 mt-4 text-center">
            By clicking on proceed, you have read and agree to the{" "}
            <a href="#" className="text-blue-600 underline">
              Credit Report Terms of Use
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Use
            </a>
            , and{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
