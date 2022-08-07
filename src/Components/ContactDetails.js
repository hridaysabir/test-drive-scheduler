import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { emailregex, phoneregex } from '../Utility/validation';

export default function ContactDetails({selectedDetails, setDetails}) {
  const [phoneErrorText, setPhoneErrorText] = React.useState('')
  const [emailErrorText, setEmailErrorText] = React.useState('')


function handleChange(event) {
  if (event.target.id === 'firstName') {
    setDetails(prevDetails => {
      return { 
        ...prevDetails, 
        firstName: event.target.value
      }})}
  else if (event.target.id === 'lastName') {
    setDetails(prevDetails => {
      return { 
        ...prevDetails, 
        lastName: event.target.value
      }})}
  else if (event.target.id === 'email') {
    event.target.value.match(emailregex) ? setEmailErrorText('') : setEmailErrorText('Please enter a valid email.')
    setDetails(prevDetails => {
      return { 
        ...prevDetails, 
        email: event.target.value
      }})}
  else if (event.target.id === 'phone') {
    event.target.value.match(phoneregex) ? setPhoneErrorText('') : setPhoneErrorText('Please enter a valid phone number.')
    setDetails(prevDetails => {
      return { 
        ...prevDetails, 
        phone: event.target.value
      }})}
  console.log(selectedDetails);
}

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter your contact details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleChange}
          />
        </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            error= {emailErrorText === '' ? false : true}
            onChange={handleChange}
            helperText={emailErrorText}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            autoComplete="tel-local"
            variant="standard"
            error= {phoneErrorText === '' ? false : true}
            helperText={phoneErrorText}
            onChange={handleChange}

          />
        </Grid>
        <Grid item xs={12}>
        </Grid>
    </React.Fragment>
  );
}