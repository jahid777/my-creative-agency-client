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
import Dashboard from './Components/OrderPage/DashBoard/Dashboard';
import Order from './Components/OrderPage/Order/Order';
import Review from './Components/OrderPage/Review/Review';
import ServiceList from './Components/OrderPage/ServiceList/ServiceList';
import MakeAdmin from './Components/OrderPage/MakeAdmin/MakeAdmin';
import AddService from './Components/OrderPage/AddService/AddService';
import NewService from './Components/OrderPage/MainNewService/NewService/NewService';
import NewServiceData from './Components/OrderPage/MainNewService/NewServiceData/NewServiceData';


 export const UserContext = createContext();
 export const ServiceContext = createContext();
 export const NewServiceContext = createContext();
 
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceCard, setServiceCard] = useState({});
  const [newServiceCard, setNewServiceCard] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
    <ServiceContext.Provider value={[serviceCard, setServiceCard]}>
       <NewServiceContext.Provider value={[newServiceCard, setNewServiceCard]}>
    <Router>
      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>


        <PrivateRoute path="/dashboard">
           <Dashboard></Dashboard>
        </PrivateRoute>

        <Route path="/clientsReview">
           <ClientsReview></ClientsReview>
        </Route>

        <Route path="/order">
           <Order></Order>
        </Route>

        <Route path="/review">
           <Review></Review>
        </Route>


        <Route path="/service">
           <Service></Service>
        </Route>

        <Route path="/serviceList">
           <ServiceList></ServiceList>
        </Route>

        <PrivateRoute path="/newService">
           <NewService></NewService>
        </PrivateRoute>

        <Route path="/newServiceData">
           <NewServiceData></NewServiceData>
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
    </NewServiceContext.Provider>
    </ServiceContext.Provider>
    </UserContext.Provider>
  );
};

export default App;