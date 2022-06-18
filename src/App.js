import { Route, Routes } from "react-router-dom";
import "./App.css";

 

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Productdetail from "./Pages/Productdetail/productdetail";

import AllFruits from "./Pages/Products/AllFruits";
import FreshCuts from "./Pages/Products/FreshCuts";
import FruitCombos from "./Pages/Products/FruitCombos";
import GiftsByKimaye from "./Pages/Products/GiftsByKimaye";
import Checkout1 from "./Pages/Paymentpages/Checkout1";
import { Paymentpage } from "./Pages/Paymentpages/Paymentpage";
import Sucess from "./Pages/Paymentpages/Sucess";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route
          path="/collections/all-fruits"
          element={<AllFruits></AllFruits>}
        ></Route>
        <Route
          path="/collections/fresh-cuts"
          element={<FreshCuts></FreshCuts>}
        ></Route>
        <Route
          path="/collections/fruit-combos"
          element={<FruitCombos></FruitCombos>}
        ></Route>
        <Route
          path="/collections/gifts-by-kimaye"
          element={<GiftsByKimaye></GiftsByKimaye>}
        ></Route>
        <Route path="/productdetail" element={<Productdetail/>} />
       <Route path="/Checkout1" element={<Checkout1/>}></Route>
       <Route path="/Paymentpage" element={<Paymentpage/>}></Route>
      <Route path="/Sucess" element={<Sucess/>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
