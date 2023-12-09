import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";

const DatePicker2 = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <Stack
      spacing={4}
      sx={{
        width: "100%",
        background: "white",
        borderRadius: "5px",
        marginLeft: "15px",
        marginTop: "40px",
        marginBottom: "20px",
      }}
    >
      <MobileDatePicker
        label="Check-out date"
        textField={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />
    </Stack>
  );
};

export default DatePicker2;
