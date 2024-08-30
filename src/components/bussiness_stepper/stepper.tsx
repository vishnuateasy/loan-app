import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";
import Form4 from "./form4";
import Form5 from "./form5";

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <Form1 onContinue={handleNext} />;
      case 1:
        return <Form2 onContinue={handleNext} onBack={handleBack} />;
      case 2:
        return <Form3 onContinue={handleNext} onBack={handleBack} />;
      case 3:
        return <Form4 onContinue={handleNext} onBack={handleBack} />;
      case 4:
        return <Form5 onBack={handleBack} />;
      default:
        return <Typography>Unknown step</Typography>;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div>
        {renderForm()}
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        </Box>
      </div>
    </Box>
  );
}
