import React from 'react';
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classnames from 'classnames';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components

import DemoNavbar from '../../components/Navbars/DemoNavbar.js';
import CardsFooter from '../../components/Footers/CardsFooter.js';
import Background from '../IndexSections/Background';

class Rule extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }
  render() {
    return (
      <div>
        <DemoNavbar />
        <Background
          title='운영 방안과 규칙'
          desc='공모자들, 이것만은 꼭! 지켜주세요.'
        />
        <section className='section section-lg pt-lg-0 mt--200'>
          <Container>
            <Row className='justify-content-center'>
              <Col lg='12'>
                <Row className='row-grid'>
                  <Col lg='3'>
                    <Card className='card-lift--hover shadow border-0'>
                      <CardBody className='py-5'>
                        <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
                          <i className='ni ni-notification-70' />
                        </div>
                        <h6 className='text-primary text-uppercase'>
                          회의방침
                        </h6>
                        <p className='description mt-3'>
                          정기 온라인 회의 규칙에 대해 숙지해주세요.
                        </p>
                        <div>
                          <Badge color='primary' pill className='mr-1'>
                            월요일 7시
                          </Badge>
                          <Badge color='primary' pill className='mr-1'>
                            디스코드
                          </Badge>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg='3'>
                    <Card className='card-lift--hover shadow border-0'>
                      <CardBody className='py-5'>
                        <div className='icon icon-shape icon-shape-success rounded-circle mb-4'>
                          <i className='ni ni-money-coins' />
                        </div>
                        <h6 className='text-success text-uppercase'>
                          예산운영
                        </h6>
                        <p className='description mt-3'>
                          모든 예산은 동아리 진행과 관련되어 쓰입니다.
                        </p>
                        <div>
                          <Badge color='success' pill className='mr-1'>
                            동아리 운영
                          </Badge>
                          <Badge color='success' pill className='mr-1'>
                            수행 비용
                          </Badge>
                        </div>
                        <Link to='/budget'>
                          <Button className='mt-4' color='success'>
                            예산내역 보기
                          </Button>
                        </Link>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg='3'>
                    <Card className='card-lift--hover shadow border-0'>
                      <CardBody className='py-5'>
                        <div className='icon icon-shape icon-shape-warning rounded-circle mb-4'>
                          <i className='ni ni-tag' />
                        </div>
                        <h6 className='text-warning text-uppercase'>
                          운영방침
                        </h6>
                        <p className='description mt-3'>
                          운영방침은 꼭! 지켜주시길 바랄게요.
                        </p>
                        <div>
                          <Badge color='warning' pill className='mr-1'>
                            닉네임
                          </Badge>
                          <Badge color='warning' pill className='mr-1'>
                            존댓말
                          </Badge>
                          <Badge color='warning' pill className='mr-1'>
                            예의
                          </Badge>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg='3'>
                    <Card className='card-lift--hover shadow border-0'>
                      <CardBody className='py-5'>
                        <div className='icon icon-shape icon-shape-info rounded-circle mb-4'>
                          <i className='ni ni-chat-round' />
                        </div>
                        <h6 className='text-info text-uppercase'>
                          채팅방 방침
                        </h6>
                        <p className='description mt-3'>
                          '공모자들'에 가입하면 어떤 채팅방이 생기는지
                          알아보세요.
                        </p>
                        <div>
                          <Badge color='info' pill className='mr-1'>
                            카카오톡
                          </Badge>
                          <Badge color='info' pill className='mr-1'>
                            공지채팅방
                          </Badge>
                          <Badge color='info' pill className='mr-1'>
                            팀별채팅방
                          </Badge>
                          <Badge color='info' pill className='mr-1'>
                            익명채팅방
                          </Badge>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <CardsFooter />
      </div>
    );
  }
}

export default Rule;
