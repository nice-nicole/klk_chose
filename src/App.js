import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import ContactDetails from "./components/ContactDetails";

import Layout from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  const [contactList, setcontactList] = useState([]);

  const getContacts = () => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => {
        setcontactList([...data]);
      });
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <ChakraProvider resetCSS>
      <div className="App">
        <Layout>
          {/* <h1>Hello there..</h1> */}
          <Router>
            <Switch>
              <Route exact path="/contact-details">
                <ContactDetails
                  contactList={contactList}
                  setcontactList={setcontactList}
                />
              </Route>
              <Route exact path="/new-contact">
                <ContactForm
                // contactList={contactList}
                // setcontactList={setcontactList}
                />
              </Route>
              <Route exact path="/">
                <Header />
                {/* <div className="h_title">
                  <header>Contacts</header>
                  <Link to="/new-contact">
                    <button className="add_button">+</button>
                  </Link>
                </div> */}
                <Contacts
                  contactList={contactList}
                  setContactList={setcontactList}
                />
              </Route>
            </Switch>
          </Router>
        </Layout>
      </div>
    </ChakraProvider>
  );
};

export default App;
