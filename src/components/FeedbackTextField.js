import React from 'react';
import { Button, Col, Row } from 'reactstrap';

import TextField from '@material-ui/core/TextField';
import '../styles/main.css';
import { connect } from 'react-redux';
import * as actions from '../actions';

const initialUserState = {
  isAuth: false,
  isSupporter: false,
  userEmail: '',
  userName: '',
  userUID: '',
};

class FeedbackTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      user: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleOnClick = () => {};
  render() {
    return (
      <form noValidate autoComplete='off'>
        <Row>
          <Col lg='9'>
            <TextField
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
