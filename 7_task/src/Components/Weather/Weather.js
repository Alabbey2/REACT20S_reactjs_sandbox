import React, { Component } from "react";
import axios from "axios";

const API = "http://api.weatherstack.com/current";

const params = {
  access_key: process.env.REACT_APP_API_KEY,
  query: "Helsinki",
};

class Weather extends Component {
  state = {
    weather: {
      request: {},
      location: {},
      current: {},
    },
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(API, { params })
      .then((response) =>
        this.setState({ weather: response.data, isLoading: false })
      );
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading weather...</p>;
    }

    return (
      <div>
        <p>
          Currenty in {this.state.weather.location.name} is
          {this.state.weather.current.weather_descriptions} and temperature is
          {this.state.weather.current.temperature}℃ and it feels like
          {this.state.weather.current.feelslike}℃
        </p>
      </div>
    );
  }
}

export default Weather;
