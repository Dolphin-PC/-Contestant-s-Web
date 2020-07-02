import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import { dbRef, teamList_Ref } from '../../config/firebase';

// reactstrap components
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Container,
  Col,
  Card,
  CardBody,
  Row,
  Button,
  Modal,
  Badge,
} from 'reactstrap';
// core components

import DemoNavbar from '../../components/Navbars/DemoNavbar.js';
import CardsFooter from '../../components/Footers/CardsFooter.js';
import Background from '../IndexSections/Background';
import TeamList from '../IndexSections/TeamList';
import RowTabs from '../../components/Contents/RowTabs';
import TeamMember from '../../components/Contents/TeamMember';

const Active_Tabs = 1;

class Day extends React.Component {
  day = [
    {
      tabs: 1,
      tabsTitle: 'test1props',
      tabssubTitle: 'test1Subprops',
      opinion: 'test1opinionprops',
      feedback: 'test1feedbackprops',
      etc: 'test1etcprops',
    },
    {
      tabs: 2,
      tabsTitle: 'test2props',
      tabssubTitle: 'test2Subprops',
      opinion: 'test2opinionprops',
      feedback: 'test2feedbackprops',
      etc: 'test2etcprops',
    },
  ];
  state = {
    value: '',
    iconTabs: Active_Tabs,
    plainTabs: Active_Tabs,
    maxTabs: 2,
    TeamInfo: [],
    isLoading: false,
    isDetail: false,
    detailTitle: '',
    TeamMate: [],
    Day_Data: [],
    teamIndex: 0,
    test: ['qwe', 'qwer', 'qwert', 'qwerty'],
  };

  Read_Day_Data(title) {
    teamList_Ref.child('/2020-1/' + title + '/teamDay').on('value', (snap) => {
      console.log(snap.val());
      this.setState({
        Day_Data: snap.val(),
      });
    });
  }

  Read_Team_Member(title) {
    teamList_Ref
      .child('/2020-1/' + title + '/team_member')
      .on('value', (snap) => {
        const Member = snap.val();
        console.log(snap.val());

        for (const i in Member) {
          console.log(i);
          this.setState({
            TeamMate: this.state.TeamMate.concat({
              memberName: i,
            }),
          });
        }
      });

    this.setState({
      isLoading: true,
    });
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.ReadFirebaseforTeam();
    // this.Read_Team_Member();
  }
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  TeamHandleSubmit = (event) => {
    if (this.state.value === '') {
      alert('팀명을 입력해주세요.');
      return;
    }
    this.CreateTeam(this.state.value);
  };

  MemberHandleSubmit = (event) => {
    if (this.state.value === '') {
      alert('팀원을 입력해주세요.');
      event.preventDefault();
      return;
    }
    event.preventDefault();
    this.AddTeamMember(this.state.value);
  };

  AddTeamMember = (Name) => {
    const { detailTitle } = this.state;
    alert(`[${Name}] 님을 추가합니다.`);

    teamList_Ref.child('/2020-1/' + detailTitle + '/team_member/' + Name).set(
      {
        memberName: Name,
      },
      function () {
        alert('complete');
      }
    );
  };

  AddMeetingLog = () => {
    alert(`새로운 회의록을 추가합니다.`);
  };

  CreateTeam(value) {
    console.log(value);
    teamList_Ref.child('/2020-1/' + value).set({
      title: value,
    });
  }

  ReadFirebaseforTeam() {
    teamList_Ref.child('/2020-1/').on('value', (snap) => {
      const Team = snap.val();
      console.log(Team);

      for (const i in Team) {
        this.setState({
          TeamInfo: this.state.TeamInfo.concat({
            title: i,
          }),
        });
      }
    });

    this.setState({
      isLoading: true,
    });
  }

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  OnDetail = (title) => {
    // alert(title);
    this.setState({
      isDetail: true,
      detailTitle: title,
    });

    this.Read_Day_Data(title);
    this.Read_Team_Member(title);
  };

