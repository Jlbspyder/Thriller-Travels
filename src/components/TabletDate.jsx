import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";

const TabletDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <Stack
      spacing={4}
      sx={{
        width: "85%",
        background: "white",
        borderRadius: "5px",
        marginTop: "30px",
      }}
    >
      <MobileDatePicker
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

export default TabletDatePicker;
