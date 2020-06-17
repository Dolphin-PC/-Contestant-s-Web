import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { curriculum_Ref } from '../../config/firebase';

const localizer = momentLocalizer(moment);
export default class Curriculum_cal extends Component {
  state = {
    events: this.props.events,
    plans: [],
  };

  componentDidMount() {
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
      console.log(this.state.events);
    });
  }
  eventStyleGetter(event, start, end, isSelected) {
    console.log(event);
    var backgroundColor = '#' + event.hexColor;
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block',
    };
    return {
      style: style,
    };
  }
  render() {
    return (
      <div>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView='month'
          events={this.state.events}
          startAccessor='start'
          endAccessor='end'
          style={{ height: '100vh' }}
        />
      </div>
    );
  }
}
