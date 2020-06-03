import React from 'react';

// reactstrap components
import { Button, Container, Row, Col } from 'reactstrap';
import landing_1 from '../../assets/img/Landing/landing_1.jpg';
import landing_2 from '../../assets/img/Landing/landing_2.jpg';
import landing_3 from '../../assets/img/Landing/landing_3.jpg';
import landing_4 from '../../assets/img/Landing/landing_award_1.jpg';
import landing_5 from '../../assets/img/Landing/landing_award_2.jpg';
import landing_6 from '../../assets/img/Landing/landing_award_3.jpg';
import landing_8 from '../../assets/img/Landing/landing_contest_1.jpg';
import landing_7 from '../../assets/img/Landing/landing_contest_2.jpg';
import landing_9 from '../../assets/img/Landing/landing_contest_3.jpg';
import landing_10 from '../../assets/img/Landing/landing_friendly_1.jpg';
import landing_11 from '../../assets/img/Landing/landing_friendly_2.jpg';
import landing_12 from '../../assets/img/Landing/landing_friendly_3.jpg';
import landing_13 from '../../assets/img/Landing/landing_friendly_4.jpg';

class Icons extends React.Component {
  render() {
    return (
      <>
        <section className='section section-lg section-nucleo-icons pb-250'>
          <Container backgroundColor='default'>
            <Row className='justify-content-center'>
              <Col className='text-center' lg='8'>
                <h2 className='display-3'>{this.props.title}</h2>
                <p className='lead'>
                  {this.props.description}
                  <br />
                  <small>{this.props.descriptionBottom}</small>
                </p>
              </Col>
            </Row>
            <div className='blur--hover'>
              <div className='icons-container blur-item mt-5 on-screen'>
                <i
                  className='icon ni'
                  style={{
                    backgroundImage: `url(${landing_1})`,
                    backgroundSize: 'cover',
                  }}
                />
                <i
                  className='icon icon-sm ni'
                  style={{
                    backgroundImage: `url(${landing_2})`,
                    backgroundSize: 'cover',
                  }}
                />
                <i className='icon icon-sm ni ni-app' />
                <i
                  className='icon icon-sm ni '
                  style={{
                    backgroundImage: `url(${landing_3})`,
                    backgroundSize: 'cover',
                  }}
                />
                <i
                  className='icon ni '
                  style={{
                    backgroundImage: `url(${landing_4})`,
                    backgroundSize: 'cover',
                  }}
                />
                <i className='icon ni ni-bell-55' />
                <i
                  className='icon ni '
                  style={{
                    backgroundImage: `url(${landing_5})`,
                    backgroundSize: 'cover',
                  }}
                />
                <i
                  className='icon icon-sm '
                  style={{
                    backgroundImage: `url(${landing_13})`,
                    backgroundSize: 'cover',
                  }}
                />
                <i
                  className='icon icon-sm ni '
                  style={{
                    backgroundImage: `url(${landing_11})`,
                    backgroundSize: 'cover',
                  }}
                />
                <i className='icon icon-sm ni ni-button-play' />
                <i className='icon ni ni-calendar-grid-58' />
                <i
                  className='icon ni '
                  style={{
                    backgroundImage: `url(${landing_8})`,
                    backgroundSize: 'cover',
                  }}
                />
                <i className='icon ni ni-chart-bar-32' />
              </div>
              <span className='blur-hidden h1 text-success'>
                {this.props.hiddenDescription}
                <br />
                <desc
                  style={{
                    backgroundColor: '#2DCF89',
                    color: 'white',
                  }}
                >
                  {this.props.hiddenDescription1}
                </desc>
                <br />
                {this.props.hiddenDescription2}
                <br />
                <Button className='btn-blue mt-12' color='warning' href='#'>
                  더 알아보기
                </Button>
              </span>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Icons;
