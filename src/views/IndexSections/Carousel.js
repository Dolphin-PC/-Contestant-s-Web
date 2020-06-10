import React from 'react';

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className='section section-shaped'>
          <Container className='py-md'>
            <Row className='justify-content-between align-items-center'>
              <Col className='mb-5 mb-lg-0' lg='5'>
                <h1 className=' font-weight-bold'>{this.props.title}</h1>
                <h2 className=' font-weight-light'>{this.props.subtitle}</h2>
                <p className='lead mt-4'>{this.props.text1}</p>

                <Button
                  className='btn-blue mt-4'
                  color='default'
                  href={this.props.link}
                >
                  더 알아보기
                </Button>
              </Col>
              <Col className='mb-lg-auto' lg='6'>
                <div className='rounded shadow-lg overflow-hidden transform-perspective-right'>
                  <UncontrolledCarousel items={this.props.items} />
                </div>
              </Col>
            </Row>
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
      </>
    );
  }
}
const items = [
  {
    src: require('assets/img/Landing/landing_1.jpg'),
    altText: '',
    caption: '',
    header: '',
  },
];

Carousel.defaultProps = {
  CarouselItems: items,
};

export default Carousel;
