import React from 'react';

// reactstrap components
import { Badge, Button, Card, CardBody, Container, Row, Col } from 'reactstrap';

// core components

import DemoNavbar from '../../components/Navbars/DemoNavbar.js';
import CardsFooter from '../../components/Footers/CardsFooter.js';
import SubCarousel from '../IndexSections/SubCarousel';
import Background from '../IndexSections/Background';
import lottieActivity from '../../lotties/Activity.json';

const prizeItems = [
  {
    src: require('assets/img/activity/prize/prize1.jpg'),
    altText: '검찰청 수상_찐마님',
    caption: '찐마님',
    header: '검찰청 수상',
    key: '1',
  },
  {
    src: require('assets/img/activity/prize/prize2.jpg'),
    altText: '계량측정 수상_찐마님',
    caption: '찐마님',
    header: '계량측정 수상',
    key: '2',
  },
];
const friendlyItems = [
  {
    src: require('assets/img/activity/friendly/supporter.jpg'),
    header: '서포터즈 모임',
  },
  {
    src: require('assets/img/activity/friendly/19_winter_ot_0.jpg'),
    header: '19년 동계 오티',
  },
  {
    src: require('assets/img/activity/friendly/19_winter_ot_1.jpg'),
    header: '19년 동계 오티',
  },
  {
    src: require('assets/img/activity/friendly/19_winter_ot_2.jpg'),
    header: '19년 동계 오티',
  },
];

const testMapData = [
  { BadgeName: 'ni ni-collection', titleName: '19-2학기' },
  { BadgeName: 'ni ni-collection', titleName: '19-겨울방학' },
  { BadgeName: 'ni ni-collection', titleName: '20-1학기' },
];

