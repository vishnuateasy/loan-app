/* eslint-disable @next/next/no-img-element */
const HomeLeft = () => {
  return (
    <div className="w-full lg:w-5/12 bg-blue-100 flex flex-col justify-center p-6 lg:p-12">
      <div className="relative mb-16 lg:mb-28 ml-4 lg:ml-12">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
          Home Loan
        </h2>
        <p className="text-sm text-gray-700 mb-6 lg:mb-8">
          Owning a house and calling it your home is a dream many of us carry in
          our hearts. Paisabazaar helps you achieve that dream by offering the
          best deal.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="https://www.paisabazaar.com/home-loans/_next/static/media/hlMainImg.4f0d448c.svg"
          alt="Business Illustration"
          className="w-full  h-auto max-w-xs"
        />
      </div>
    </div>
  );
};
export default HomeLeft;
