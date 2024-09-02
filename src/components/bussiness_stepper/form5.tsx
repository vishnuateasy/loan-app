"use client";
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import VerifyMobileDialog from "./dialog";
import { useState } from "react";
import MainLeft from "../main/mainLeft";

interface Form5Props {
  onBack: () => void;
}

const Form5: React.FC<Form5Props> = ({ onBack }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const radioOptions = [
    { value: "option-one", label: "Under 1 years" },
    { value: "option-two", label: "1 - 2 years" },
    { value: "option-three", label: "2 - 3 years" },
    { value: "option-four", label: "3 - 5 years" },
    { value: "option-five", label: "Over 5 years" },
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
            Years in Current Business
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
          onClick={handleClickOpen}
        >
          Continue
        </Button>
        <VerifyMobileDialog open={open} onClose={handleClose} />
      </div>
    </div>
  );
};
export default Form5;
