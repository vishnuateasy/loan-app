import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Pform1 from "./Pform1";
import Pform2 from "./Pform2";
import Pform3 from "./Pform3";
import Pform4 from "./Pform4";
import Pform5 from "./Pform5";

export default function PersonalStepper() {
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
        return <Pform1 onContinue={handleNext} />;
      case 1:
        return <Pform2 onContinue={handleNext} onBack={handleBack} />;
      case 2:
        return <Pform3 onContinue={handleNext} onBack={handleBack} />;
      case 3:
        return <Pform4 onContinue={handleNext} onBack={handleBack} />;
      case 4:
        return <Pform5 onBack={handleBack} />;

      default:
        return <Typography>Unknown step</Typography>;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div>
        {renderForm()}
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}></Box>
      </div>
    </Box>
  );
}
