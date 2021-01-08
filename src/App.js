import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { getRoutes } from "./config/routes";


import "./App.css"

const App = () => {
 

  const routes = getRoutes()

  return (
    <ChakraProvider resetCSS>
      <div className="App">
        <Layout>
          <Router>
            <Switch>{routes}</Switch>
          </Router>
        </Layout>
      </div>
    </ChakraProvider>
  );
};

export default App;
