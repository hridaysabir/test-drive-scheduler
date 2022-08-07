import * as React from 'react';
import Grid from '@mui/material/Grid';
import CarRentalIcon from '@mui/icons-material/CarRental';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { Typography } from '@mui/material';

export default function Review({selectedVehicle, selectedTime}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Please confirm your reservation: 
      </Typography>
      <Grid container direction={'column'} justifyContent={'space-evenly'}>
        
        <Grid container xs={4} sm={12} direction={'row'} alignItems="center">
        <CarRentalIcon fontSize='large' />
        <Typography>{selectedVehicle}</Typography>
        </Grid>

        <Grid container xs={4} sm={12} direction={'row'} alignItems="center">
        <EventIcon fontSize='large' />
        <Typography>{selectedTime.toLocaleDateString()}</Typography>
        </Grid>

        <Grid container xs={4} sm={12} direction={'row'} alignItems="center">
        <ScheduleIcon fontSize='large' />
        <Typography>{selectedTime.toLocaleString('en-us', { hour: '2-digit', minute: '2-digit'}) }</Typography>
        </Grid>


      </Grid>
    </React.Fragment>
  );
}