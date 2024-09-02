import { Button } from "../ui/button";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import PersonalLeft from "./personal-left";
import { Box, Typography, IconButton, Link, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
interface Pform4Props {
  onContinue: () => void;
  onBack: () => void;
}
const Pform4: React.FC<Pform4Props> = ({ onContinue, onBack }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <PersonalLeft />

      {/* Right Section */}
      <div className="w-full lg:w-7/12 bg-white flex flex-col p-8 lg:p-16 lg:mx-20">
        <div className="flex flex-col items-start mb-8">
          <Button
            className="bg-gray-300 hover:bg-slate-300 mb-2 w-4 h-4 p-3"
            onClick={onBack}
          >
            <ArrowBackIosNewRoundedIcon />
          </Button>
          <h3 className="text-lg lg:text-xl max-w-xs mb-6 lg:max-w-sm text-blue font-semibold">
            Tell us your Current Company
          </h3>
        </div>
        <div>
          <Box sx={{ borderBottom: 1, borderColor: "divider", pb: 2, mb: 4 }}>
            {/* Label */}
            <Typography variant="body2" color="textSecondary">
              Current Company
            </Typography>

            {/* Company Name Input with Edit Button */}
            <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
              <TextField variant="standard" fullWidth />
              <IconButton size="small" color="primary" sx={{ ml: 1 }}>
               Edit <EditIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* Help Text */}
            <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
              Type slowly to select your company
            </Typography>
          </Box>
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
export default Pform4;
