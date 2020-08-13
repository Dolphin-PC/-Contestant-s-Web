import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import CardsFooter from 'components/Footers/CardsFooter.js';

// Firebase AUTH

import * as firebase from 'firebase/app';
import 'firebase/auth';

import Landing from './Landing';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  signInWithPassword = (e) => {
    const { email, password } = this.state;

    e.preventDefault();
    console.log(email, password);
    if (email !== '' || password !== '') {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (res) {
          // console.log('login', res);
          window.location.href = '/';
        })
        .catch(function (err) {
          // console.log('failed', err);
          if (err.code === 'auth/user-not-found') {
            alert(
              '해당 이메일이 유효하지 않습니다.\n이메일을 다시 확인해주세요.'
            );
          } else if (err.code === 'auth/wrong-password') {
            alert('비밀번호가 맞지 않습니다.\n비밀번호를 다시 확인해주세요.');
          } else {
            alert('알수없는 오류가 발생했습니다.\n관리자에게 문의해주세요.');
          }
        });
    } else {
      alert('아이디/비밀번호를 입력해주세요.');
    }
  };

  signInWithGoogle() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var user = result.user;
        console.log(user);
      })
      .catch(function (error) {
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
      });
  }
  render() {
    const { user } = this.props;
    return user ? (
      <Landing user={user} />
    ) : (
      <div>
        <DemoNavbar />
        <main ref='main'>
          <section className='section section-shaped section-lg'>
            <div className='shape shape-style-1 bg-gradient-default'>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className='pt-lg-7'>
              <Row className='justify-content-center'>
                <Col lg='5'>
                  <Card className='bg-secondary shadow border-0'>
                    <CardHeader className='bg-white pb-5'>
                      <div className='text-muted text-center mb-3'>
                        <small>Sign in with</small>
                      </div>
                      <div className='btn-wrapper text-center'>
                        <Button
                          className='btn-neutral btn-icon ml-1'
                          color='default'
                          onClick={this.signInWithGoogle}
                        >
                          <span className='btn-inner--icon mr-1'>
                            <img
                              alt='...'
                              src={require('assets/img/icons/common/google.svg')}
                            />
                          </span>
                          <span className='btn-inner--text'>Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className='px-lg-5 py-lg-5'>
                      <div className='text-center text-muted mb-4'>
                        <small>Or sign in with credentials</small>
                      </div>
                      <Form role='form' onSubmit={this.signInWithPassword}>
                        <FormGroup className='mb-3'>
                          <InputGroup className='input-group-alternative'>
                            <InputGroupAddon addonType='prepend'>
                              <InputGroupText>
                                <i className='ni ni-email-83' />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
                              placeholder='Email'
                              type='email'
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className='input-group-alternative'>
                            <InputGroupAddon addonType='prepend'>
                              <InputGroupText>
                                <i className='ni ni-lock-circle-open' />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              onChange={(e) =>
                                this.setState({ password: e.target.value })
                              }
                              placeholder='Password'
                              type='password'
                              autoComplete='off'
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className='text-center'>
                          <Button
                            className='my-4'
                            color='primary'
                            type='button submit'
                          >
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className='mt-3'>
                    <Col xs='6'>
                      <a
                        className='text-light'
                        href='#pablo'
                        onClick={(e) => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className='text-right' xs='6'>
                      <Link to={'/register-page'}>
                        <small>Create new account</small>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps, actions)(Login);
