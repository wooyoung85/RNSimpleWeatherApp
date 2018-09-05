import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather'
import {API_KEY} from './config'

const weatherNameMap = new Map();
weatherNameMap.set('맑음','Sunny');
weatherNameMap.set('구름많음','Clouds');

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    tc: null,       // 온도
    weatherName: null,     // 날씨명 
    stationName: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = (lat, long) => {
    fetch(
      `https://api2.sktelecom.com/weather/current/minutely?appKey=${API_KEY}&lat=${lat}&lon=${long}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          tc: json.weather.minutely[0].temperature.tc,
          weatherName: json.weather.minutely[0].sky.name,
          stationName: json.weather.minutely[0].station.name,
          isLoaded: true
        })
      });
  }

  render() {
    const { isLoaded, error, tc, weatherName, stationName } = this.state;
    
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather temp={tc} weatherName={weatherNameMap.get(weatherName)} stationName={stationName} />
        ) : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>날씨정보 로딩 중...</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  errorText: {
    color: "red"
  },
  loading: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24
  }
});
