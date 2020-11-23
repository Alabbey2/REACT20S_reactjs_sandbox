import React, { Component } from "react";
import axios from "axios";

const API = "https://restcountries.eu/rest/v2/all";

class Axios_demo extends Component {
  state = {
    countries: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API)
      .then((response) =>
        this.setState({ countries: response.data, isLoading: false })
      );
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
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
    );
  }
}

export default Axios_demo;
