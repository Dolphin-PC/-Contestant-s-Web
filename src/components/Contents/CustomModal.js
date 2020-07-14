import React from 'react';
import { Button } from 'reactstrap';

export default function CustomModal(props) {
  return (
    <div>
      <div className='modal-header'>
        <h6 className='modal-title' id='modal-title-default'>
          {props.modalName}
        </h6>
        <button
          aria-label='Close'
          className='close'
          data-dismiss='modal'
          type='button'
          onClick={() => props.toggleModal(props.modalName)}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
      <form onSubmit={props.TeamHandleSubmit}>
        <div className='modal-body'>
          <input type='text' onChange={props.handleChange}></input>
        </div>
        <div className='modal-footer'>
          <Button
            color='primary'
            type='submit'
            onClick={() => props.toggleModal(props.modalName)}
          >
            팀 생성
          </Button>
          <Button
            className='ml-auto'
            color='link'
            data-dismiss='modal'
            type='button'
            onClick={() => props.toggleModal(props.modalName)}
          >
            취소
          </Button>
        </div>
      </form>
    </div>
  );
}
