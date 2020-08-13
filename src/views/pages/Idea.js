import React, { Component } from 'react';

// core components
import DemoNavbar from '../../components/Navbars/DemoNavbar.js';
import CardsFooter from '../../components/Footers/CardsFooter.js';
import Background from '../IndexSections/Background';
import IdeaTable from '../../components/Contents/IdeaTable';

export class Idea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  render() {
    return (
      <div>
        <DemoNavbar />
        <Background
          title='아이디어 게시판'
          desc='아이디어가 있다면 자유롭게 작성해주세요!'
        />
        {this.state.isReady ? (
          <IdeaTable />
        ) : (
          <h1 style={{ textAlign: 'center' }}>준비중입니다.</h1>
        )}

        <CardsFooter />
      </div>
    );
  }
}

export default Idea;
