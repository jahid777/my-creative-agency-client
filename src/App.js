import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute';
import MainOrderPage from './Components/OrderPage/MainOrderPage/MainOrderPage';
import Service from './Components/Service/Service';
import ServiceData from './Components/ServiceData/ServiceData';
import NotFound from './Components/Shared/NotFound/NotFound';
import OrderList from './Components/OrderPage/OrderList/OrderList';

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

        <PrivateRoute path="/mainOrderPage">
           <MainOrderPage></MainOrderPage>
        </PrivateRoute>

        <PrivateRoute path="/service">
           <Service></Service>
        </PrivateRoute>

        <PrivateRoute path="/orderList">
           <OrderList></OrderList>
        </PrivateRoute>

        <PrivateRoute path="/serviceData">
           <ServiceData></ServiceData>
        </PrivateRoute>

        <Route path="/login">
           <Login></Login>
        </Route>

        <Route path="/">
           <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </ServiceContext.Provider>
    </UserContext.Provider>
  );
};

export default App;