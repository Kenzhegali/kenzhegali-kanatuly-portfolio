// libraries
// libraries
import type { FC } from 'react';
import Award from 'components/Award/index';
import Intro from 'components/Intro/index';
import Footer from 'components/layout/Footer/index';
import Header from 'components/layout/Header/index';
import MobileBanner from 'components/MobileBanner/index';
import Payment from 'components/Payment/index';
import ProductCards from 'components/ProductCards/index';
// assets
const App: FC = () => (
  <>
    <Header />
    <Intro />
    <ProductCards />
    <MobileBanner />
    <Award />
    <Payment />
    <Footer />
  </>
);

export default App;
