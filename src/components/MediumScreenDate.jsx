import React, {useState } from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

const MediumScreenTravelDate = () => {
    const [selectedDate, setSelectedDate] = useState(null)
  return (
    <Stack
    spacing={4}
    sx={{
      width: "455px",
      background: "white",
      borderRadius: "5px",
      marginRight: "5px",
    }}
  >
    <DatePicker
      label="Check-in date - Check-out date"
      textField={(params) => <TextField {...params} />}
      value={selectedDate}
      onChange={(newValue) => {
        setSelectedDate(newValue);
      }}
    />
  </Stack>
  )
}

export default MediumScreenTravelDate
