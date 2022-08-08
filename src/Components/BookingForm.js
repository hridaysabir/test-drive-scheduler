import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VehicleSelection from './VehicleSelection';
import TimeForm from './TimeForm';
import Review from './Review';
import ContactDetails from './ContactDetails';
import { LinearProgress } from '@mui/material';

const steps = ['Vehicle Selection', 'Time', 'Contact', 'Review Booking'];

const theme = createTheme();

export default function Checkout() {
  const [minimumTimeElapsed, setMinimumTimeElapsed] = React.useState(false);

  const [selectedVehicle, setVehicle] = React.useState('');
  const [selectedTime, setTime] = React.useState(new Date());
  const [selectedDetails, setDetails] = React.useState({  
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  );

  const [activeStep, setActiveStep] = React.useState(0);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <VehicleSelection selectedVehicle={selectedVehicle} setVehicle={setVehicle}/>;
      case 1:
        return <TimeForm selectedTime={selectedTime} setTime={setTime}/>;
      case 2:
        return <ContactDetails selectedDetails={selectedDetails} setDetails={setDetails}/>;
      case 3:
        return <Review selectedVehicle={selectedVehicle} selectedTime={selectedTime}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleNext = () => {
    // Loading skeleton
    if (activeStep === steps.length-1) {
      setTimeout(setMinimumTimeElapsed, 5000, true)
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
           Motive
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Schedule a test drive
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
             <React.Fragment>
              { // Show the skeleton if the timeout has not finished
              minimumTimeElapsed ? 
            <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  You're all set, {selectedDetails.firstName}!
                </Typography>
                <Typography variant="subtitle1">
                  Your test drive has been confirmed. You're up next to test drive the {selectedVehicle}, on {selectedTime.toDateString()} at {selectedTime.toLocaleString('en-US', { hour: '2-digit', hour12: true, minute: '2-digit' })}.
                  You will receive further instructions at {selectedDetails.email}.

                  {console.log({
                    selectedDetails,
                    selectedTime,
                    selectedVehicle
                  })}

                </Typography>
              </React.Fragment>
: <LinearProgress />
} 
</React.Fragment>
                ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Confirm Test Drive' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}