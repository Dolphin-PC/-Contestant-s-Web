import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import { dbRef, teamList_Ref, fireBase } from '../../config/firebase';

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
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

var DatePicker = require('reactstrap-date-picker');

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TeamInfo: [],
      isLoading: false,
      isDetail: false,
      detailTitle: '',
      TeamMate: [],
      Day_Data: [],
      Day_Data_test: [],
      teamIndex: 0,
      Season: [],
      selectedSeason: '',
      date: new Date().toISOString().split('T')[0],
      selectedMeetingLogName: '',
      value: '',
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

    this.readSeason();
  }

  readSeason() {
    teamList_Ref.once('value', (snap) => {
      for (const i in snap.val()) {
        console.log(i);
        this.setState({
          Season: this.state.Season.concat({
            season: i,
          }),
          selectedSeason: i,
        });
      }
    });
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

    teamList_Ref
      .child(
        `${this.state.selectedSeason}/` + detailTitle + '/team_member/' + Name
      )
      .set(
        {
          memberName: Name,
        },
        function () {
          alert('추가 완료!');
        }
      );
  };

  addMeetingLog = (subTitle) => {
    const { detailTitle, date, selectedSeason, dayDataCount } = this.state;
    alert('새로운 회의록을 추가합니다.');

    teamList_Ref.child(`${selectedSeason}/${detailTitle}/teamDay/${date}`).set({
      tabsTitle: date,
      tabs: dayDataCount + 1,
    });
  };

  CreateTeam(value) {
    console.log(value);
    teamList_Ref.child(`${this.state.selectedSeason}/` + value).set({
      title: value,
    });
  }

  readTeam(select) {
    teamList_Ref.child(`${select}/`).once('value', (snap) => {
      this.setState({
        TeamInfo: [],
      });
      for (const i in snap.val()) {
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

  Read_Day_Data(title) {
    var count = 0;
    teamList_Ref
      .child(`${this.state.selectedSeason}/${title}/teamDay`)
      .once('value', (snap) => {
        for (const i in snap.val()) {
          teamList_Ref
            .child(`${this.state.selectedSeason}/` + title + '/teamDay/' + i)
            .once('value', (snap) => {
              const data = snap.val();
              this.setState({
                Day_Data: this.state.Day_Data.concat({
                  tabsTitle: data.tabsTitle,
                  tabsSubTitle: data.tabsSubTitle,
                  opinion: data.opinion,
                  feedback: data.feedback,
                  etc: data.etc,
                  tabs: data.tabs,
                }),
              });
            });
          count += 1;
        }
        this.setState({
          dayDataCount: count,
        });
      });
  }

  Read_Team_Member(title) {
    teamList_Ref
      .child(`${this.state.selectedSeason}/${title}/team_member`)
      .once('value', (snap) => {
        const Member = snap.val();
        console.log(snap.val());

        for (const i in Member) {
          this.setState({
            TeamMate: this.state.TeamMate.concat({
              name: i,
            }),
          });
        }
      });
    this.setState({
      isLoading: true,
    });
  }

  toggleNavs = (e, state, index, selectName) => {
    e.preventDefault();
    this.setState({
      [state]: index,
      selectedSeason: selectName,
    });
    this.readTeam(selectName);
  };

  OnDetail = (title) => {
    this.Read_Team_Member(title);
    this.Read_Day_Data(title);
    // alert(title);
    this.setState({
      isDetail: true,
      detailTitle: title,
    });
  };

  OffDetail = () => {
    console.log(this.state.team_member);

    this.setState({
      isDetail: false,
      detailTitle: '',
      TeamMate: [],
      Day_Data: [],
    });
  };

  DeleteClickHandler = (index, title) => {
    alert(`[${title}]팀을 삭제합니다.`);
    window.location.reload();
    teamList_Ref.child(`${this.state.selectedSeason}/` + title).remove();
  };

  seasonHandleSubmit = (event) => {
    if (this.state.value === '') {
      alert('시즌 이름을 입력해주세요.');
      event.preventDefault();
      return;
    }

    this.addSeason(this.state.value);
  };

  selectedMeetingLog = (name) => {
    this.setState({
      selectedMeetingLogName: name,
    });
  };

  addSeason(seasonName) {
    teamList_Ref.child(`${seasonName}/DUMMY`).set({
      title: '새로운 팀 생성 후, 삭제해주세요.',
    });
  }
  trashClickEvent = () => {
    const { selectedSeason, detailTitle, selectedMeetingLogName } = this.state;
    console.log('trash');
    confirmAlert({
      title: '해당 회의록을 삭제하시겠습니까?',
      message: '삭제된 이후에는 복구가 불가능합니다.',
      buttons: [
        {
          label: '삭제',
          onClick: () => {
            // console.log(selectedSeason, detailTitle, selectedMeetingLogName);
            teamList_Ref
              .child(
                `${selectedSeason}/${detailTitle}/teamDay/${selectedMeetingLogName}`
              )
              .remove();
            alert('삭제되었습니다.');
            window.location.reload();
          },
        },
        {
          label: '취소',
          onClick: () => {},
        },
      ],
    });
  };
  // TODO: 회의록 편집(isEnableEdit ? textarea : text)

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
                    학기 선택&emsp;
                    <Badge
                      color='primary'
                      pill
                      className='mr-1'
                      type='button'
                      onClick={() => this.toggleModal('seasonModal')}
                    >
                      학기 추가
                    </Badge>
                    <Modal
                      className='modal-dialog-centered'
                      isOpen={this.state.seasonModal}
                      toggle={() => this.toggleModal('seasonModal')}
                    >
                      <div className='modal-header'>
                        <h6 className='modal-title' id='modal-title-default'>
                          학기 추가
                        </h6>
                        <button
                          aria-label='Close'
                          className='close'
                          data-dismiss='modal'
                          type='button'
                          onClick={() => this.toggleModal('seasonModal')}
                        >
                          <span aria-hidden={true}>×</span>
                        </button>
                      </div>
                      <form onSubmit={this.seasonHandleSubmit}>
                        <div className='modal-body'>
                          <input
                            type='text'
                            onChange={this.handleChange}
                            placeholder='학기 명을 입력해주세요.'
                          ></input>
                        </div>
                        <div className='modal-footer'>
                          <Button
                            color='primary'
                            type='submit'
                            onClick={() => this.toggleModal('seasonModal')}
                          >
                            작성
                          </Button>
                          <Button
                            className='ml-auto'
                            color='link'
                            data-dismiss='modal'
                            type='button'
                            onClick={() => this.toggleModal('seasonModal')}
                          >
                            취소
                          </Button>
                        </div>
                      </form>
                    </Modal>
                  </h5>
                </div>
                <div className='nav-wrapper'>
                  <Nav
                    className='nav-fill flex-column flex-md-row'
                    id='tabs-icons-text'
                    pills
                    role='tablist'
                  >
                    {this.state.Season.map((con, i) => {
                      return (
                        <NavItem key={i}>
                          <NavLink
                            aria-selected={this.state.seasonPlainTabs === i + 1}
                            className={classnames('mb-sm-3 mb-md-0', {
                              active: this.state.seasonPlainTabs === i + 1,
                            })}
                            onClick={(e) =>
                              this.toggleNavs(
                                e,
                                'seasonPlainTabs',
                                i + 1,
                                con.season
                              )
                            }
                            href='#pablo'
                            role='tab'
                          >
                            {con.season}
                          </NavLink>
                        </NavItem>
                      );
                    })}
                  </Nav>
                </div>
                <Card className='shadow'>
                  <CardBody>
                    <TabContent activeTab={'plainTabs' + this.state.plainTabs}>
                      <TabPane tabId={'plainTabs' + this.state.plainTabs}>
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
                                        placeholder='팀원 이름을 입력해주세요.'
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
                                  onClick={() =>
                                    this.toggleModal('meetingLogModal')
                                  }
                                >
                                  회의록추가
                                </Button>
                                <Modal
                                  className='modal-dialog-centered'
                                  isOpen={this.state.meetingLogModal}
                                  toggle={() =>
                                    this.toggleModal('meetingLogModal')
                                  }
                                >
                                  <div className='modal-header'>
                                    <h6
                                      className='modal-title'
                                      id='modal-title-default'
                                    >
                                      회의록 작성
                                    </h6>
                                    <button
                                      aria-label='Close'
                                      className='close'
                                      data-dismiss='modal'
                                      type='button'
                                      onClick={() =>
                                        this.toggleModal('meetingLogModal')
                                      }
                                    >
                                      <span aria-hidden={true}>×</span>
                                    </button>
                                  </div>
                                  <form onSubmit={this.addMeetingLog}>
                                    <div className='modal-body'>
                                      <small className='text-uppercase text-muted font-weight-bold'>
                                        회의록 작성 날짜
                                        <br />
                                        <h4 className='display-4 mb-0'>
                                          {this.state.date}
                                        </h4>
                                      </small>
                                    </div>
                                    <div className='modal-footer'>
                                      <Button
                                        color='primary'
                                        type='submit'
                                        onClick={() =>
                                          this.toggleModal('meetingLogModal')
                                        }
                                      >
                                        작성
                                      </Button>
                                      <Button
                                        className='ml-auto'
                                        color='link'
                                        data-dismiss='modal'
                                        type='button'
                                        onClick={() =>
                                          this.toggleModal('meetingLogModal')
                                        }
                                      >
                                        취소
                                      </Button>
                                    </div>
                                  </form>
                                </Modal>
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
                                  placeholder='팀 이름을 입력해주세요.'
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
                                      {this.state.TeamMate.map((con, i) => {
                                        return (
                                          <Badge
                                            color='primary'
                                            pill
                                            className='mr-1'
                                            key={i}
                                          >
                                            {con.name}
                                          </Badge>
                                        );
                                      })}
                                      <RowTabs
                                        day_data={this.state.Day_Data}
                                        trashClickEvent={this.trashClickEvent}
                                        changeSelectedName={
                                          this.selectedMeetingLog
                                        }
                                      />
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
                                  '로딩 중입니다...\n시즌을 선택해주세요.'
                                )}
                              </Row>
                            </Col>
                          </Row>
                        </Container>
                      </TabPane>
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
