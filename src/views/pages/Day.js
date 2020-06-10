import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import { teamList_Ref } from '../../config/firebase';

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
} from 'reactstrap';

// core components

import DemoNavbar from '../../components/Navbars/DemoNavbar.js';
import CardsFooter from '../../components/Footers/CardsFooter.js';
import Background from '../IndexSections/Background';
import TeamList from '../IndexSections/TeamList';

const Active_Tabs = 1;

class Day extends React.Component {
  state = {
    value: '',
    iconTabs: Active_Tabs,
    plainTabs: Active_Tabs,
    maxTabs: 2,
    TeamInfo: [],
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.ReadFirebaseforTeam();
  }
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    if (this.state.value === '') {
      alert('팀명을 입력해주세요.');
      event.preventDefault();
      return;
    }
    this.UpdateTeamtoFirebase(this.state.value);
    event.preventDefault();
  };
  UpdateTeamtoFirebase(value) {
    const { TeamInfo } = this.state;

    console.log(value);
    for (const i in this.state.TeamInfo) {
      // console.log(this.state.TeamInfo[i].title);
      if (value === this.state.TeamInfo[i].title) {
        alert('중복된 팀명입니다.');
        return;
      }
    }
    this.setState({
      value: '',
      TeamInfo: TeamInfo.concat({
        id: this.state.value,
        title: this.state.value,
        subtitle: '',
      }),
    });
    teamList_Ref.child('/' + value).set({
      title: value,
    });
  }

  ReadFirebaseforTeam() {
    teamList_Ref.on('value', (snap) => {
      var Team = snap.val();
      // for (const i in Team) {
      //   console.log(Team[i].title);
      // }
      for (const i in Team) {
        const { TeamInfo } = this.state;
        this.setState({
          TeamInfo: TeamInfo.concat({
            title: Team[i].title,
          }),
        });
      }
      console.log(Team);
    });
  }

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  render() {
    const ready = true;

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
                          <Button
                            block
                            className='mb-3'
                            color='primary'
                            type='button'
                            onClick={() => this.toggleModal('defaultModal')}
                          >
                            팀 추가하기
                          </Button>
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
                            <form onSubmit={this.handleSubmit}>
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
                                {this.state.TeamInfo.map((con, i) => {
                                  return (
                                    <TeamList
                                      key={i}
                                      id={con.id}
                                      title={con.title}
                                      description={con.subtitle}
                                    />
                                  );
                                })}
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
