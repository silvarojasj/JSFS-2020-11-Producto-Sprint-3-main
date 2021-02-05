import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { SelectPage } from './ChakraComponents/SelectPage';
import TimePicker from 'react-time-picker';
import { Buttons } from './ChakraComponents/Buttons';
import { MenuPage } from './ChakraComponents/MenuPage'
import { Box } from "@chakra-ui/react"
import { useHistory } from "react-router-dom";

export const CreateBookingPage = () => {
    const [date, onChangeDate] = useState(new Date());
    const [time, onChangeTime] = useState('00:00');
    
    const history = useHistory()

    const navigateToBookings = () => {
        history.push("/bookings");
    }

    return (
        <React.Fragment>
            <MenuPage />
            <SelectPage />
            <Box margin="1rem" spacing={3} align="center">
            <DatePicker onChange={onChangeDate}  value={date}
      />
            </Box>
            <Box margin="1rem" spacing={3} align="center">
                <TimePicker onChange={onChangeTime} value={time} />
            </Box>
            <Buttons name="Request" onClick={navigateToBookings} />
        </React.Fragment>
    );
}