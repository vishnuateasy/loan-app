'use client'
import { useState } from "react";
import HomeLeft from "./home-left";
import HomeStepper from "./home-stepper";

const HomeLoanMain = () => {
  const [showStepper, setShowStepper] = useState(false);

  const handleProceedClick = () => {
    setShowStepper(true);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Conditionally render components based on showStepper state */}
      {showStepper ? (
        <HomeStepper />
      ) : (
        <>
          <HomeLeft />
          <div className="w-full lg:w-7/12 bg-white flex flex-col justify-center items-center lg:p-12">
            <div className="flex flex-col items-center">
              <h3 className="text-lg lg:text-xl max-w-xs mb-6 mr-16 lg:max-w-sm text-blue font-semibold">
                Unlock Best <span className="font-bold">Home Loan</span> Offers
                <br /> from 20+ Lenders
              </h3>
            </div>

            {/* Features List */}
            <ul className="space-y-2 text-gray-700 pl-4 lg:mr-36 mb-10">
              <li>✓ Compare Offers from Top Banks</li>
              <li>✓ Best Interest Rate</li>
              <li>✓ Loan Tenure up to 30 Years</li>
            </ul>

            {/* Input Section */}
            <div className="w-full max-w-xs lg:max-w-sm">
              <input
                className="w-full px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm lg:text-base focus:outline-none focus:border-gray-400 focus:bg-white"
                type="number"
                placeholder="Mobile Number"
              />
              <button
                className="mt-5 tracking-wide font-semibold bg-blue-500 text-white w-full py-3 lg:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
                onClick={handleProceedClick}
              >
                Proceed
              </button>
              <p className="text-xs lg:text-sm text-gray-500 mt-4 text-center">
                By clicking on proceed, you have read and agree to the{" "}
                <a href="#" className="text-blue underline">
                  Credit Report Terms of Use
                </a>
                ,{" "}
                <a href="#" className="text-blue underline">
                  Terms of Use
                </a>
                , and{" "}
                <a href="#" className="text-blue underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomeLoanMain;
