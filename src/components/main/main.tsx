import MainLeft from "./mainLeft";

/* eslint-disable @next/next/no-img-element */
interface MainProps {
  newItem: string;
  setNewItem: (value: string) => void;
  addItem: () => void;
}
const Main: React.FC<MainProps> = ({ newItem, setNewItem, addItem }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <MainLeft />
      <div className="w-full lg:w-7/12 bg-white flex my-5 flex-col justify-center items-center lg:p-12">
        <div className="flex flex-col items-center">
          <h3 className="text-lg lg:text-xl max-w-xs mb-6 lg:max-w-sm text-blue font-semibold">
            Unlock Best <span className="font-bold">Business Loan</span> Offers
            <br /> for meeting your Capital requirements
          </h3>
        </div>

        {/* Features List */}
        <ul className="space-y-2 text-gray-700 pl-4 mr-28 lg:mr-32 mb-10">
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
