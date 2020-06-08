import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment);

export default class Curriculum_cal extends Component {
  state = {
    events: this.props.events,
  };

  Add = () => {
    alert('Add');
  };

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
        <button onClick={this.Add}>추가하기</button>
      </div>
    );
  }
}
