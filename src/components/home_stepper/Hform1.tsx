import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import HomeLeft from "./home-left";


interface Hform1Props {
    onContinue: () => void;
  }
const Hform1: React.FC<Hform1Props> = ({ onContinue }) => {
    const radioOptions = [
        { value: "option-one", label: "Upto ₹15 Lacs", color: "text-blue" },
        { value: "option-two", label: "₹15 - ₹20 Lacs", color: "text-blue" },
        { value: "option-three", label: "₹20 - ₹30 Lacs", color: "text-blue" },
        { value: "option-four", label: "₹30 - ₹50 Lacs", color: "text-blue" },
        { value: "option-five", label: "₹50 - ₹75 Lacs", color: "text-blue" },
        { value: "option-six", label: "₹75 Lacs +", color: "text-blue" },
      ];
    return(
<div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <HomeLeft />

      {/* Right Section */}
      <div className="w-full lg:w-7/12 bg-white flex flex-col p-8 lg:p-16 lg:mx-20">
        <div className="flex flex-col items-start mb-8">
          <h3 className="text-lg lg:text-xl max-w-xs mb-6 lg:max-w-sm text-blue font-semibold">
          Select your desired
          Home Loan Amount
          </h3>
        </div>
        <div>
          <RadioGroup defaultValue="option-one">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {radioOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center justify-between space-x-2 border p-4 rounded-lg"
                >
                  <Label htmlFor={option.value} className={option.color}>
                    {option.label}
                  </Label>
                  <RadioGroupItem value={option.value} id={option.value} />
                </div>
              ))}
            </div>
          </RadioGroup>
        <p className=" text-sm mt-5"> I authorize Paisabazaar to share details of home loan enquiry with HDFC, HFFC & IndiaBulls</p>
        </div>
        <Button
          className="bg-blue-700 mt-10 lg:mt-16 w-full lg:w-3/5 hover:bg-blue-700"
          onClick={onContinue}
        >
          Continue
        </Button>
      </div>
    </div>
    )}
export default Hform1