
import "./assets/baseStyle/base.css";
import "./assets/baseStyle/normalize.css";
import "./assets/baseStyle/fonts.css";
import { Landing } from "./pages/landing/landing";
import { Footer } from "./layouts/footer/footer";
import { Header } from "./layouts/header/header";
import { Main } from "./layouts/main/main";
import { AboutUs } from "./pages/aboutUs/aboutUs";
import { Route, Routes } from "react-router-dom";
import { routes } from "./assets/routes";

function App() {
  return (
    <div className="App">
      <Header theme="whiteStyle" />
      <Main>
        <Routes>
          <Route path={routes.home} element={<Landing />} />
          <Route path={routes.aboutUs} element={<AboutUs />} />
        </Routes>
      </Main>
      <Footer />

    </div>
  );
}

export default App;
