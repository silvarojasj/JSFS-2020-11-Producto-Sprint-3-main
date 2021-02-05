import React from 'react'
import { Cards } from './ChakraComponents/Cards'
import { MenuPage } from './ChakraComponents/MenuPage'
import { mentors } from './mentors'

export const MentorList = () => {
    return (
        <React.Fragment>
            <MenuPage />
            {mentors.map(({ name, status,id }) => {
                return <Cards name={name} id={id} state={status} />
            })}
        </React.Fragment>
    );
}