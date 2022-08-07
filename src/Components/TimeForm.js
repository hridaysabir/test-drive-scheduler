import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";


export default function TimeForm({selectedTime, setTime}) {
  var today = new Date();
  var numberOfDaysToAdd = 14;
  var result = today.setDate(today.getDate() + numberOfDaysToAdd);

  const handleDateChange = (date) => {
    setTime(date)
    console.log(date);
  }
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Select Date and Time
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
        <DatePicker
      selected={selectedTime}
      onChange={date => handleDateChange(date) }
      minDate={new Date()}
      minTime={setHours(setMinutes(selectedTime, 0), 9)}
      maxTime={setHours(setMinutes(selectedTime, 0), 17)}
      maxDate={new Date(result)}
      showTimeSelect />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
           Date selected: {selectedTime.toDateString()}
           </Typography>
           <Typography>
           Time selected: {selectedTime.toLocaleString('en-US', { hour: '2-digit', hour12: true, minute: '2-digit' })}
           </Typography>
          </Grid>
      </Grid>
    </React.Fragment>
  );
}