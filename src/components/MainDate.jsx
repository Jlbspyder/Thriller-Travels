import React, {useState } from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

const MainDate = () => {
    const [selectedDate, setSelectedDate] = useState(null)
  return (
    <Stack
    spacing={4}
    sx={{
      width: "100%",
      background: "white",
      marginTop: "50px",
      borderRadius: "none"
    }}
  >
    <DatePicker
      textField={(params) => <TextField {...params} />}
      value={selectedDate}
      onChange={(newValue) => {
        setSelectedDate(newValue);
      }}
    />
  </Stack>
  )
}

export default MainDate

