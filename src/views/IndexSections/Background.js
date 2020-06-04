import React, { Component } from 'react';
import { Container, Button, Col, Row } from 'reactstrap';

export default class Background extends Component {
  render() {
    return (
      <div>
        <div className='position-relative'>
          {/* Hero for FREE version */}
          <section className='section section-hero section-shaped'>
            {/* Background circles */}
            <div className='shape shape-style-1 bg-gradient-default'>
              <span className='span-150' />
              <span className='span-50' />
              <span className='span-50' />
              <span className='span-75' />
              <span className='span-100' />
              <span className='span-75' />
              <span className='span-50' />
              <span className='span-100' />
              <span className='span-50' />
              <span className='span-100' />
            </div>
            <Container className='shape-container d-flex align-items-center py-lg'>
              <div className='col px-0'>
                <Row className='align-items-center justify-content-center'>
                  <Col className='text-center' lg='6'>
                    {this.props.image}
                    <div className='btn-wrapper mt-5'>
                      <h1 style={{ color: 'white' }}>{this.props.title}</h1>
                      <p style={{ color: 'lightgray' }}>
                        {this.props.description}
                      </p>
                      {this.props.Button1}
                      {this.props.BUtton2}
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      </div>
    );
  }
}
