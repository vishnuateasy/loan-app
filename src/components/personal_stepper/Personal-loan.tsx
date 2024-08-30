'use client'
import { useState } from "react";
import PersonalStepper from "./personal-stepper";
import PersonalLeft from "./personal-left";


const PersonalLoanMain = () => {
  const [showStepper, setShowStepper] = useState(false);

  const handleProceedClick = () => {
    setShowStepper(true);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Conditionally render components based on showStepper state */}
      {showStepper ? (
        <PersonalStepper />
      ) : (
        <>
          <PersonalLeft />
          <div className="w-full lg:w-7/12 bg-white flex flex-col  justify-center items-center lg:p-12">
            <div className="flex flex-col items-center">
              <h3 className="text-lg lg:text-xl max-w-xs mb-6 mr-16 lg:max-w-sm text-blue font-semibold">
                Unlock Best <span className="font-bold">Personal Loan</span> Offers
                <br /> from 30+ Lenders
              </h3>
            </div>

            {/* Features List */}
            <ul className="space-y-2 text-gray-700 pl-4 mr-24 lg:mr-32 mb-10">
              <li>✓ Hand-picked offers from 30+ lenders</li>
              <li>✓ Money in mins via Pre-Approved loans</li>
              <li>✓ Instant sanction and disbursal</li>
              <li>✓ Contact-less processes</li>
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

export default PersonalLoanMain;
