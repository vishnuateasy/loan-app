import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Hform1 from "./Hform1";
import Hform2 from "./Hform2";
import Hform3 from "./Hform3";
import Hform4 from "./Hform4";
import Hform5 from "./Hform5";
import Hform6 from "./Hform6";


export default function HomeStepper() {
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
        return <Hform1 onContinue={handleNext} />;
      case 1:
        return <Hform2 onContinue={handleNext} onBack={handleBack} />;
      case 2:
        return <Hform3 onContinue={handleNext} onBack={handleBack} />;
      case 3:
        return <Hform4 onContinue={handleNext} onBack={handleBack} />;
      case 4:
        return <Hform5 onContinue={handleNext} onBack={handleBack} />;
      case 5:
        return <Hform6 onBack={handleBack} />;
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
