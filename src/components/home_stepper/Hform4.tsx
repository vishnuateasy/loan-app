import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import HomeLeft from "./home-left";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";


interface Hform4Props {
    onContinue: () => void;
    onBack: () => void;
  }
const Hform4: React.FC<Hform4Props> = ({ onContinue, onBack }) => {
    return(
        <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section */}
        <HomeLeft />
  
        {/* Right Section */}
        <div className="w-full lg:w-7/12 bg-white flex flex-col p-10 lg:p-20 lg:mx-20">
          <div className="flex flex-col items-start">
          <Button
                className="bg-gray-300 hover:bg-slate-300 mb-2 w-4 h-4 p-3"
                onClick={onBack}
              >
                <ArrowBackIosNewRoundedIcon />
              </Button>
            <h3 className="text-lg lg:text-xl max-w-xs mb-6 lg:max-w-sm text-blue font-semibold">
              Employment Type
            </h3>
          </div>
          <div>
            <RadioGroup defaultValue="option-one">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between space-x-2 border p-5 rounded-lg">
                  <Label htmlFor="option-one" className="text-blue">
                  Salaried
                    <p className="text-gray-500 mt-2">Receive fixed amount of income every month</p>
                  </Label>
                  <RadioGroupItem value="option-one" id="option-one" />
                </div>
                <div className="flex items-center justify-between space-x-2 border p-5 rounded-lg">
                  <Label htmlFor="option-two" className="text-blue">
                  Self-Employed Business
                    <p className="text-gray-500 mt-2">
                    Run a business
                    </p>
                  </Label>
                  <RadioGroupItem value="option-two" id="option-two" />
                </div>
                <div className="flex items-center justify-between space-x-2 border p-5 rounded-lg">
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
    )}
export default Hform4