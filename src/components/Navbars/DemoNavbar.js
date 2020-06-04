import React from 'react';
import { Link } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Badge,
} from 'reactstrap';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseConfig } from '../../config/dev';
import { FirebaseApp } from '../../config/firebase';

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: '',
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out',
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: '',
    });
  };

  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <>
        <header className='header-global'>
          <Navbar
            className='navbar-main navbar-transparent navbar-light headroom'
            expand='lg'
            id='navbar-main'
          >
            <Container>
              {/* 네비게이션 로고 */}
              <NavbarBrand className='mr-lg-6' to='/' tag={Link}>
                <img
                  alt='...'
                  src={require('assets/img/brand/logo.png')}
                  width='auto'
                />
              </NavbarBrand>
              <button className='navbar-toggler' id='navbar_global'>
                <span className='navbar-toggler-icon' />
              </button>
              <UncontrolledCollapse
                toggler='#navbar_global'
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className='navbar-collapse-header'>
                  <Row>
                    <Col className='collapse-brand' xs='6'>
                      <Link to='/'>
                        <img
                          alt='...'
                          src={require('assets/img/brand/logo_2.png')}
                        />
                      </Link>
                    </Col>
                    <Col className='collapse-close' xs='6'>
                      <button className='navbar-toggler' id='navbar_global'>
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className='navbar-nav-hover align-items-lg-center' navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className='ni ni-ui-04 d-lg-none mr-1' />
                      <span className='nav-link-inner--text'>공모자들</span>
                    </DropdownToggle>
                    <DropdownMenu className='dropdown-menu-xl'>
                      <div className='dropdown-menu-inner'>
                        <Media
                          className='d-flex align-items-center'
                          to='/curriculum'
                          tag={Link}
                        >
                          <div className='icon icon-shape bg-gradient-primary rounded-circle text-white'>
                            <i className='ni ni-calendar-grid-58' />
                          </div>
                          <Media body className='ml-3'>
                            <h6 className='heading text-primary mb-md-1'>
                              2020 커리큘럼
                            </h6>
                            <p className='description d-none d-md-inline-block mb-0'>
                              공모자들 2020 계획표입니다.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className='d-flex align-items-center'
                          to='/budget'
                          tag={Link}
                        >
                          <div className='icon icon-shape bg-gradient-success rounded-circle text-white'>
                            <i className='ni ni-money-coins' />
                          </div>
                          <Media body className='ml-3'>
                            <h6 className='heading text-primary mb-md-1'>
                              예산 계획과 사용 내역
                            </h6>
                            <p className='description d-none d-md-inline-block mb-0'>
                              공모자들의 예산내역을 투명하게 공개합니다.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className='d-flex align-items-center'
                          to='/rule'
                          tag={Link}
                        >
                          <div className='icon icon-shape bg-gradient-warning rounded-circle text-white'>
                            <i className='ni ni-notification-70' />
                          </div>
                          <Media body className='ml-3'>
                            <h6 className='heading text-warning mb-md-1'>
                              운영 방안과 규칙
                            </h6>
                            <p className='description d-none d-md-inline-block mb-0'>
                              공모자들, 이것만은 꼭! 지켜주세요.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className='ni ni-ui-04 d-lg-none mr-1' />
                      <span className='nav-link-inner--text'>동아리 소개</span>
                    </DropdownToggle>
                    <DropdownMenu className='dropdown-menu-xl'>
                      <div className='dropdown-menu-inner'>
                        <Media
                          className='d-flex align-items-center'
                          to='/landing-page'
                          tag={Link}
                        >
                          <div className='icon icon-shape bg-gradient-info rounded-circle text-white'>
                            <i className='ni ni-spaceship' />
                          </div>
                          <Media body className='ml-3'>
                            <h6 className='heading text-info mb-md-1'>
                              공모자들 이란?
                            </h6>
                            <p className='description d-none d-md-inline-block mb-0'>
                              춘천 유일의 공모전 연합동아리 입니다.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className='d-flex align-items-center'
                          to='/activity'
                          tag={Link}
                        >
                          <div className='icon icon-shape bg-gradient-success rounded-circle text-white'>
                            <i className='ni ni-collection' />
                          </div>
                          <Media body className='ml-3'>
                            <h6 className='heading text-success mb-md-1'>
                              활동 내역
                            </h6>
                            <p className='description d-none d-md-inline-block mb-0'>
                              '공모자들'의 활약들을 소개합니다.😎
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className='ni ni-ui-04 d-lg-none mr-1' />
                      <span className='nav-link-inner--text'>활동하기</span>
                    </DropdownToggle>
                    <DropdownMenu className='dropdown-menu-xl'>
                      <div className='dropdown-menu-inner'>
                        <Media
                          className='d-flex align-items-center'
                          to='/day'
                          tag={Link}
                        >
                          <div className='icon icon-shape bg-gradient-primary rounded-circle text-white'>
                            <i className='ni ni-single-copy-04' />
                          </div>
                          <Media body className='ml-3'>
                            <h6 className='heading text-primary mb-md-1'>
                              공모자의 하루
                            </h6>
                            <p className='description d-none d-md-inline-block mb-0'>
                              회의 및 프로젝트 진행사항을 보고합니다.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className='d-flex align-items-center'
                          to='/idea'
                          tag={Link}
                        >
                          <div className='icon icon-shape bg-gradient-danger rounded-circle text-white'>
                            <i className='ni ni-bulb-61' />
                          </div>
                          <Media body className='ml-3'>
                            <h6 className='heading text-danger mb-md-1'>
                              아이디어가 떠올랐어요!
                            </h6>
                            <p className='description d-none d-md-inline-block mb-0'>
                              아이디어가 있다면 자유롭게 작성해보아요.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className='align-items-lg-center ml-lg-auto' navbar>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      href='https://instagram.com/gongmoja_official?igshid=i0g35ajrhg2v'
                      id='tooltip356693867'
                      target='_blank'
                    >
                      <i className='fa fa-instagram' />
                      <span className='nav-link-inner--text d-lg-none ml-2'>
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target='tooltip356693867'>
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    {user ? (
                      <Badge className='text-uppercase' color='info' pill>
                        {user.displayName}
                      </Badge>
                    ) : (
                      ''
                    )}
                  </NavItem>
                  <NavItem className='d-none d-lg-block ml-lg-4'>
                    {user ? (
                      <Button
                        className='btn-neutral btn-icon'
                        color='default'
                        onClick={signOut}
                      >
                        <span className='btn-inner--icon'>
                          <i className='fa fa-user mr-2' />
                        </span>
                        <span className='nav-link-inner--text ml-1'>
                          LOGOUT
                        </span>
                      </Button>
                    ) : (
                      <Link to={'/login-page'}>
                        <Button
                          className='btn-neutral btn-icon'
                          color='default'
                        >
                          <span className='btn-inner--icon'>
                            <i className='fa fa-user mr-2' />
                          </span>
                          <span className='nav-link-inner--text ml-1'>
                            LOGIN
                          </span>
                        </Button>
                      </Link>
                    )}
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

const firebaseAppAuth = FirebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(DemoNavbar);
