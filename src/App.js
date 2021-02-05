import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LoginPage } from './components/LoginPage';
import { CreateBookingPage } from './components/CreateBookingPage';
import { BookingListPage } from './components/BookingListPage';
import { MentorList } from './components/MentorList'
import { Error404 } from './components/Error404';
import { BookingDetailsPage } from './components/DetailsComponent/BookingDetailsPage'
import { BookingDetailsMentor } from './components/DetailsComponent/BookingDetailsMentors'
import { MyBookings } from './components/ChakraComponents/MyBookings';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path="/create-booking" exact>
            <CreateBookingPage />
          </Route>
          <Route path="/bookings" exact>
            <BookingListPage />
          </Route>
          <Route path="/bookings/:idBookings" exact>
            <BookingDetailsPage />
          </Route>
          <Route path="/MentorList" exact>
            <MentorList />
          </Route>
          <Route path="/MentorList/:idMentors" exact>
            <BookingDetailsMentor />
          </Route>
          <Route path="/MyBookings" exact>
            <MyBookings />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
