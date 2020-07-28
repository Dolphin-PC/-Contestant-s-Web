import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Lottie from 'react-lottie';

export default class Background extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: this.props.lottieName,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    return (
      <div className='position-relative'>
        {/* shape Hero */}
        <section className='section section-lg section-shaped pb-250'>
          <div className='shape shape-style-1 bg-gradient-default'>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className='py-lg-md d-flex'>
            <div className='col px-0'>
              <Row>
                <Col lg='2'>
                  <Lottie
                    options={defaultOptions}
                    width={this.props.lottieSize}
                  />
                </Col>
                <Col lg='8'>
                  <h1 className='display-3 text-white'>{this.props.title}</h1>
                  <p className='lead text-white'>{this.props.desc}</p>
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className='separator separator-bottom separator-skew'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon className='fill-white' points='2560 0 2560 100 0 100' />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    );
  }
}
