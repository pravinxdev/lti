import React from 'react'
import Footer from './layout/footer'
import RegisterFeatures from './features/registerFeatures'
import ModernPaymentsFeatures from './features/modernPaymentsFeatures'
import TradersFeatures from './features/tradersFeatures'
import AccountsSection from './features/AccountsSection'
import TradingCardSection from './features/TradingHistoryNumbers'
import Header from './layer/Header'
import TradingFeatures from "./features/TradingFeatures"
import InfiniteImageSlider from './components/sliders/InfiniteImageSlider'
import TradingLandingPage from './dashboard/pages/homepage'
import BottomFourSection from './features/bottomFourSection'
import TopFourSection from './features/topFourSection'
import MiddleSixSection from './features/middleSixSection'

function App() {
  return (
    <div>
      <div>
        <Header/>
        <TradingLandingPage />
        <MiddleSixSection />
        <Footer />
      </div>
    </div>
  )
}

export default App;
