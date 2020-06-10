import React from 'react';

// core components

import DemoNavbar from '../../components/Navbars/DemoNavbar.js';
import CardsFooter from '../../components/Footers/CardsFooter.js';
import Background from '../IndexSections/Background';

class Idea extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }
  render() {
    const ready = true;
    return (
      <div>
        <DemoNavbar />
        <Background
          title='아이디어 게시판'
          desc='아이디어가 있다면 자유롭게 작성해주세요!'
        />
        <h1 style={{ textAlign: 'center' }}>😭작업 중에 있습니다😭</h1>
        <CardsFooter />
      </div>
    );
  }
}

export default Idea;
