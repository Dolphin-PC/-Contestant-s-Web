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
  Button,
} from 'reactstrap';
import { createSolutionBuilderWithWatchHost } from 'typescript';

import ColTabs from './ColTabs';

class RowTabs extends React.Component {
  state = {
    selectedSeason: this.props.selectedSeason,
    detailTitle: this.props.detailTitle,
  };
  toggleNavs = (e, state, index, selectName) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
    this.props.changeSelectedName(selectName);
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
                {this.props.day_data.map((con, i) => {
                  return (
                    <NavItem key={i}>
                      <NavLink
                        aria-selected={this.state.plainTabs === con.tabs}
                        className={classnames('mb-sm-3 mb-md-0', {
                          active: this.state.plainTabs === con.tabs,
                        })}
                        onClick={(e) =>
                          this.toggleNavs(
                            e,
                            'plainTabs',
                            con.tabs,
                            con.tabsTitle
                          )
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
                    {this.props.day_data.map((con, i) => {
                      return (
                        <TabPane tabId={con.tabs} key={i}>
                          <ColTabs
                            trashClickEvent={this.props.trashClickEvent}
                            key={i}
                            title={con.tabsTitle}
                            subtitle={con.tabsSubTitle}
                            opinion={con.opinion}
                            feedback={con.feedback}
                            etc={con.etc}
                            selectedSeason={this.state.selectedSeason}
                            detailTitle={this.state.detailTitle}
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
