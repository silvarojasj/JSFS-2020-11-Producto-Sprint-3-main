import React from 'react';
import { MenuPage } from './ChakraComponents/MenuPage'
import {  useHistory } from "react-router-dom";
import { Cards } from './ChakraComponents/Cards'
import { listBookings } from './listBookings'
import { Buttons } from './ChakraComponents/Buttons';

export const BookingListPage = () => {

    const history = useHistory()

    const navigateToCreateBookings = () => {
        history.push("/create-booking");
    }

    const list =listBookings.map(({ name, date, time, status,id }) => {
        return <Cards key={id} name={name} date={date} time={time} state={status}/>
    })
    return (
        <React.Fragment>
            <MenuPage />
                {list}
            <Buttons name="Create Booking" onClick={navigateToCreateBookings} />
        </React.Fragment>
    );
}