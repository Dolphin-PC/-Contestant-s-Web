import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';

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

import { confirmAlert } from 'react-confirm-alert';
import '../../assets/css/App.css';
import { teamList_Ref } from '../../config/firebase';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';

class ColTabs extends React.Component {
  editorRef = React.createRef();

  state = {
    iconTabs: 1,
    plainTabs: 1,
    isEditable: false,
    editOpinion: this.props.opinion,
    editFeedback: this.props.feedback,
    editEtc: this.props.etc,
  };

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  handleOpinionChange = (event) => {
    this.setState({ editOpinion: event.target.value });
  };
  handleFeedbackChange = (event) => {
    this.setState({ editFeedback: event.target.value });
  };
  handleEtcChange = (event) => {
    this.setState({ editEtc: event.target.value });
  };

  handleEditorSave = () => {
    console.log(this.editorRef.current.getInstance().getHtml());
    this.setState({
      editOpinion: this.editorRef.current.getInstance().getHtml(),
    });
  };

  handleChangeMeetingLog = () => {
    const { isEditable, editOpinion, editFeedback, editEtc } = this.state;
    const { selectedSeason, detailTitle, title } = this.props;
    // -> 편집모드
    if (this.props.user.isSupporter) {
      if (!isEditable) {
        this.setState({
          isEditable: !isEditable,
        });
      } else {
        // Edit -> Complete
        confirmAlert({
          title: '해당 회의록을 수정완료하시겠습니까?',
          message: '수정된 이후에는 복구가 불가능합니다.',
          buttons: [
            {
              label: '수정',
              onClick: () => {
                console.log(selectedSeason, detailTitle, title);
                teamList_Ref
                  .child(`${selectedSeason}/${detailTitle}/teamDay/${title}`)
                  .update({
                    opinion: editOpinion,
                    feedback: editFeedback,
                    etc: editEtc,
                  });
                alert('수정되었습니다.');
                window.location.reload();
              },
            },
            {
              label: '취소',
              onClick: () => {},
            },
            {
              label: '저장하지 않고 수정모드 종료',
              onClick: () => {
                this.setState({
                  isEditable: false,
                });
              },
            },
          ],
        });
      }
    } else {
      alert('허가된 사용자만 가능합니다.');
    }
  };

  render() {
    const { isEditable } = this.state;
    return (
      <>
        <h3 className='h4 text-success font-weight-bold mb-4'>
          {this.props.title}

          <button aria-label='Close' className='close' type='button'>
            <BsFillTrashFill onClick={this.props.trashClickEvent} />
          </button>
          <br />
          <button aria-label='Close' className='close' type='button'>
            {isEditable ? (
              <BsCheckBox onClick={this.handleChangeMeetingLog} />
            ) : (
              <BsPencilSquare onClick={this.handleChangeMeetingLog} />
            )}
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
                    {isEditable ? (
                      <textarea
                        id='editTextArea'
                        onChange={this.handleOpinionChange}
                      >
                        {this.props.opinion}
                      </textarea>
                    ) : (
                      <p className='description'>{this.props.opinion}</p>
                    )}
                  </TabPane>
                  <TabPane tabId='plainTabs2'>
                    {isEditable ? (
                      <textarea
                        id='editTextArea'
                        onChange={this.handleFeedbackChange}
                      >
                        {this.props.feedback}
                      </textarea>
                    ) : (
                      <p className='description'>{this.props.feedback}</p>
                    )}
                  </TabPane>
                  <TabPane tabId='plainTabs3'>
                    {isEditable ? (
                      <textarea
                        id='editTextArea'
                        onChange={this.handleEtcChange}
                      >
                        {this.props.etc}
                      </textarea>
                    ) : (
                      <p className='description'>{this.props.etc}</p>
                    )}
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Editor
          initialValue={this.state.editOpinion}
          previewStyle='vertical'
          height='600px'
          initialEditType='markdown'
          useCommandShortcut={true}
          ref={this.editorRef}
        />
        <button onClick={this.handleEditorSave}>Save</button>
        <button onClick={this.handleEditorLoad}>Load</button>
      </>
    );
  }
}
ColTabs.defaultProps = {
  title: 'default_title',
  subtitle: '회의록을 입력해주세요.',
};

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps, actions)(ColTabs);
