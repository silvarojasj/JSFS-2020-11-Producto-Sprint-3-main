import { LoginPage } from './components/LoginPage';
import { CreateBookingPage } from './components/CreateBookingPage';
import { BookingListPage } from './components/BookingListPage';
import {MentorList} from './components/MentorList'
import { Error404 } from './components/Error404';
import { BookingDetailsPage } from './components/DetailsComponent/BookingDetailsPage';
const routes = [
    {
        path:"/",
        component: LoginPage
    },
    {
        path:"/create-booking",
        component: CreateBookingPage   
    },
    {
        path:"/bookings",
        component: BookingListPage,
        routes: [
            {
                path:"/detail-booking",
                component:BookingDetailsPage
            }
        ]
    },
    {
        path:"/MentorList",
        component: MentorList
    },
    {
        path:"*",
        component: Error404
    }
]
export default routes;