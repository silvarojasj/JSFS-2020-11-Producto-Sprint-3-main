import React from 'react'
import { Cards } from './ChakraComponents/Cards'
import { MenuPage } from './ChakraComponents/MenuPage'
import { mentors } from './mentors'

export const MentorList = () => {
    const list = mentors.map(({ name, id, status }) => {
        return <Cards key={id} name={name} state={status} />
    })
    return (
        <React.Fragment>
            <MenuPage />
            {list}
        </React.Fragment>
    );
}