import { Footer } from "./layouts/footer/footer";
import { Header } from "./layouts/header/header";

import "./assets/baseStyle/base.css";
import "./assets/baseStyle/normalize.css";
import "./assets/baseStyle/fonts.css";
import { Main } from "./layouts/main/main";
import { OrderNowBlock } from "./components/orderNow/orderNow";
import { Hero } from "./components/hero/hero";
import { Benefits } from "./components/benefits/benefits";
import { SpecialOffer } from "./components/specialOffer/specialOffer";

function App() {
  return (
    <div className="App">
      <Header theme="whiteStyle"/>
      <Main>
        <Hero />
        <Benefits/>
        <SpecialOffer/>
        <OrderNowBlock />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
