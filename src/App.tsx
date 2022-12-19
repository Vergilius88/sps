import { Footer } from "./layouts/footer/footer";
import { Header } from "./layouts/header/header";

import "./assets/baseStyle/base.css"; 
import "./assets/baseStyle/normalize.css";
import "./assets/baseStyle/fonts.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
