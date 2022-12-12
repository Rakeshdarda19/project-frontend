import React, { Component } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import AddUser from "./components/AddUser";
import UserList from './components/UserList'
import UpdatePassword from "./components/UpdatePassword";
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <>
    <ApolloProvider client={client}>
        <AddUser />
        <UserList />
        <UpdatePassword />
    </ApolloProvider>
      
    </>
  );
}

export default App;
