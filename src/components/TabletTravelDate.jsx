import React, {useState } from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

const TabletTravelDate = () => {
    const [selectedDate, setSelectedDate] = useState(null)
  return (
    <Stack
    spacing={4}
    sx={{
      width: "418px",
      background: "white",
      borderRadius: "5px",
      marginLeft: "12px"
    }}
  >
    <DatePicker
      label="Choose date"
      textField={(params) => <TextField {...params} />}
      value={selectedDate}
      onChange={(newValue) => {
        setSelectedDate(newValue);
      }}
    />
  </Stack>
  )
}

export default TabletTravelDate
