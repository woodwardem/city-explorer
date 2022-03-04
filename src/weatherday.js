import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
class WeatherDay extends React.Component {
    render() {
        return (
            <Col key={this.props.idx}>
                <Card className="forecast" style={{ width: '18rem' }}>

                    <Card.Body>Date: {this.props.dayObj.day}</Card.Body>
                    <Card.Body>Forecast Description: {this.props.dayObj.description}</Card.Body>
                </Card>
            </Col>

        )
    }
}


export default WeatherDay;