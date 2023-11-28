import React, { useState } from "react";
import { Stack, TextField} from "@mui/material";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Paper'
import { DatePicker } from "@mui/x-date-pickers";

const CheckOut = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
    <Box sx= {{ 
        flexGrow: 1,
        width: "180px",
        background: "#fff",
        borderRadius: "5px",
        marginTop: "20px",
        marginLeft: "15px",
        }}>
    <Grid container spacing={0}>
    <Grid item xs={12} md={12}>
        <Stack
          spacing={4}
          sx={{
            width: "100%",
            background: "#orange",
            borderRadius: "5px",
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
      </Grid>
    </Grid>
    </Box>
    <Box sx= {{ 
        flexGrow: 1,
        width: "180px",
        background: "#fff",
        borderRadius: "5px",
        marginTop: "20px",
        marginLeft: "15px",
        }}>
    <Grid container spacing={0}>
    <Grid item xs={12} md={12}>
        <Stack
          spacing={4}
          sx={{
            width: "100%",
            background: "#orange",
            borderRadius: "5px",
          }}
        >
          <DatePicker
            label="Check-out date"
            textField={(params) => <TextField {...params} />}
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue);
            }}
          />
        </Stack>
      </Grid>
    </Grid>
    </Box>
    </>
  );
};

export default CheckOut;
