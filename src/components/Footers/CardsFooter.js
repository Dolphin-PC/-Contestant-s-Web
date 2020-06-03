/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className='footer has-cards'>
          <Container>
            <Row className='align-items-center justify-content-md-between'>
              <Col md='6'>
                <div className='copyright'>
                  © {new Date().getFullYear()}{' '}
                  <a
                    href='https://github.com/DorPhin-pc?tab=repositories'
                    target='_blank'
                  >
                    Dolphin-PC
                  </a>
                  &emsp;with&emsp;
                  <a
                    href='https://www.creative-tim.com?ref=adsr-footer'
                    target='_blank'
                  >
                    Creative Tim
                  </a>
                </div>
              </Col>
              <Col md='6'>
                <Nav className='nav-footer justify-content-end'>
                  <NavItem>
                    <NavLink>춘천연합동아리 '공모자들'</NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
