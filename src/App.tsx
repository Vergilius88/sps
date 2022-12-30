
import "./assets/baseStyle/base.css";
import "./assets/baseStyle/normalize.css";
import "./assets/baseStyle/fonts.css";
import { Landing } from "./pages/landing/landing";
import { Footer } from "./layouts/footer/footer";
import { AboutUs } from "./pages/aboutUs/aboutUs";
import { Route, Routes } from "react-router-dom";
import { routes } from "./assets/routes";
import { BestSeller } from "./pages/bestSeller/bestSeller";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element={<Landing />} />
        <Route path={routes.aboutUs} element={<AboutUs />} />
        <Route path={routes.seller} element={<BestSeller />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
