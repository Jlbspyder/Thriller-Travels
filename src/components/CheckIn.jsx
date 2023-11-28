import React, {useState } from 'react'
import { Stack, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

const CheckIn = () => {
    const [selectedDate, setSelectedDate] = useState(null)
  return (
    <Stack spacing={4} sx={
      {
        width: '180px',
        background: '#fff',
        borderRadius: '5px',
        marginTop: '15px',
        marginLeft: '15px',
        }}>
      <DatePicker 
        label='Check-in date' 
        textField={(params) => <TextField {...params} />} 
        value={selectedDate}
        onChange={(newValue) => {
            setSelectedDate(newValue)
        }}
        />        
    </Stack>
  )
}

export default  CheckIn
