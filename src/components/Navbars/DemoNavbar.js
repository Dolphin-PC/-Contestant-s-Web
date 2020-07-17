import React from 'react';
import { Link } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
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
import { FirebaseApp } from '../../config/firebase';

import { connect } from 'react-redux';
import * as actions from '../../actions';

const Nav_Media = [
  {
    DropDownToggleNavTitle: '공모자들',
    media: [
      {
        to: '/curriculum',
        div_className:
          'icon icon-shape bg-gradient-primary rounded-circle text-white',
        i_className: 'ni ni-calendar-grid-58',
        title_className: 'heading text-primary mb-md-1',
        title: '2020 커리큘럼',
        description: '공모자들 2020 계획표입니다.',
      },
      {
        to: '/budget',
        div_className:
          'icon icon-shape bg-gradient-success rounded-circle text-white',
        i_className: 'ni ni-money-coins',
        title_className: 'heading text-success mb-md-1',
        title: '예산 계획과 사용 내역',
        description: '공모자들의 예산내역을 투명하게 공개합니다.',
      },
      {
        to: '/rule',
        div_className:
          'icon icon-shape bg-gradient-warning rounded-circle text-white',
        i_className: 'ni ni-notification-70',
        title_className: 'heading text-warning mb-md-1',
        title: '운영 방안과 규칙',
        description: '공모자들, 이것만은 꼭! 지켜주세요.',
      },
    ],
  },
  {
    DropDownToggleNavTitle: '동아리 소개',
    media: [
      {
        to: '/landing-page',
        div_className:
          'icon icon-shape bg-gradient-info rounded-circle text-white',
        i_className: 'ni ni-spaceship',
        title_className: 'heading text-info mb-md-1',
        title: '공모자들 이란?',
        description: '춘천 유일의 공모전 연합동아리 입니다.',
      },
      {
        to: '/activity',
        div_className:
          'icon icon-shape bg-gradient-success rounded-circle text-white',
        i_className: 'ni ni-collection',
        title_className: 'heading text-success mb-md-1',
        title: '활동 내역',
        description: "'공모자들'의 활약들을 소개합니다.😎",
      },
    ],
  },
  {
    DropDownToggleNavTitle: '활동하기',
    media: [
      {
        to: '/day',
        div_className:
          'icon icon-shape bg-gradient-primary rounded-circle text-white',
        i_className: 'ni ni-single-copy-04',
        title_className: 'heading text-primary mb-md-1',
        title: '공모자의 하루',
        description: '회의 및 프로젝트 진행사항을 보고합니다.',
      },
      {
        to: '/idea',
        div_className:
          'on icon-shape bg-gradient-danger rounded-circle text-white',
        i_className: 'ni ni-bulb-61',
        title_className: 'heading text-danger mb-md-1',
        title: '아이디어가 떠올랐어요!',
        description: '아이디어가 있다면 자유롭게 작성해보아요.',
      },
    ],
  },
];

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

  onLogOut = () => {
    const { user, logoutUserData } = this.props;
    console.log(user);

    firebase
      .auth()
      .signOut()
      .then(function () {
        logoutUserData();
      });
  };

  render() {
    //firebase OAuth
    const { user } = this.props;
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
                  {Nav_Media.map((con, i) => {
                    return (
                      <UncontrolledDropdown nav key={i}>
                        <DropdownToggle nav>
                          <i className='ni ni-ui-04 d-lg-none mr-1' />
                          <span className='nav-link-inner--text'>
                            {con.DropDownToggleNavTitle}
                          </span>
                        </DropdownToggle>
                        <DropdownMenu className='dropdown-menu-xl'>
                          <div className='dropdown-menu-inner'>
                            {con.media.map((media_con, i) => {
                              return (
                                <Media
                                  key={i}
                                  className='d-flex align-items-center'
                                  to={media_con.to}
                                  tag={Link}
                                >
                                  <div className={media_con.div_className}>
                                    <i className={media_con.i_className} />
                                  </div>
                                  <Media body className='ml-3'>
                                    <h6 className={media_con.title_className}>
                                      {media_con.title}
                                    </h6>
                                    <p className='description d-none d-md-inline-block mb-0'>
                                      {media_con.description}
                                    </p>
                                  </Media>
                                </Media>
                              );
                            })}
                          </div>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    );
                  })}
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
                        {user.userName}
                      </Badge>
                    ) : (
                      ''
                    )}
                  </NavItem>
                  <NavItem className='d-none d-lg-block ml-lg-4'>
                    {user !== '' ? (
                      <Button
                        className='btn-neutral btn-icon'
                        color='default'
                        onClick={this.onLogOut}
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

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps, actions)(DemoNavbar);
