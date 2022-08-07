import * as React from 'react';
import Typography from '@mui/material/Typography';
import VehicleList from './VehicleList';

export default function VehicleSelection({selectedVehicle, setVehicle}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select Vehicle
      </Typography>
      <VehicleList selectedVehicle={selectedVehicle} setVehicle={setVehicle}>
      </VehicleList>
    </React.Fragment>
  );
}