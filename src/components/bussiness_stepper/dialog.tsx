import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


interface diaProps {
    open: boolean;
  onClose: () => void;
  }
const VerifyMobileDialog: React.FC<diaProps> = ({ open, onClose }) =>{
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent>
        <Box textAlign="center">
          <Typography variant="h6" gutterBottom>
            Verify Mobile Number
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
            <WhatsAppIcon color="success" />
            <Typography variant="body2" color="textSecondary" ml={1}>
              OTP sent on <strong>WhatsApp Number +91-xxx6911</strong>
            </Typography>
            <Button size="small">✏️</Button>
          </Box>
          <Box display="flex" justifyContent="center" mb={2}>
            {[1, 2, 3, 4].map((_, index) => (
              <TextField
                key={index}
                variant="outlined"
                inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
                style={{ width: 40, margin: '0 5px' }}
              />
            ))}
          </Box>
          <Typography variant="caption" color="textSecondary">
            Resend OTP in 6 seconds
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center', flexDirection: 'column' }}>
        <Button variant="contained" color="primary" fullWidth>
          Verify & Login
        </Button>
        <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
          <WhatsAppIcon color="success" />
          <Typography variant="body2" color="textSecondary" ml={1}>
            Get regular Credit Report updates via WhatsApp
          </Typography>
          <Switch defaultChecked />
        </Box>
        <Typography variant="caption" color="textSecondary" mt={2} textAlign="center">
          By logging in, you agree to the following{' '}
          <Button size="small">Credit Report Terms of Use</Button>,{' '}
          <Button size="small">Terms of Use</Button> and{' '}
          <Button size="small">Privacy Policy</Button>
        </Typography>
      </DialogActions>
    </Dialog>
  );
}
export  default VerifyMobileDialog;