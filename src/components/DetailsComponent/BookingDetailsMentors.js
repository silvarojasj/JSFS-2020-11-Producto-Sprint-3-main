import React from 'react'
import { useParams } from 'react-router-dom'
import { Cards } from '../ChakraComponents/Cards'
import { MenuPage } from '../ChakraComponents/MenuPage'
import { mentors } from '../mentors'
import { Error404 } from '../Error404'

export const BookingDetailsMentor = () =>{
   let { idMentors } = useParams();
   var meet =
   {
       name: "",
       id:"",
       status: ""
   }
   const validate = (mentors, meet, { idMentors }) => {
       let i, isname = 0;
       for (i in mentors) {
           if (mentors[i].name == { idMentors }.idMentors) {
               meet.name = mentors[i].name;
               meet.status = mentors[i].status;
               meet.id=mentors[i].id;
               isname += 1;
           }
       }
       const find = isname > 0 ? true : false;
       console.log(find)
       return find
   }
   const compare = validate(mentors, meet, { idMentors })
   if (compare) {
       return (
           <React.Fragment>
               <MenuPage />
               <Cards name={meet.name} id={meet.id} state={meet.status} />
           </React.Fragment>
       );
   }

   return (
       <React.Fragment>
           <Error404 />
       </React.Fragment>
      
   );
}