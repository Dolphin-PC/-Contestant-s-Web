import React from 'react';
// nodejs library that concatenates classes

// reactstrap components
import { Container } from 'reactstrap';

// core components

import DemoNavbar from '../../components/Navbars/DemoNavbar.js';
import CardsFooter from '../../components/Footers/CardsFooter.js';
import Background from '../IndexSections/Background';
import Curriculum_cal from '../IndexSections/Curriculum_cal';
import moment from 'moment';

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
