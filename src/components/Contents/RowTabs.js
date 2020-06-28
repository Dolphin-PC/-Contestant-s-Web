import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
import PropTypes from 'prop-types';

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from 'reactstrap';
import { createSolutionBuilderWithWatchHost } from 'typescript';

import ColTabs from './ColTabs';

class RowTabs extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  render() {
    return (
      <>
        <h3 className='h4 text-success font-weight-bold mb-4'>
          {this.props.title}
        </h3>

        <Col lg='12'>
          {/* Menu */}
          <div className='mb-3'>
            <small className='text-uppercase font-weight-bold'>
              {this.props.subtitle}
            </small>
          </div>
          <Row>
            <Col lg='3'>
              <Nav
                vertical
                //   className='nav-fill flex-md-row'
                id='tabs-icons-text'
                pills
                role='tablist'
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames('mb-sm-3 mb-md-0', {
                      active: this.state.plainTabs === 1,
                    })}
                    onClick={(e) => this.toggleNavs(e, 'plainTabs', 1)}
                    href='#pablo'
                    role='tab'
                  >
                    Test1
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames('mb-sm-3 mb-md-0', {
                      active: this.state.plainTabs === 2,
                    })}
                    onClick={(e) => this.toggleNavs(e, 'plainTabs', 2)}
                    href='#pablo'
                    role='tab'
                  >
                    Test2
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 3}
                    className={classnames('mb-sm-3 mb-md-0', {
                      active: this.state.plainTabs === 3,
                    })}
                    onClick={(e) => this.toggleNavs(e, 'plainTabs', 3)}
                    href='#pablo'
                    role='tab'
                  >
                    Test3
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col lg='9'>
              <Card className='shadow'>
                <CardBody>
                  <TabContent activeTab={'plainTabs' + this.state.plainTabs}>
                    <TabPane tabId='plainTabs1'>
                      <ColTabs
                        title='ColTabs_Title1'
                        subtitle='ColTabs_SubTitle'
                      />
                      ;
                    </TabPane>
                    <TabPane tabId='plainTabs2'>
                      <ColTabs
                        title='ColTabs_Title2'
                        subtitle='ColTabs_SubTitle'
                      />
                      ;
                    </TabPane>
                    <TabPane tabId='plainTabs3'>
                      <ColTabs
                        title='ColTabs_Title3'
                        subtitle='ColTabs_SubTitle'
                      />
                      ;
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}
RowTabs.defaultProps = {
  Row_title: 'RowTabs_Title',
  Row_subtitle: 'RowTabs_SubTitle',
};

export default RowTabs;
