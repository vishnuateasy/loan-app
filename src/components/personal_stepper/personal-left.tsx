/* eslint-disable @next/next/no-img-element */
const PersonalLeft = () => {
    return (
      <div className="w-full lg:w-5/12 bg-blue-100 flex flex-col justify-center p-6 lg:p-7">
        <div className="relative  ml-4 lg:ml-24">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
          Personal Loan
          </h2>
          <ul className="space-y-2 text-indigo-500 pl-4 mr-28 lg:mr-32 mb-10">
          <li>✓ Best Offers from 10+ Lenders</li>
          <li>✓ Hassle-Free Documentation</li>
          <li>✓ Quick Disbursal</li>
        </ul>
        </div>
        <div className="flex  justify-center items-center">
          <img
            src="https://www.paisabazaar.com/personal-loans/_next/static/media/plMainImg.3614c8f4.svg"
            alt="Business Illustration"
            className="w-full h-auto max-w-xs"
          />
        </div>
      </div>
    );
  };
  export default PersonalLeft;
  