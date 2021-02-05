import React from 'react'
import { Cards } from './Cards'
import { MenuPage } from './MenuPage'
import { myBookings } from '../myBookings'

export const MyBookings = () => {
    const list = myBookings.map(({ name, id, date, time, status }) => {
        return <Cards key={id} name={name} date={date} time={time} state={status} />
    })
    return (
        <React.Fragment>
            <MenuPage />
            {list}
        </React.Fragment>
    );
} 