import React from 'react';

// reactstrap components
import { Container, UncontrolledCarousel } from 'reactstrap';

class SubCarousel extends React.Component {
  render() {
    return (
      <>
        <Container className='py-md'>
          <div
            style={{ height: '100%' }}
            className='rounded shadow-lg overflow-hidden transform-perspective-right'
          >
            <UncontrolledCarousel items={this.props.items} />
          </div>
        </Container>
        <h2>{this.props.category}</h2>
      </>
    );
  }
}

export default SubCarousel;
