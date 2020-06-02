import React, { Component } from 'react';
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
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import CardsFooter from 'components/Footers/CardsFooter.js';

// index page sections
import Download from '../IndexSections/Download.js';
import Hero from '../IndexSections/Hero';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import { completeLanding } from '../../actions';
import _ from 'lodash';

class Landing extends Component {
  state = {};

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  componentWillMount() {
    this.props.fetchLanding();
  }

  render() {
    const { data } = this.props;
    const getData = _.map(data, (value, key) => {
      console.log(value.title);
      return value.title;
    });
    return (
      <>
        <DemoNavbar />
        <main ref='main'>
          <Hero title='공모자들' />
          {getData}
        </main>
        <CardsFooter />
      </>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data,
  };
};

export default connect(mapStateToProps, actions)(Landing);
