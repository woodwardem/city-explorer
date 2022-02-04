import React from 'react';

class Weather extends React.Component {
    render() {
        return (
this.props.weatherArr.map((dayObj, idx) => (
    <div key={idx}>
    <p>Date: {dayObj.day}</p>
    <p>Forecast Description: {dayObj.description}</p>
    </div>
))
        )
    }
}

export default Weather;