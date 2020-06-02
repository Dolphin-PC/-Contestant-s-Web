import React, { Component } from 'react';
import PropTypes from 'prop-types';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
} from 'reactstrap';

export default class ButtonPopover extends Component {
  render() {
    return (
      <div>
        <Button color={this.props.color} id={this.props.PopID} size='sm'>
          {this.props.title}
        </Button>
        <UncontrolledPopover
          trigger='focus'
          placement='top'
          target={this.props.PopID}
        >
          <PopoverHeader>{this.props.PH_text}</PopoverHeader>
          <PopoverBody>{this.props.PB_text}</PopoverBody>
        </UncontrolledPopover>
      </div>
    );
  }
}

ButtonPopover.propTypes = {
  PopID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  PH_text: PropTypes.string.isRequired,
  PB_text: PropTypes.string.isRequired,
};
ButtonPopover.defaultProps = {
  color: 'default',
};
