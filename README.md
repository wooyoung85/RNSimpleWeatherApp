# RNSimpleWeatherApp
react native, expo를 활용한 Simple Weather App



## [Weather Planet API](https://developers.sktelecom.com/content/sktApi/view/?svcId=10113) 사용
```javascript
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
```

## API_KEY 발급 후 config.js에 설정
```javascript
export const API_KEY = '발급받은 Key';
```

## 참고자료
[![리액트 네이티브로 날씨앱 만들기](http://img.youtube.com/vi/v1vE7G6YQCc/0.jpg)](https://www.youtube.com/watch?v=v1vE7G6YQCc) 리액트 네이티브로 날씨앱 만들기