import React from 'react';

// reactstrap components
import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap';

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

export default SubCarousel;
