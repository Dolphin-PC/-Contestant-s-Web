import React, { Component } from 'react';
import { Container, Row, Col, Card, Badge, CardBody } from 'reactstrap';

class TeamList extends Component {
  render() {
    return (
      <>
        <Col lg='3'>
          <Card className='card-lift--hover shadow border-0'>
            <CardBody className='py-5'>
              <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
                <i className='ni ni-notification-70' />
              </div>
              <h6 className='text-primary text-uppercase'>
                {this.props.title}
              </h6>
              <p className='description mt-3'>{this.props.description}</p>
              <div>
                <Badge color='primary' pill className='mr-1'>
                  참가
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default TeamList;
