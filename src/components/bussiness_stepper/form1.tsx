/* eslint-disable @next/next/no-img-element */
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import MainLeft from "../main/mainLeft";

interface Form1Props {
  onContinue: () => void;
}
const Form1: React.FC<Form1Props> = ({ onContinue }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section */}
        <MainLeft />

        {/* Right Section */}
        <div className="w-full lg:w-7/12 bg-white flex flex-col p-10 lg:p-20 lg:mx-20">
          <div className="flex flex-col items-start">
            <h3 className="text-lg lg:text-xl max-w-xs mb-6 lg:max-w-sm text-blue font-semibold">
              Employment Type
            </h3>
          </div>
          <div>
            <RadioGroup defaultValue="option-one">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between space-x-2 border p-5 rounded-lg">
                  <Label htmlFor="option-one" className="text-blue">
                    Self-Employed Business
                    <p className="text-gray-500 mt-2">Run a business</p>
                  </Label>
                  <RadioGroupItem value="option-one" id="option-one" />
                </div>
                <div className="flex items-center justify-between space-x-2 border p-4 lg:p-5 rounded-lg">
                  <Label htmlFor="option-two" className="text-blue">
                    Self-Employed Professional
                    <p className="text-gray-500 mt-2">
                      Engage in a profession (Eg: Doctor, C.A., Lawyer, etc)
                    </p>
                  </Label>
                  <RadioGroupItem value="option-two" id="option-two" />
                </div>
              </div>
            </RadioGroup>
          </div>
          <Button
            className="bg-blue-700 mt-10 hover:bg-blue-700"
            onClick={onContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};
export default Form1;
