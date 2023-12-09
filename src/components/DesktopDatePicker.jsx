import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const DesktopDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Stack
      spacing={4}
      sx={{
        width: "100%",
        background: "white",
        borderRadius: "5px",
        marginLeft: "15px",
        marginTop: "20px",
      }}
    >
      <DatePicker
        label="Check-in date"
        textField={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />
    </Stack>
  );
};

export default DesktopDatePicker;
