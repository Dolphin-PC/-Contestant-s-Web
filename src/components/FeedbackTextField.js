import React from 'react';
import { Button, Col, Row } from 'reactstrap';

import TextField from '@material-ui/core/TextField';
import '../styles/main.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as Ref from '../config/firebase';

class FeedbackTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleOnClick = () => {
    const { selectedSeason, detailTitle, meetingLog, user } = this.props;
    var newPostKey = Ref.teamList_Ref
      .child(`${selectedSeason}/${detailTitle}/teamDay/${meetingLog}/feedbacks`)
      .push().key;

    Ref.teamList_Ref
      .child(
        `${selectedSeason}/${detailTitle}/teamDay/${meetingLog}/feedbacks/${newPostKey}`
      )
      .set({
        feedbackUID: newPostKey,
        userName: user.userName,
        userUID: user.userUID,
        date: new Date().toISOString().split('T')[0],
        feedback: this.state.value,
      });
    this.setState({ value: '' });
  };
  render() {
    return (
      <form noValidate autoComplete='off'>
        <Row>
          <Col lg='9'>
            <TextField
              value={this.state.value}
              style={{ width: '100%' }}
              id='outlined-textarea'
              label='Write FeedBack'
              placeholder='피드백 내용을 써주세요.'
              multiline
              variant='outlined'
              onChange={this.handleChange}
            />
          </Col>
          <Col lg='3'>
            <Button
              color='primary'
              outline
              id='FeedbackButton'
              onClick={this.handleOnClick}
            >
              POST
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps, actions)(FeedbackTextField);
