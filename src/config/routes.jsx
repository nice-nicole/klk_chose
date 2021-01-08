import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Contacts from "../pages/Contacts";
import ContactDetails from "../pages/ContactDetails";
import ContactForm from "../pages/ContactForm";

export const getRoutes = () => {
  return (
    <Fragment>
      <Route exact path="/" component={Contacts} />
      <Route exact path="/contacts/:contactId" component={ContactDetails} />
      <Route exact path="/new-contact" component={ContactForm} />
    </Fragment>
  );
};
