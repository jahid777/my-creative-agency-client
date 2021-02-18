import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute';
import Service from './Components/Service/Service';
import ServiceData from './Components/ServiceData/ServiceData';
import NotFound from './Components/Shared/NotFound/NotFound';
import OrderList from './Components/OrderPage/OrderList/OrderList';
import FeedBack from './Components/FeedBack/FeedBack';
import ClientsReview from './Components/ClientsReview/ClientsReview';
import Order from './Components/OrderPage/Order/Order';
import Review from './Components/OrderPage/Review/Review';
import ServiceList from './Components/OrderPage/ServiceList/ServiceList';
import MakeAdmin from './Components/OrderPage/MakeAdmin/MakeAdmin';
import AddService from './Components/OrderPage/AddService/AddService';



 export const UserContext = createContext();
 export const ServiceContext = createContext();

 
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceCard, setServiceCard] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
    <ServiceContext.Provider value={[serviceCard, setServiceCard]}>
       
    <Router>
      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>


        <PrivateRoute path="/clientsReview">
           <ClientsReview></ClientsReview>
        </PrivateRoute>

        <PrivateRoute path="/order">
           <Order></Order>
        </PrivateRoute>

        <PrivateRoute path="/review">
           <Review></Review>
        </PrivateRoute>


        <Route path="/service">
           <Service></Service>
        </Route>

        <Route path="/serviceList">
           <ServiceList></ServiceList>
        </Route>



        <Route path="/addService">
           <AddService></AddService>
        </Route>

        <Route path="/makeAdmin">
           <MakeAdmin></MakeAdmin>
        </Route>

        <Route path="/orderList">
           <OrderList></OrderList>
        </Route>

        <Route path="/serviceData">
           <ServiceData></ServiceData>
        </Route>

        <Route path="/feedBack">
           <FeedBack></FeedBack>
        </Route>

        {/* <PrivateRoute path="/feedBackData">
           <FeedBackData></FeedBackData>
        </PrivateRoute> */}

        <Route path="/login">
           <Login></Login>
        </Route>

        <Route path="*">
           <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    
    </ServiceContext.Provider>
    </UserContext.Provider>
  );
};

export default App;