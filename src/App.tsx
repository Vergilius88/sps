import { Footer } from "./layouts/footer/footer";
import { Header } from "./layouts/header/header";

import "./assets/baseStyle/base.css";
import "./assets/baseStyle/normalize.css";
import "./assets/baseStyle/fonts.css";
import { Main } from "./layouts/main/main";
import { OrderNowBlock } from "./components/orderNow/orderNow";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <OrderNowBlock />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
