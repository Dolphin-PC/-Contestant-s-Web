import React from 'react';
// nodejs library that concatenates classes

// reactstrap components
import { Container } from 'reactstrap';

// core components

import DemoNavbar from '../../components/Navbars/DemoNavbar.js';
import CardsFooter from '../../components/Footers/CardsFooter.js';
import Background from '../IndexSections/Background';
import Curriculum_cal from '../IndexSections/Curriculum_cal';

import { curriculum_Ref } from '../../config/firebase';

import Calendar from 'tui-calendar'; /* ES6 */
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

import lottieCalendar from '../../lotties/Calendar.json';

// TODO: 캘린더 작업하기
// https://ui.toast.com/tui-calendar/
class Curriculum extends React.Component {
  state = {
    title: '2020커리큘럼',
    description: "'공모자들'의 2020년 계획표입니다.",
    plans: [],
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.ReadFirebaseforPlan();
    this.Calendar();
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
    });
  }

  Calendar() {
    var calendar = new Calendar('#calendar', {
      defaultView: 'month',
      taskView: true,
      template: {
        monthDayname: function (dayname) {
          return (
            '<span class="calendar-week-dayname-name">' +
            dayname.label +
            '</span>'
          );
        },
      },
    });

    calendar.createSchedules([
      {
        id: '1',
        calendarId: '1',
        title: 'my schedule',
        category: 'time',
        dueDateClass: '',
        start: '2020-07-18T22:30:00+09:00',
        end: '2020-07-19T02:30:00+09:00',
      },
      {
        id: '2',
        calendarId: '1',
        title: 'second schedule',
        category: 'time',
        dueDateClass: '',
        start: '2020-07-19T17:30:00+09:00',
        end: '2020-07-24T17:31:00+09:00',
        isReadOnly: true, // schedule is read-only
      },
    ]);
  }

  render() {
    return (
      <div>
        <DemoNavbar />
        <Background
          title={this.state.title}
          desc={this.state.description}
          lottieName={lottieCalendar}
          lottieSize='100'
        />
        <Container id='calendar' />
        <CardsFooter />
      </div>
    );
  }
}

export default Curriculum;
