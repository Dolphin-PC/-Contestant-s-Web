import React from 'react';
// nodejs library that concatenates classes

// reactstrap components
import { Container, Row } from 'reactstrap';
import Button from '@material-ui/core/Button';

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

import moment from 'moment';

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

// TODO: 캘린더 작업하기
// https://ui.toast.com/tui-calendar/
let calendar;

class Curriculum extends React.Component {
  state = {
    title: '2020커리큘럼',
    description: "'공모자들'의 2020년 계획표입니다.",
    plans: [],
    Month: '',
    Year: '',
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

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
    var templates = {
      popupIsAllDay: function () {
        return 'All Day';
      },
      titlePlaceholder: function () {
        return 'Subject';
      },
      locationPlaceholder: function () {
        return 'Location';
      },
      startDatePlaceholder: function () {
        return 'Start date';
      },
      endDatePlaceholder: function () {
        return 'End date';
      },
      popupSave: function () {
        calendar.on('beforeCreateSchedule', (scheduleData) => {
          const schedule = {
            calendarId: '1',
            id: String(Math.random() * 100000000000000000),
            title: scheduleData.title,
            isAllDay: scheduleData.isAllDay,
            start: scheduleData.start,
            end: scheduleData.end,
            category: scheduleData.isAllDay ? 'allday' : 'time',
          };
          curriculum_Ref.push({
            calendarId: schedule.calendarId,
            id: schedule.id,
            title: schedule.title,
            isAllDay: schedule.isAllDay,
            start: schedule.start.toDate().toString(),
            end: schedule.end.toDate().toString(),
            category: schedule.isAllDay ? 'allday' : 'time',
          });
          console.log('schedule Add Event', schedule);

          calendar.createSchedules([schedule]);

          calendar.off('beforeCreateSchedule');

          // console.log(schedule);
          // console.log('getTime', schedule.getTime());
          // console.log('toLocalTime', schedule.start.toLocalTime());
          // console.log('toDate', schedule.start.toDate());
          // console.log('toUTCString', schedule.start.toUTCString());
          // console.log('getUTCTime', schedule.start.getUTCTime());
        });
        return 'Save';
      },
      popupUpdate: function () {
        calendar.on('beforeUpdateSchedule', function (event) {
          var schedule = event.schedule;
          var changes = event.changes;

          calendar.updateSchedule(schedule.id, schedule.calendarId, changes);
        });
        return 'Update';
      },
      popupDetailLocation: function (schedule) {
        return 'Location : ' + schedule.location;
      },
      popupDetailUser: function (schedule) {
        return 'User : ' + (schedule.attendees || []).join(', ');
      },
      popupDetailState: function (schedule) {
        return 'State : ' + schedule.state || 'Busy';
      },
      popupDetailRepeat: function (schedule) {
        return 'Repeat : ' + schedule.recurrenceRule;
      },
      popupDetailBody: function (schedule) {
        return 'Body : ' + schedule.body;
      },
      popupEdit: function () {
        return 'Edit';
      },
      popupDelete: function () {
        calendar.on('beforeDeleteSchedule', (scheduleData) => {
          const { schedule, start, end } = scheduleData;

          schedule.start = start;
          schedule.end = end;
          calendar.deleteSchedule(schedule.id, schedule.calendarId);
        });
        return 'Delete';
      },
    };
    calendar = new Calendar('#calendar', {
      defaultView: 'month',
      template: templates,
      useCreationPopup: true,
      useDetailPopup: true,
      isReadOnly: false,
    });

    calendar.createSchedules([
      {
        id: '1',
        calendarId: '1',
        title: 'my schedule',
        category: 'time',
        dueDateClass: '',
        start: '2020-08-18T22:30:00+09:00',
        end: '2020-08-19T02:30:00+09:00',
      },
      {
        id: '2',
        calendarId: '1',
        title: 'second schedule',
        category: 'time',
        dueDateClass: '',
        start: '2020-08-18T17:30:00+09:00',
        end: '2020-08-19T17:31:00+09:00',
      },
    ]);

    this.setState({
      Month: calendar.getDate().getMonth() + 1,
      Year: calendar.getDate().getFullYear(),
    });
  }

  handleMonth(value) {
    if (value === -1) {
      calendar.prev();
      this.setState({
        Year: calendar.getDate().getFullYear(),
        Month: calendar.getDate().getMonth() + 1,
      });
    } else if (value === 1) {
      calendar.next();
      this.setState({
        Year: calendar.getDate().getFullYear(),
        Month: calendar.getDate().getMonth() + 1,
      });
    } else {
      calendar.today();
      this.setState({
        Year: calendar.getDate().getFullYear(),
        Month: calendar.getDate().getMonth() + 1,
      });
    }
  }

  render() {
    const { Year, Month } = this.state;
    return (
      <div>
        <DemoNavbar />
        <Background
          title={this.state.title}
          desc={this.state.description}
          lottieName={lottieCalendar}
          lottieSize='100'
        />

        <Container id='calendar'>
          <Row>
            <Button
              onClick={() => this.handleMonth(-1)}
              startIcon={<KeyboardArrowLeftIcon />}
            />
            <Button
              onClick={() => this.handleMonth(1)}
              startIcon={<KeyboardArrowRightIcon />}
            />
            <Button onClick={() => this.handleMonth(0)}>TODAY</Button>
            &emsp;
            <h1>
              {Year}.{Month}
            </h1>
          </Row>
        </Container>
        <CardsFooter />
      </div>
    );
  }
}

export default Curriculum;
