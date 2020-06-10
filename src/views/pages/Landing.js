import React, { Component } from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import CardsFooter from 'components/Footers/CardsFooter.js';

import Hero from '../IndexSections/Hero';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Carousel from '../../views/IndexSections/Carousel';
import SubCarousel from 'views/IndexSections/SubCarousel.js';
import ButtonPopover from '../../components/ButtonPopover';

import Icons from '../IndexSections/Icons';

import Contact from 'views/IndexSections/Contact';

const mainItems = [
  { src: require('assets/img/Landing/landing_1.jpg') },
  { src: require('assets/img/Landing/landing_2.jpg') },
  { src: require('assets/img/Landing/landing_3.jpg') },
];
const contestItems = [
  { src: require('assets/img/Landing/landing_contest_1.jpg') },
  { src: require('assets/img/Landing/landing_contest_2.jpg') },
  { src: require('assets/img/Landing/landing_contest_3.jpg') },
];
const awardItems = [
  { src: require('assets/img/Landing/landing_award_1.jpg') },
  { src: require('assets/img/Landing/landing_award_2.jpg') },
  { src: require('assets/img/Landing/landing_award_3.jpg') },
];
const friendlyItems = [
  { src: require('assets/img/Landing/landing_friendly_1.jpg') },
  { src: require('assets/img/Landing/landing_friendly_2.jpg') },
  { src: require('assets/img/Landing/landing_friendly_3.jpg') },
  { src: require('assets/img/Landing/landing_friendly_4.jpg') },
];

class Landing extends Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }
  componentWillMount() {
    this.props.fetchLanding();
  }

  render() {
    return (
      <div>
        <DemoNavbar />
        <Hero />
        <Carousel
          items={mainItems}
          title='공모자들'
          subtitle='무슨 동아리인가요?'
          text1='춘천 유일의 공모전 연합동아리 입니다.
          ‘공모자들’에서는 경험이 없어도, 잘 하지 못해도 누구든 다양한
          사람들과 함께 공모전에 도전할 수 있습니다👍'
          link='#'
        />
        <hr />
        <Container style={{ textAlign: 'center' }}>
          <h1>'공모자들'은 뭘 하나요?</h1>
          <h4>다양한 공모전에 참여합니다.</h4>
          <p className='lead'>
            소수로 구성된 여러 팀들은 다양한 공모전에 도전합니다.
            <br />
            수 많은 회의를 통해서 만들어낸 결과물을 통해서, 스펙은 덤!
            <br />
            개개인의 다양한 경험과 역량을 발전시킬 수 있습니다.
          </p>
          <Row>
            <Col className='col-12 col-sm-4'>
              <SubCarousel category='공모전' items={contestItems} />
              <Row className='justify-content-center'>
                <ButtonPopover
                  title='자유기획'
                  PH_text='자유기획'
                  PB_text='문화/예술, 교육, 봉사, 여행 등 모든 분야에 대해 생각합니다.'
                  PopID='B1'
                />
                &emsp;
                <ButtonPopover
                  title='팀프로젝트'
                  PH_text='팀프로젝트'
                  PB_text='매주 정기모임을 통해 서로의 생각을 공유합니다.'
                  PopID='B2'
                />
              </Row>
            </Col>
            <Col className='col-12 col-sm-4'>
              <SubCarousel category='수상/경험' items={awardItems} />
              <Row className='justify-content-center'>
                <ButtonPopover
                  title='수상'
                  PH_text='수상'
                  PB_text='공모자들 모두의 도움으로 공모전 수상을 해봐요.'
                  PopID='C1'
                  color='success'
                />
                &emsp;
                <ButtonPopover
                  title='경험'
                  PH_text='경험'
                  PB_text='공모전을 준비하며 많은 생각을 해보는 경험을 해봐요.'
                  PopID='C2'
                  color='success'
                />
              </Row>
            </Col>
            <Col className='col-12 col-sm-4'>
              <SubCarousel category='친목활동' items={friendlyItems} />
              <Row className='justify-content-center'>
                <ButtonPopover
                  title='친목활동'
                  PH_text='친목활동'
                  PB_text='영화, 야유회, 체험 등 공모자들 여러분과 친목을 다져봐요.'
                  PopID='D1'
                  color='warning'
                />
              </Row>
            </Col>
          </Row>
        </Container>
        <Icons
          title={"'공모자들'의 활동"}
          description={"'공모자들'의 시작부터 현재까지의 활동이에요."}
          descriptionBottom='(2019년 2학기 ~ 현재)'
          hiddenDescription='지금까지'
          hiddenDescription1='+ 12'
          hiddenDescription2='활동들을 진행했어요!'
        />
        <hr />
        <Contact />
        <CardsFooter />
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data,
  };
};

export default connect(mapStateToProps, actions)(Landing);
