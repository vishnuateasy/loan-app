/* eslint-disable @next/next/no-img-element */
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import MainLeft from "../main/mainLeft";
interface Form2Props {
  onContinue: () => void;
  onBack: () => void;
}
const Form2: React.FC<Form2Props> = ({ onContinue, onBack }) => {
  const radioOptions = [
    { value: "option-one", label: "Below ₹2 Lacs" },
    { value: "option-two", label: "₹2 - ₹5 Lacs" },
    { value: "option-three", label: "₹5 - ₹10 Lacs" },
    { value: "option-four", label: "₹10 - ₹20 Lacs" },
    { value: "option-five", label: "Above ₹20 Lacs" },
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
            Desired Loan Amount
          </h3>
        </div>
        <div>
          <RadioGroup defaultValue="option-one">
            <div className="flex flex-col space-y-4">
              {radioOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center justify-between w-full lg:w-3/5 space-x-2 border p-4 rounded-lg"
                >
                  <Label htmlFor={option.value} className="text-blue">
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
export default Form2;
