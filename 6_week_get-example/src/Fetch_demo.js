import React, { Component } from "react";

const API = "https://restcountries.eu/rest/v2/";
const QUERY = "all";

class Fetch_demo extends Component {
  state = {
    countries: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API + QUERY)
      .then((response) => response.json())
      .then((data) => this.setState({ countries: data, isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <ul>
          {this.state.countries.map((country) => (
            <li key={country.alpha3Code}>
              <h2>{country.name}</h2>
              <h2>{country.capital}</h2>
              <p>{country.population}</p>
              <img src={country.flag} alt={country.name} height="200" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Fetch_demo;
