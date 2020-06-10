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

import { curriculum_Ref } from '../../config/firebase';

const events = [
  {
    start: '2020/06/19',
    end: '2020/06/25',
    title: 'test',
  },
];

class Curriculum extends React.Component {
  state = {
    title: '2020커리큘럼',
    description: "'공모자들'의 2020년 계획표입니다.",
    plans: [
      {
        start: '2020/06/19',
        end: '2020/06/25',
        title: 'test',
      },
    ],
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.ReadFirebaseforPlan();
  }

  ReadFirebaseforPlan() {
    curriculum_Ref.on('value', (snap) => {
      var plan = snap.val();
      for (const i in plan) {
        const { plans } = this.state;
        this.setState({
          plans: plans.concat({
            start: plan[i].start_date,
            end: plan[i].end_date,
            title: plan[i].contest_name,
          }),
        });
      }
      console.log(this.state.plans);
    });
  }
  render() {
    console.log(this.state.plans);
    console.log(events);
    return (
      <div>
        <DemoNavbar />
        <Background title={this.state.title} desc={this.state.description} />
        <Container>
          <Curriculum_cal events={this.state.plans} />
        </Container>
        <CardsFooter />
      </div>
    );
  }
}

export default Curriculum;
