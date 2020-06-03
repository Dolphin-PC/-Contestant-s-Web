import React from 'react';
import PropTypes from 'prop-types';

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require('assets/img/theme/img-1-1200x1000.jpg'),
  },
  {
    src: require('assets/img/theme/img-2-1200x1000.jpg'),
  },
];

class SubCarousel extends React.Component {
  render() {
    return (
      <>
        <Container className='py-md'>
          <Row className='justify-content-between align-items-center'>
            <Col className='mb-lg-auto' lg='11'>
              <div className='rounded shadow-lg overflow-hidden transform-perspective-right'>
                <UncontrolledCarousel items={this.props.items} />
              </div>
            </Col>
          </Row>
        </Container>
        <h2>{this.props.category}</h2>
      </>
    );
  }
}

SubCarousel.defaultProps = {
  items: items,
};

export default SubCarousel;