  OffDetail = () => {
    console.log(this.state.team_member);
    this.setState({
      isDetail: false,
      detailTitle: '',
      TeamMate: [],
    });
  };

  DeleteClickHandler = (index, title) => {
    alert(`[${title}]팀을 삭제합니다.`);
    window.location.reload();
    teamList_Ref.child('/2020-1/' + title).remove();
  };

  render() {
    const ready = false;

    return (
      <div>
        <DemoNavbar />
        <Background
          title='공모자의 하루'
          desc='회의 및 프로젝트 진행상황을 보고합니다.'
        />
        {ready ? (
          <h1 style={{ textAlign: 'center' }}>😭작업 중에 있습니다😭</h1>
        ) : (
          <section className='section section-lg pt-lg-0 mt--200'>
            <Container>
              <Col className='mt-5 mt-lg-0' lg='12'>
                {/* Menu */}
                <div className='mb-3'>
                  <h5 className='text-uppercase font-weight-bold text-white'>
                    학기 선택
                  </h5>
                </div>
                <div className='nav-wrapper'>
                  <Nav
                    className='nav-fill flex-column flex-md-row'
                    id='tabs-icons-text'
                    pills
                    role='tablist'
                  >
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.plainTabs === 1}
                        className={classnames('mb-sm-3 mb-md-0', {
                          active: this.state.plainTabs === 1,
                        })}
                        onClick={(e) => this.toggleNavs(e, 'plainTabs', 1)}
                        href='#pablo'
                        role='tab'
                      >
                        20-1학기
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.plainTabs === 2}
                        className={classnames('mb-sm-3 mb-md-0', {
                          active: this.state.plainTabs === 2,
                        })}
                        onClick={(e) => this.toggleNavs(e, 'plainTabs', 2)}
                        href='#pablo'
                        role='tab'
                      >
                        20-2학기
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.plainTabs === 3}
                        className={classnames('mb-sm-3 mb-md-0', {
                          active: this.state.plainTabs === 3,
                        })}
                        onClick={(e) => this.toggleNavs(e, 'plainTabs', 3)}
                        href='#pablo'
                        role='tab'
                      >
                        21-1학기
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <Card className='shadow'>
                  <CardBody>
                    <TabContent activeTab={'plainTabs' + this.state.plainTabs}>
                      <TabPane tabId='plainTabs1'>
                        <Container>
                          {this.state.isDetail ? (
                            <Row>
                              <Col lg='2'>
                                <Button
                                  block
                                  color='primary'
                                  type='button'
                                  onClick={() => this.OffDetail()}
                                >
                                  팀 목록으로
                                </Button>
                              </Col>
                              <Col lg='2'>
                                <Button
                                  block
                                  color='success'
                                  type='button'
                                  onClick={() =>
                                    this.toggleModal('memberModal')
                                  }
                                >
                                  팀원추가
                                </Button>
                                <Modal
                                  className='modal-dialog-centered'
                                  isOpen={this.state.memberModal}
                                  toggle={() => this.toggleModal('memberModal')}
                                >
                                  <div className='modal-header'>
                                    <h6
                                      className='modal-title'
                                      id='modal-title-default'
                                    >
                                      신규 팀원 추가
                                    </h6>
                                    <button
                                      aria-label='Close'
                                      className='close'
                                      data-dismiss='modal'
                                      type='button'
                                      onClick={() =>
                                        this.toggleModal('memberModal')
                                      }
                                    >
                                      <span aria-hidden={true}>×</span>
                                    </button>
                                  </div>
                                  <form onSubmit={this.MemberHandleSubmit}>
                                    <div className='modal-body'>
                                      <input
                                        type='text'
                                        onChange={this.handleChange}
                                      ></input>
                                    </div>
                                    <div className='modal-footer'>
                                      <Button
                                        color='primary'
                                        type='submit'
                                        onClick={() =>
                                          this.toggleModal('memberModal')
                                        }
                                      >
                                        팀원 추가
                                      </Button>
                                      <Button
                                        className='ml-auto'
                                        color='link'
                                        data-dismiss='modal'
                                        type='button'
                                        onClick={() =>
                                          this.toggleModal('memberModal')
                                        }
                                      >
                                        취소
                                      </Button>
                                    </div>
                                  </form>
                                </Modal>
                              </Col>
                              <Col lg='2'>
                                <Button
                                  block
                                  color='info'
                                  type='button'
                                  onClick={() => this.AddMeetingLog()}
                                >
                                  회의록추가
                                </Button>
                              </Col>
                              <Col lg='6'>
                                <Button block color='warning'>
                                  #{this.state.detailTitle}
                                </Button>
                              </Col>
                            </Row>
                          ) : (
                            <Button
                              block
                              className='mb-3'
                              color='primary'
                              type='button'
                              onClick={() => this.toggleModal('defaultModal')}
                            >
                              팀 추가하기
                            </Button>
                          )}
                          <Modal
                            className='modal-dialog-centered'
                            isOpen={this.state.defaultModal}
                            toggle={() => this.toggleModal('defaultModal')}
                          >
                            <div className='modal-header'>
                              <h6
                                className='modal-title'
                                id='modal-title-default'
                              >
                                신규 팀 생성
                              </h6>
                              <button
                                aria-label='Close'
                                className='close'
                                data-dismiss='modal'
                                type='button'
                                onClick={() => this.toggleModal('defaultModal')}
                              >
                                <span aria-hidden={true}>×</span>
                              </button>
                            </div>
                            <form onSubmit={this.TeamHandleSubmit}>
                              <div className='modal-body'>
                                <input
                                  type='text'
                                  onChange={this.handleChange}
                                ></input>
                              </div>
                              <div className='modal-footer'>
                                <Button
                                  color='primary'
                                  type='submit'
                                  onClick={() =>
                                    this.toggleModal('defaultModal')
                                  }
                                >
                                  팀 생성
                                </Button>
                                <Button
                                  className='ml-auto'
                                  color='link'
                                  data-dismiss='modal'
                                  type='button'
                                  onClick={() =>
                                    this.toggleModal('defaultModal')
                                  }
                                >
                                  취소
                                </Button>
                              </div>
                            </form>
                          </Modal>
                          <Row className='justify-content-center'>
                            <Col lg='12'>
                              <Row className='row-grid'>
                                {/* 팀 목록 리스트 뿌려주기 */}
                                {this.state.isLoading ? (
                                  this.state.isDetail ? (
                                    <Col>
                                      <h1>{this.state.detailTitle}</h1>

                                      {/* <TeamMember
                                        detailTitle={this.state.detailTitle}
                                      /> */}
                                      {/* {this.state.TeamMate.map((con) => {
                                        return <div>{con}</div>;
                                      })} */}

                                      {this.state.Day_Data ? (
                                        <RowTabs
                                          day_data={this.state.Day_Data}
                                        />
                                      ) : (
                                        '아직 회의록이 없습니다.'
                                      )}
                                    </Col>
                                  ) : (
                                    this.state.TeamInfo.map((con, i) => {
                                      return (
                                        <TeamList
                                          JoinClickHandler={() =>
                                            this.OnDetail(con.title)
                                          }
                                          DeleteClickHandler={() =>
                                            this.DeleteClickHandler(
                                              i,
                                              con.title
                                            )
                                          }
                                          key={i}
                                          id={con.id}
                                          title={con.title}
                                          description={con.subtitle}
                                        />
                                      );
                                    })
                                  )
                                ) : (
                                  '로딩 중입니다...'
                                )}
                              </Row>
                            </Col>
                          </Row>
                        </Container>
                      </TabPane>
                      <TabPane tabId='plainTabs2'>20-2학기 내용</TabPane>
                      <TabPane tabId='plainTabs3'>21-1학기 내용</TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Container>
          </section>
        )}

        <CardsFooter />
      </div>
    );
  }
}

export default Day;
