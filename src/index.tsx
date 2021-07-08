import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './App';
import Details from "./Details";

// Using Apollo client to access GraphQL API (Server)
const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          people: {

            keyArgs: false,


            merge(existing = [], incoming: any) {
              return [...existing, ...incoming]
            }


          }

        }
      }
    }
  }),
  link: new HttpLink({
    uri: "https://swapi.apis.guru/graphiql"
  })
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router forceRefresh={false}>

        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/details"} exact component={Details} />

          <App />
        </Switch>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
