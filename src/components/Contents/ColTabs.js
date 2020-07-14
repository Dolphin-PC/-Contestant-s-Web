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
import { BsFillTrashFill, BsPencilSquare, BsCheckBox } from 'react-icons/bs';
import { createSolutionBuilderWithWatchHost } from 'typescript';

class ColTabs extends React.Component {
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

          <button aria-label='Close' className='close' type='button'>
            <BsFillTrashFill onClick={this.props.trashClickEvent} />
          </button>
          <br />
          <button aria-label='Close' className='close' type='button'>
            <BsPencilSquare />
          </button>
        </h3>
        <Row className='justify-content-center'>
          <Col lg='12'>
            {/* Menu */}
            <div className='mb-3'>
              <small className='text-uppercase font-weight-bold'>
                {this.props.subtitle}
              </small>
            </div>
            <div className='nav-wrapper'>
              <Nav
                className='nav-fill flex-md-row'
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
                    회의내용
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
                    피드백
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
                    기타
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className='shadow'>
              <CardBody>
                <TabContent activeTab={'plainTabs' + this.state.plainTabs}>
                  <TabPane tabId='plainTabs1'>
                    <p className='description'>{this.props.opinion}</p>
                  </TabPane>
                  <TabPane tabId='plainTabs2'>
                    <p className='description'>{this.props.feedback}</p>
                  </TabPane>
                  <TabPane tabId='plainTabs3'>
                    <p className='description'>{this.props.etc}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
ColTabs.defaultProps = {
  title: 'default_title',
  subtitle: '회의록을 입력해주세요.',
};

export default ColTabs;
