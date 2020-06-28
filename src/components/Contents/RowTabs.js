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
    test_Row: [
      {
        tabs: 1,
        tabsTitle: 'test1',
        tabssubTitle: 'test1Sub',
        opinion: 'test1opinion',
        feedback: 'test1feedback',
        etc: 'test1etc',
      },
      {
        tabs: 2,
        tabsTitle: 'test2',
        tabssubTitle: 'test2Sub',
        opinion: 'test2opinion',
        feedback: 'test2feedback',
        etc: 'test2etc',
      },
      {
        tabs: 3,
        tabsTitle: 'test3',
        tabssubTitle: 'test3Sub',
        opinion: 'test3opinion',
        feedback: 'test3feedback',
        etc: 'test3etc',
      },
      {
        tabs: 4,
        tabsTitle: 'test4',
        tabssubTitle: 'test4Sub',
        opinion: 'test4opinion',
        feedback: 'test4feedback',
        etc: 'test4etc',
      },
      {
        tabs: 5,
        tabsTitle: 'test5',
        tabssubTitle: 'test5Sub',
        opinion: 'test5opinion',
        feedback: 'test5feedback',
        etc: 'test5etc',
      },
      {
        tabs: 6,
        tabsTitle: 'test6',
        tabssubTitle: 'test6Sub',
        opinion: 'test6opinion',
        feedback: 'test6feedback',
        etc: 'test6etc',
      },
    ],
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
                {this.state.test_Row.map((con, i) => {
                  return (
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.plainTabs === con.tabs}
                        className={classnames('mb-sm-3 mb-md-0', {
                          active: this.state.plainTabs === con.tabs,
                        })}
                        onClick={(e) =>
                          this.toggleNavs(e, 'plainTabs', con.tabs)
                        }
                        href='#pablo'
                        role='tab'
                      >
                        {con.tabsTitle}
                      </NavLink>
                    </NavItem>
                  );
                })}
              </Nav>
            </Col>
            <Col lg='9'>
              <Card className='shadow'>
                <CardBody>
                  <TabContent activeTab={this.state.plainTabs}>
                    {this.state.test_Row.map((con, i) => {
                      return (
                        <TabPane tabId={con.tabs}>
                          <ColTabs
                            title={con.tabsTitle}
                            subtitle={con.tabssubTitle}
                            opinion={con.opinion}
                            feedback={con.feedback}
                            etc={con.etc}
                          />
                        </TabPane>
                      );
                    })}
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
