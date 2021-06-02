import React, { Component } from "react";
import ListsContainer from "../containers/ListsContainer";
import CreateList from "./CreateList";
import Users from "./Users";
// import defaultState from '../default-state.json';

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <Users />
        <section>
          <CreateList />
          <ListsContainer />
        </section>
      </main>
    );
  }
}

export default Application;
