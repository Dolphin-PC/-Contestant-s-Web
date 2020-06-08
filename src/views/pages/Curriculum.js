import React from 'react';
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
import Curriculum_cal from '../IndexSections/Curriculum_cal';
import moment from 'moment';

import { connect } from 'react-redux';
import * as actions from '../../actions';

const events = [
  {
    start: moment().toDate(),
    end: moment().add(1, 'days').toDate(),
    title: 'title',
  },
];

class Curriculum extends React.Component {
  state = {
    title: '2020커리큘럼',
    description: "'공모자들'의 2020년 계획표입니다.",
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }
  render() {
    return (
      <div>
        <DemoNavbar />
        <Background title={this.state.title} desc={this.state.description} />
        <Container>
          <Curriculum_cal events={events} />
        </Container>
        <CardsFooter />
      </div>
    );
  }
}

export default Curriculum;
