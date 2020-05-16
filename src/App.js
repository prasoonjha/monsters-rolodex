import React, { Component } from "react";
import "./App.css";

import Search from "./components/search/search.component";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleSearch = (searchString) => {
    this.setState({ searchField: searchString });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>monsters-rolodex</h1>
        <Search handleSearch={this.handleSearch} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
