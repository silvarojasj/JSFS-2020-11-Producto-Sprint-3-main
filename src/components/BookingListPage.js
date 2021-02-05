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
    return (
        <React.Fragment>
            <MenuPage />
            {listBookings.map(({ name, date, time, status,id }) => {
                return <Cards name={name} id={id} date={date} time={time} state={status}/>
            })}
            <Buttons name="Create Booking" onClick={navigateToCreateBookings} />
        </React.Fragment>
    );
}