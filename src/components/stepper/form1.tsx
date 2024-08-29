/* eslint-disable @next/next/no-img-element */
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";

interface Form1Props {
  onContinue: () => void;
}
const Form1: React.FC<Form1Props> = ({ onContinue }) => {
  return (
    <div className="p-24 mx-20">
      <div className="flex flex-col items-start">
        <img
          src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
          className="w-16 lg:w-24"
          alt="Logo"
        />
        <h3 className="text-lg lg:text-xl max-w-xs mb-6 lg:max-w-sm text-blue-800 font-semibold">
          Employment Type
        </h3>
      </div>
      <div>
        <RadioGroup defaultValue="option-one">
          <div className="flex flex-col w-2/5 space-y-4">
            <div className="flex items-center justify-between space-x-2 border p-5 rounded-lg">
              <Label htmlFor="option-one" className="text-blue-800">
                Self-Employed Business
                <p className="text-gray-500">Run a business</p>
              </Label>
              <RadioGroupItem value="option-one" id="option-one" />
            </div>
            <div className="flex items-center justify-between space-x-2 border p-5 rounded-lg">
              <Label htmlFor="option-two" className="text-blue-800">
                Self-Employed Professional
                <p className="text-gray-500">Engage in a profession (Eg: Doctor, C.A., Lawyer, etc)</p>
              </Label>
              <RadioGroupItem value="option-two" id="option-two" />
            </div>
          </div>
        </RadioGroup>
      </div>
      <Button className="bg-blue-700 mt-16 w-2/5 hover:bg-blue-700" onClick={onContinue}>
        Continue
      </Button>
    </div>
  );
};
export default Form1;
