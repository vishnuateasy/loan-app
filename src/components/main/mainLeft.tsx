/* eslint-disable @next/next/no-img-element */
const MainLeft = () => {
  return (
    <div className="w-full lg:w-5/12 bg-blue-100 flex flex-col justify-center p-6 lg:p-12">
      <div className="relative mb-16 lg:mb-28 ml-4 lg:ml-12">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
          Business Loan
        </h2>
        <p className="text-sm text-gray-700 mb-6 lg:mb-8">
          Every business needs capital to grow and at Paisabazaar, we ensure you
          get the best of what you need. Whether you are launching or expanding
          your business, we pledge to give you the best business loan offers.
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
  );
};
export default MainLeft;
