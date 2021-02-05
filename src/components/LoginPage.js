import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Inputs } from './ChakraComponents/Inputs';
import { Buttons } from './ChakraComponents/Buttons';
import { ImagePage } from './ChakraComponents/ImagePage'

export const LoginPage = () => {
    const history = useHistory()

    const navigateToBookings = () => {
        history.push("/bookings");
    }


    return (
        <React.Fragment>
            <ImagePage value="Mentor Booking" />
            <Inputs name="User" type="text" />
            <Inputs name="password" type="password" />
            <Buttons name="Login" onClick={navigateToBookings} />
            {/* <div>
                <p>
                <Link to="/bookings">Navigate using a link</Link>
                </p>
                <p>
                <button onClick={navigateToBookings}>Navigate using a button</button>
                </p>
            </div> */}
        </React.Fragment>
    );
}