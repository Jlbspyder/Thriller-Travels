import React, {useState } from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

const ProDate = () => {
    const [selectedDate, setSelectedDate] = useState(null)
  return (
    <Stack
    spacing={4}
    sx={{
      width: "260px",
      background: "white",
      borderRadius: "5px",
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

export default ProDate
