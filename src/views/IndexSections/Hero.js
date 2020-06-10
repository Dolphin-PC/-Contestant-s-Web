import React from 'react';

// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';

class Hero extends React.Component {
  render() {
    return (
      <>
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
                    <img
                      alt='...'
                      className='img-fluid'
                      src={require('assets/img/brand/main.png')}
                      style={{ width: '300px' }}
                    />
                    <div className='btn-wrapper mt-5'>
                      <Button
                        className='btn-white btn-icon mb-3 mb-sm-0'
                        color='default'
                        href='http://gongmoja.dothome.co.kr/wp-content/uploads/2019/10/%EA%B3%B5%EB%AA%A8%EC%A0%84-%EC%98%A4%ED%8B%B0%ED%8B%B0%ED%8C%89.mp4'
                        size='lg'
                        target='_blank'
                      >
                        <span className='btn-inner--icon mr-1'>
                          <i className='ni ni-cloud-download-95' />
                        </span>
                        <span className='btn-inner--text'>소개영상</span>
                      </Button>
                      <Button
                        className='btn-icon mb-3 mb-sm-0'
                        color='github'
                        href='https://instagram.com/gongmoja_official?igshid=i0g35ajrhg2v'
                        size='lg'
                        target='_blank'
                      >
                        <span className='btn-inner--icon mr-1'>
                          <i className='fa fa-instagram' />
                        </span>
                        <span className='btn-inner--text'>
                          <span className='text-warning mr-1'>Follow us</span>
                          on Instagram
                        </span>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

Hero.defaultProps = {
  image: '',
};

export default Hero;
