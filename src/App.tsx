import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Registration from "./pages/Registration/Registration";
import Product from "./pages/Product/Product";
import Bin from "./pages/Bin/Bin";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<Card size={"M"} />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/sign-up" element={<Registration />} />
      <Route path="/product" element={<Product />} />
      <Route path="/bin" element={<Bin />} />
    </Routes>
  </Router>
);

export default App;
