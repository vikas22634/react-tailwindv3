import React from "react";
import Main from "./Main/main";
import CardsDetails from "./cardsComponents/cardsDetails";
import Payment from "./payment/payment";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/RegistrationForm">
            <RegistrationForm />
          </Route>
          <Route exact path="/cardsDetails">
            <CardsDetails />
          </Route>
          <Route exact path="/Payment">
            <Payment />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
