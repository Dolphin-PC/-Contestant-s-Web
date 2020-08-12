import React from 'react';

// reactstrap components
import { UncontrolledCarousel } from 'reactstrap';

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className='section-shaped'>
          <div className='rounded shadow-lg overflow-hidden transform-perspective-right'>
            <UncontrolledCarousel items={this.props.items} />
          </div>

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
    captionText: '',
    header: '',
  },
];

Carousel.defaultProps = {
  CarouselItems: items,
};

export default Carousel;
