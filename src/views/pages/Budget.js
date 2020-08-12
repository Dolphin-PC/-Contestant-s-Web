import React from 'react';

import DemoNavbar from '../../components/Navbars/DemoNavbar.js';
import CardsFooter from '../../components/Footers/CardsFooter.js';
import Background from '../IndexSections/Background';
import lottieWallet from '../../lotties/Wallet.json';

class Budget extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }
  render() {
    return (
      <div>
        <DemoNavbar />
        <Background
          lottieName={lottieWallet}
          lottieSize='200'
          title='예산계획과 사용내역'
          desc="'공모자들'의 예산내역을 투명하게 공개합니다."
        />
        <h1 style={{ textAlign: 'center' }}>
          <span role='img' aria-label='work'>
            😭작업 중에 있습니다😭
          </span>
        </h1>
        <CardsFooter />
      </div>
    );
  }
}

export default Budget;
