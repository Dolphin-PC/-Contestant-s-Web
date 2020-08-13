import React, { useState } from 'react';

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
import SimpleFooter from 'components/Footers/SimpleFooter.js';
import * as firebase from 'firebase/app';
import { UserDBRef } from '../../config/firebase';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(name, email, password);
    if (name != null) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function (res) {
          var uid = res.user.uid;
          var key = name + '(' + uid + ')';
          // console.log('회원가입 성공');
          // console.log(key);
          UserDBRef.child(`${key}/`).set({
            isAuth: false,
            isSupporter: false,
            userEmail: email,
            userName: name,
            userUID: uid,
          });
          alert('회원가입이 완료되었습니다.\n로그인 페이지로 이동합니다.');
          window.location.href = '/login-page';
        })
        .catch(function (err) {
          if (err.code === 'auth/email-already-in-use') {
            alert('이메일이 중복됩니다.\n다른 이메일주소를 이용해주세요.');
          } else if (err.code === 'auth/weak-password') {
            alert('6자리 이상의 비밀번호를 이용해주세요.');
          } else {
            alert('알수없는 오류가 발생했습니다.\n관리자에게 문의해주세요.');
            console.log(err.code, '=>', err.message);
          }
        });
    }
  };
  return (
    <div>
      <DemoNavbar />

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
                    <small>Sign up with</small>
                  </div>
                  <div className='text-center'>
                    <Button
                      className='btn-neutral btn-icon ml-1'
                      color='default'
                      href='#pablo'
                      onClick={(e) => e.preventDefault()}
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
                    <small>Or sign up with credentials</small>
                  </div>
                  <Form onSubmit={handleRegister}>
                    <FormGroup>
                      <InputGroup className='input-group-alternative mb-3'>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='ni ni-hat-3' />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          onChange={(e) => setName(e.target.value)}
                          placeholder='Name'
                          type='text'
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className='input-group-alternative mb-3'>
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='ni ni-email-83' />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          onChange={(e) => setEmail(e.target.value)}
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
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder='Password'
                          type='password'
                          autoComplete='off'
                        />
                      </InputGroup>
                    </FormGroup>
                    <div className='text-center'>
                      <Button className='mt-4' color='primary' type='submit'>
                        Create account
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <SimpleFooter />
    </div>
  );
}

export default Register;
