import Aside from "./components/aside/Aside";

import Footer from "./components/footer/Footer";

import Navbar from "./components/navbar/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import Create_mould from "./pages/create_mould/Create_mould";
import Create_sap from "./pages/create_sap/Create_sap";
import Portfolio from "./pages/portfolio/Portfolio";
import Property from "./pages/property/Property";
import Create_upgrade from "./pages/create_upgrade/Create_upgrade";
import New_portfolio from "./pages/new_portfolio/New_portfolio";
import New_property from "./pages/new_property/New_property";
import Property_details from "./pages/property_details/Property_details";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Aside />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="create_sap" element={<Create_sap />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create_mould" element={<Create_mould />} />
            <Route path="create_upgrade" element={<Create_upgrade />} />
            <Route path="new_portfolio" element={<New_portfolio />} />
            <Route path="new_property" element={<New_property />} />
            <Route path="property" element={<Property />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="property_details" element={<Property_details />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
