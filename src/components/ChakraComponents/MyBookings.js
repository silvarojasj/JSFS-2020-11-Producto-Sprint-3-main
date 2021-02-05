import React from 'react'
import { Cards } from './Cards'
import { MenuPage } from './MenuPage'
import { myBookings } from '../myBookings'

export const MyBookings = () => {
    return (
        <React.Fragment>
            <MenuPage />
            {myBookings.map(({ name, id,date, time, status }) => {
                return <Cards name={name} id={id} date={date} time={time} state={status} />
            })}
        </React.Fragment>
    );
} 