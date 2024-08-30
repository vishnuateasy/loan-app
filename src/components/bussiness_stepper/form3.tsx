/* eslint-disable @next/next/no-img-element */
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import MainLeft from "../main/mainLeft";

interface Form3Props {
  onContinue: () => void;
  onBack: () => void;
}
const Form3: React.FC<Form3Props> = ({ onContinue, onBack }) => {
  const radioOptions = [
    { value: "option-one", label: "Below  ₹5 Lacs", color: "text-blue" },
    { value: "option-two", label: "₹5 - ₹10 Lacs", color: "text-blue" },
    { value: "option-three", label: "₹10 - ₹25 Lacs", color: "text-blue" },
    { value: "option-four", label: "₹25 - ₹50 Lacs", color: "text-blue" },
    { value: "option-five", label: "₹50 - ₹75 Lacs", color: "text-blue" },
    { value: "option-six", label: "₹75 Lacs - ₹1 Cr", color: "text-blue" },
    { value: "option-seven", label: "Over ₹1 Cr", color: "text-blue" },
  ];
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <MainLeft />

      {/* Right Section */}
      <div className="w-full lg:w-7/12 bg-white flex flex-col p-8 lg:p-16 lg:mx-20">
        <div className="flex flex-col items-start">
          <Button
            className="bg-gray-300 hover:bg-slate-300 mb-2 w-8 h-8 p-3"
            onClick={onBack}
          >
            <ArrowBackIosNewRoundedIcon />
          </Button>
          <h3 className="text-lg lg:text-xl max-w-xs mb-6 lg:max-w-sm text-blue font-semibold">
            Gross Annual Turnover?
          </h3>
        </div>
        <div>
          <RadioGroup defaultValue="option-one">
            <div className="flex flex-col space-y-2">
              {radioOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center justify-between w-full lg:w-4/6 space-x-2 border p-3 rounded-lg"
                >
                  <Label htmlFor={option.value} className={option.color}>
                    {option.label}
                  </Label>
                  <RadioGroupItem value={option.value} id={option.value} />
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        <Button
          className="bg-blue-700 mt-10 lg:mt-16 w-full lg:w-3/5 hover:bg-blue-700"
          onClick={onContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
export default Form3;
