/* eslint-disable @next/next/no-img-element */
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

interface Form4Props {
    onContinue: () => void;
    onBack: () => void;
  }
const Form4: React.FC<Form4Props> = ({ onContinue, onBack }) => {
  const radioOptions = [
    { value: 'option-one', label: 'Jaipur', color: 'text-blue-800' },
    { value: 'option-two', label: 'Mumbai', color: 'text-blue-800' },
    { value: 'option-three', label: 'Pune', color: 'text-blue-800' },
    { value: 'option-four', label: 'Chennai', color: 'text-blue-800' },
    { value: 'option-five', label: 'Bengaluru', color: 'text-blue-800' },
    { value: 'option-six', label: 'Kolkota', color: 'text-blue-800' },
    { value: 'option-seven', label: 'Kota', color: 'text-blue-800' },
    { value: 'option-eight', label: 'Delhi', color: 'text-blue-800' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-5/12 bg-blue-100 flex flex-col justify-center p-12">
        <div className="relative mb-28 ml-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Business Loan
          </h2>
          <p className="text-sm text-gray-700 mb-8">
            Every business needs capital to grow and at Paisabazaar, we ensure
            you get the best of what you need. Whether you are launching or
            expanding your business, we pledge to give you the best business
            loan offers.
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

      <div className="w-7/12 bg-white flex flex-col p-16 mx-20">
        <div className="flex flex-col items-start mb-8">
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
            className="w-16 lg:w-24"
            alt="Logo"
          />
            <Button 
            className="bg-gray-300 hover:bg-slate-300 w-8"
            onClick={onBack}
          >
            <ArrowBackIosNewRoundedIcon/>
          </Button>
          <h3 className="text-lg lg:text-xl max-w-xs mb-6 lg:max-w-sm text-blue-800 font-semibold">
            Current Business City
          </h3>
         
        </div>
        <div>
          <RadioGroup defaultValue="option-one">
            <div className="grid grid-cols-2 gap-4">
              {radioOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center justify-between space-x-2 border p-4 rounded-lg"
                >
                  <Label
                    htmlFor={option.value}
                    className={option.color}
                  >
                    {option.label}
                  </Label>
                  <RadioGroupItem value={option.value} id={option.value} />
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        <Button className="bg-blue-700 mt-16 w-3/5 hover:bg-blue-700" onClick={onContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Form4;
