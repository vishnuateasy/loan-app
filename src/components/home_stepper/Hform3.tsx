import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import HomeLeft from "./home-left";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

interface Hform3Props {
    onContinue: () => void;
    onBack: () => void;
  }
const Hform3: React.FC<Hform3Props> = ({ onContinue, onBack }) => {
    const radioOptions = [
        { value: "option-one", label: "Within 30 Days", color: "text-blue" },
        { value: "option-two", label: "31 - 90 Days", color: "text-blue" },
        { value: "option-three", label: "91 - 180 Days", color: "text-blue" },
        { value: "option-four", label: "180+ Days", color: "text-blue" },
      ];
      return (
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Section */}
          <HomeLeft />
    
          {/* Right Section */}
          <div className="w-full lg:w-7/12 bg-white flex flex-col p-8 lg:p-16 lg:mx-20">
            <div className="flex flex-col items-start mb-8">
            <Button
                className="bg-gray-300 hover:bg-slate-300 mb-2 w-8 h-8 p-3"
                onClick={onBack}
              >
                <ArrowBackIosNewRoundedIcon />
              </Button>
              <h3 className="text-lg lg:text-xl max-w-xs mb-6 lg:max-w-sm text-blue font-semibold">
              Where are you looking to
              buy your property?
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
export default Hform3