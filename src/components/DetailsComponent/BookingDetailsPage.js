import React from 'react'
import { useParams } from 'react-router-dom'
import {Cards} from '../ChakraComponents/Cards'
import {MenuPage} from '../ChakraComponents/MenuPage'
import {listBookings} from '../listBookings'
import { Error404 } from '../Error404'
import {Footer} from '../ChakraComponents/Footer'

export  const BookingDetailsPage = () => {
    let {idBookings}=useParams();
    const meet =
        {
            name:"",
            id:"",
            date:"",
            time:"",
            status:""
        }
    const validate = (listBookings,meet,{idBookings}) => {
        let i,isname=0;
        for( i in listBookings){
            if(listBookings[i].name=={idBookings}.idBookings)
            {
                meet.name=listBookings[i].name;
                meet.id=listBookings[i].id;
                meet.date=listBookings[i].date;
                meet.time=listBookings[i].time;
                meet.status=listBookings[i].status;
                isname+=1;
            }
        }
        const find=isname>0?true:false;
        console.log(find)
        return find 
    }
    const compare=validate(listBookings,meet,{idBookings})
    if(compare)
    {
        return(
        <React.Fragment>
            <MenuPage />
            <Cards key={meet.id} name={meet.name} date={meet.date} time={meet.time} state={meet.status}/>
            <Footer linkPage1="/bookings" linkPage2="/create-booking" />
        </React.Fragment> 
        );   
    }

    return (
        <React.Fragment>
            <Error404 />
        </React.Fragment> 
    );
}