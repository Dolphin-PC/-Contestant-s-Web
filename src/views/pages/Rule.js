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
import MainContent from '../IndexSections/MainContent';

const CardInfo = [
  {
    property: 'icon icon-shape icon-shape-primary rounded-circle mb-4',
    h6property: 'text-primary text-uppercase',
    cardIcon: 'ni ni-notification-70',
    title: '회의방침',
    text: '정기 온라인 회의 규칙에 대해 숙지해주세요.',
    badgeInfo: [
      { color: 'primary', text: '월요일 7시' },
      { color: 'primary', text: '디스코드' },
    ],
    detail: [
      {
        main: '정기 온라인 회의는 매주 월요일 저녁 7시',
        sub: '7시까지는 디스코드 회의방에 입장해 있어야 함',
      },
      {
        main: '회의는 디스코드로 진행',
        sub: '문의사항은 서포터 디스코드 방에 들어와 문의 가능',
      },
      {
        main: '7시에 출석체크',
        sub:
          '시스템 문제나 정당한 개인 사유로 인해 지각할 시, 팀원들과 임원들에게 사전 연락 필수',
      },
      {
        main: '출석체크와 함께 다른 팀의 회의록 피드백',
        sub: '피드백은 서포터가 다른 팀 방에 입장해 받은 후 전달',
      },
      {
        main: '팀장을 정해 서기 작업',
        sub: '회의록 양식은 제공 예정',
      },
      {
        main: '각 팀별로 오프라인 회의 가능',
        sub: '권장 사항은 절대 아님, 오프라인 회의 시 인증샷 남겨주세요~',
      },
      {
        main:
          '시험기간이나 피치못할 사정으로 회의 참석 불가 시 팀별 협의를 통해 다른 시간에 회의 가능',
        sub: '서포터에게 사유와 변경된 시간을 반드시 알려야 함',
      },
    ],
  },
  {
    property: 'icon icon-shape icon-shape-success rounded-circle mb-4',
    h6property: 'text-success text-uppercase',
    cardIcon: 'ni ni-money-coins',
    title: '예산운영',
    text: '모든 예산은 동아리 진행과 관련되어 쓰입니다.',
    badgeInfo: [
      { color: 'success', text: '동아리 운영' },
      { color: 'success', text: '수행 비용' },
    ],
    detail: [
      {
        main: '동아리 운영 및 관리',
        sub: '예) 공간 대여를 위한 대관 비용',
      },
      {
        main: '자유기획 혹은 공모전 프로젝트 수행',
        sub: '예) 자문 비용, 행사 기획 및 진행 비용',
      },
      {
        main:
          '공모전 수상 시, 상금의 10%는 동아리의 운영 및 활동 비용으로 기여되고, 활용될 예정입니다.',
      },
    ],
  },
  {
    property: 'icon icon-shape icon-shape-warning rounded-circle mb-4',
    h6property: 'text-warning text-uppercase',
    cardIcon: 'ni ni-tagni ni-tag',
    title: '운영방침',
    text: '운영방침은 꼭! 지켜주시길 바랄게요.',
    badgeInfo: [
      { color: 'warning', text: '닉네임' },
      { color: 'warning', text: '존댓말' },
      { color: 'warning', text: '예의' },
    ],
    detail: [
      {
        main: '닉네임을 사용해주세요.',
        sub: '닉네임 이외의 실명 거론 자제해주세요.',
      },
      {
        main: '존댓말을 사용해주세요.',
        sub: '언니 or 오빠와 동생, 친구 사이여도~',
      },
      {
        main: '종교 및 정치적 성향을 강요하지 말아주세요.',
      },
      {
        main: '예의범절을 지켜주세요.',
        sub: '우리 서로 말은 끝까지 들어봐요...!',
      },
      {
        main: '불성실한 태도는 재난 입니다.',
        sub: '예) 무단결석, 반복된 지각, 연락 잠수, 늦는 답장 등',
      },
    ],
  },
  {
    property: 'icon icon-shape icon-shape-info rounded-circle mb-4',
    h6property: 'text-info text-uppercase',
    cardIcon: 'ni ni-chat-round',
    title: '채팅방 방침',
    text: "'공모자들'에 가입하면 어떤 채팅방이 생기는지 알아보세요.",
    badgeInfo: [
      { color: 'info', text: '카카오톡' },
      { color: 'info', text: '공지채팅방' },
      { color: 'info', text: '팀별채팅방' },
      { color: 'info', text: '익명채팅방' },
    ],
    detail: [
      {
        main: '공지용 단체 채팅방',
        sub: '공지를 올리는 채팅방입니다.(욕설/반말/이상한 사진/글 금지)',
      },
      {
        main: '공모전 팀 오픈채팅방',
        sub:
          '팀마다 Supporter 1명이 팀 가이드를 위해 채팅방에 함께 참여합니다.',
      },
      {
        main: '종교 및 정치적 성향을 강요하지 말아주세요.',
      },
      {
        main: '익명보장 오픈 채팅방',
        sub:
          '익명 보장을 우선으로 합니다. 각 Supporter마다 오픈채팅방을 가집니다.',
      },
    ],
  },
];

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
                  {CardInfo.map((contact, i) => {
                    return (
                      <Col lg='3'>
                        <Card className='card-lift--hover shadow border-0'>
                          <CardBody className='py-5'>
                            <div className={contact.property}>
                              <i className={contact.cardIcon} />
                            </div>
                            <h6 className={contact.h6property}>
                              {contact.title}
                            </h6>
                            <p className='description mt-3'>{contact.text}</p>
                            <div>
                              {contact.badgeInfo.map((badgeContact, i) => {
                                return (
                                  <Badge
                                    color={badgeContact.color}
                                    pill
                                    className='mr-1'
                                  >
                                    {badgeContact.text}
                                  </Badge>
                                );
                              })}
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <MainContent Input={CardInfo} />
        <CardsFooter />
      </div>
    );
  }
}

export default Rule;