const supporter_info = [
  {
    imageURL: 'supporter1.jpeg',
    title: '찐마',
    description: '한림대학교 글로벌비즈니스 졸업',
    buttonColor: 'warning',
  },
  {
    imageURL: 'supporter2.jpeg',
    title: '토마토',
    description: '우송대학교 글로벌철도융합학과 3학년 재학중',
    buttonColor: 'primary',
  },
  {
    imageURL: 'supporter3.jpeg',
    title: '혀니',
    description: '한림대학교 글로벌비즈니스 3학년 휴학중',
    buttonColor: 'info',
  },
  {
    imageURL: 'supporter5.jpeg',
    title: '원',
    description: '한림대학교 글로벌비즈니스 3학년 휴학중',
    buttonColor: 'success',
  },
  {
    imageURL: 'supporter4.jpeg',
    title: '두리',
    description: '강원대학교 통계학과 2학년 재학중',
    buttonColor: 'warning',
  },
];
class Activity extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref='main'>
          <Background
            lottieName={lottieActivity}
            title="'공모자들' 활동"
            desc="'공모자들'의 활약들을 소개합니다.😎"
          />
          <section className='section section-lg pt-lg-0 mt--200'>
            <Container>
              <Row className='justify-content-center'>
                <Col lg='12'>
                  <Row className='row-grid'>
                    <Col lg='4'>
                      <Card className='card-lift--hover shadow border-0'>
                        <CardBody className='py-5'>
                          <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
                            <i className='ni ni-spaceship' />
                          </div>
                          <h6 className='text-primary text-uppercase'>
                            공모전
                          </h6>
                          <p className='description mt-3'>
                            대학의 꽃은 대외활동!
                            <br />
                            뜻 맞는 사람들끼리 다양한 공모전에 참여/도전하자!
                            <br />
                            수 많은 회의를 통해 결과물을 만들어 개개인의
                            <br />
                            다양한 경험과 역량을 발전시켜 나갑니다
                          </p>
                          <div>
                            <Badge color='primary' pill className='mr-1'>
                              자유기획
                            </Badge>
                            <Badge color='primary' pill className='mr-1'>
                              문화/예술
                            </Badge>
                            <Badge color='primary' pill className='mr-1'>
                              교육
                            </Badge>
                            <Badge color='primary' pill className='mr-1'>
                              봉사
                            </Badge>
                            <Badge color='primary' pill className='mr-1'>
                              여행
                            </Badge>
                            <Badge color='primary' pill className='mr-1'>
                              팀프로젝트
                            </Badge>
                          </div>
                          <Button
                            className='mt-4'
                            color='primary'
                            href='#pablo'
                            onClick={(e) => e.preventDefault()}
                          >
                            더 보기
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg='4'>
                      <Card className='card-lift--hover shadow border-0'>
                        <CardBody className='py-5'>
                          <div className='icon icon-shape icon-shape-success rounded-circle mb-4'>
                            <i className='ni ni-paper-diploma' />
                          </div>
                          <h6 className='text-success text-uppercase'>
                            수상/경험
                          </h6>
                          <p className='description mt-3'>
                            취업은 해야겠는데 스펙이 없어?
                            <br />
                            공모자들과 함께 빠방한 공모전 수상 경험 쌓아서
                            <br />
                            마케팅, 기획, IT등 다양한 흥미분야에서 스펙을 쌓을
                            수 있습니다
                          </p>
                          <div>
                            <Badge color='success' pill className='mr-1'>
                              수상
                            </Badge>
                            <Badge color='success' pill className='mr-1'>
                              경험
                            </Badge>
                          </div>
                          <Button
                            className='mt-4'
                            color='success'
                            href='#pablo'
                            onClick={(e) => e.preventDefault()}
                          >
                            더 보기
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg='4'>
                      <Card className='card-lift--hover shadow border-0'>
                        <CardBody className='py-5'>
                          <div className='icon icon-shape icon-shape-warning rounded-circle mb-4'>
                            <i className='ni ni-note-03' />
                          </div>
                          <h6 className='text-warning text-uppercase'>
                            친목 활동
                          </h6>
                          <p className='description mt-3'>
                            고생많았다 동지들.. 뒷풀이 시간이다!
                            <br />
                            끝없는 회의를 함께 헤쳐나간 팀원들과 함께
                            <br />
                            즐기는 시간도 필요하겠죠?
                            <br />
                            친구 만들기도 좋은 공모자들! 함께해요~
                          </p>
                          <div>
                            <Badge color='warning' pill className='mr-1'>
                              영화
                            </Badge>
                            <Badge color='warning' pill className='mr-1'>
                              야유회
                            </Badge>
                            <Badge color='warning' pill className='mr-1'>
                              체험
                            </Badge>
                          </div>
                          <Button
                            className='mt-4'
                            color='warning'
                            href='#pablo'
                            onClick={(e) => e.preventDefault()}
                          >
                            더 보기
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className='section section-lg'>
            <Container>
              <Row className='row-grid align-items-center'>
                <Col className='order-md-2' md='6'>
                  <h1>😭작업 중에 있습니다😭</h1>
                </Col>
                <Col className='order-md-1' md='6'>
                  <div className='pr-md-5'>
                    <div className='icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-5'>
                      <i className='ni ni-spaceship' />
                    </div>
                    <h3>공모전</h3>
                    <p>지금껏 진행해온 공모전들입니다.</p>
                    <ul className='list-unstyled mt-5'>
                      {testMapData.map((test, i) => {
                        return (
                          <li className='py-2' key={i}>
                            <div className='d-flex align-items-center'>
                              <div>
                                <Badge
                                  className='badge-circle mr-3'
                                  color='primary'
                                >
                                  <i className={test.BadgeName} />
                                </Badge>
                              </div>
                              <div>
                                <h6 className='mb-0'>{test.titleName}</h6>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className='section bg-secondary'>
            <Container>
              <Row className='row-grid align-items-center'>
                <Col md='6'>
                  <SubCarousel items={prizeItems} />
                </Col>
                <Col md='6'>
                  <div className='pl-md-5'>
                    <div className='icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5'>
                      <i className='ni ni-paper-diploma' />
                    </div>
                    <h3>수상/경험</h3>
                    <p className='lead'>
                      '공모자들'에서 수상한 작품들입니다!👏
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className='section pb-0 '>
            <Container>
              <Row className='row-grid align-items-center'>
                <Col className='order-md-2' md='6'>
                  <SubCarousel items={friendlyItems} />
                </Col>
                <Col className='order-md-1' md='6'>
                  <div className='pr-md-5'>
                    <div className='icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5'>
                      <i className='ni ni-note-03' />
                    </div>
                    <h3>친목 활동</h3>
                    <p>공모전 끝! 뒷풀이 시작!</p>
                    <ul className='list-unstyled mt-5'>
                      {testMapData.map((contact, i) => {
                        return (
                          <li className='py-2' key={i}>
                            <div className='d-flex align-items-center'>
                              <div>
                                <Badge
                                  className='badge-circle mr-3'
                                  color='primary'
                                >
                                  <i className={contact.BadgeName} />
                                </Badge>
                              </div>
                              <div>
                                <h6 className='mb-0'>{contact.titleName}</h6>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className='separator separator-bottom separator-skew zindex-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x='0'
                y='0'
              >
                <polygon
                  className='fill-white'
                  points='2560 0 2560 100 0 100'
                />
              </svg>
            </div>
          </section>
          <section className='section section-lg'>
            <Container>
              <Row className='justify-content-center text-center mb-lg'>
                <Col lg='8'>
                  <h2 className='display-3'>
                    '공모자들' <br />
                    서포터즈를 소개합니다!🙌
                  </h2>
                  <p className='lead text-muted'>
                    활동사진에서 자주 보이시는 분들이 몇몇 계시죠? <br />그
                    분들은 바로 우리 '공모자들'을 위해 힘써주시는 서포터즈
                    여러분입니다.😘
                  </p>
                </Col>
              </Row>
              <Row>
                {supporter_info.map((contact, i) => {
                  return (
                    <Col className='mb-5 mb-lg-0' lg='3' md='6' key={i}>
                      <div className='px-4'>
                        <img
                          alt='...'
                          className='rounded-circle img-center img-fluid shadow shadow-lg--hover'
                          src={require(`assets/img/supporters/${contact.imageURL}`)}
                          style={{ width: 'auto' }}
                        />
                        <div className='pt-4 text-center'>
                          <h5 className='title'>
                            <span className='d-block mb-1'>
                              {contact.title}
                            </span>
                            <small className='h6 text-muted'>
                              {contact.description}
                            </small>
                          </h5>
                          <div className='mt-3'>
                            <Button
                              className='btn-icon-only rounded-circle'
                              color={contact.buttonColor}
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className='fa fa-twitter' />
                            </Button>
                            <Button
                              className='btn-icon-only rounded-circle ml-1'
                              color={contact.buttonColor}
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className='fa fa-facebook' />
                            </Button>
                            <Button
                              className='btn-icon-only rounded-circle ml-1'
                              color={contact.buttonColor}
                              href='#pablo'
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className='fa fa-dribbble' />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </section>
          <section className='section section-lg bg-gradient-default'>
            <Container className='pt-lg pb-300'>
              <Row className='text-center justify-content-center'>
                <Col lg='10'>
                  <h2 className='display-3 text-white'>
                    '공모자들'과 함께 만들어가요!
                  </h2>
                  <p className='lead text-white'>
                    '공모자들' 동아리에 참가해서
                    <br />
                    다양한 사람들과 회의를 하고, 수상도 해보고! <br />
                    우리와 함께 추억을 만들어가요!
                  </p>
                </Col>
              </Row>
              <Row className='row-grid mt-5'>
                <Col lg='4'>
                  <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                    <i className='ni ni-settings text-primary' />
                  </div>
                  <h5 className='text-white mt-3'>팀 구성</h5>
                  <p className='text-white mt-3'>
                    '공모자들'은 3-4명 소수의 인원으로 팀이 구성되어 진행돼요.
                  </p>
                </Col>
                <Col lg='4'>
                  <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                    <i className='ni ni-ruler-pencil text-primary' />
                  </div>
                  <h5 className='text-white mt-3'>피드백</h5>
                  <p className='text-white mt-3'>
                    공모전 진행이 어려우신가요?
                    <br />
                    그럼 우리의 피드백을 받아보세요!
                  </p>
                </Col>
                <Col lg='4'>
                  <div className='icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary'>
                    <i className='ni ni-atom text-primary' />
                  </div>
                  <h5 className='text-white mt-3'>스펙</h5>
                  <p className='text-white mt-3'>
                    졸업..취업..걱정 많으시죠...
                    <br />
                    그럴 땐 우리 '공모자들'과 함께 스펙을 쌓아봐요!
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className='separator separator-bottom separator-skew zindex-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x='0'
                y='0'
              >
                <polygon
                  className='fill-white'
                  points='2560 0 2560 100 0 100'
                />
              </svg>
            </div>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Activity;
