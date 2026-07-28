import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExecutiveBrief from "./pages/ExecutiveBrief";

import Header from "./components/layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Assessment from "./pages/Assessment";
import BusinessOpportunitySnapshot from "./pages/BusinessOpportunitySnapshot";
import Footer from "./components/layout/Footer";

import ContractorHub from "./contractor/ContractorHub";
import HVACLanding from "./contractor/hvac/HVACLanding";
import PlumbingLanding from "./contractor/plumbing/PlumbingLanding";
import ElectricalLanding from "./contractor/electrical/ElectricalLanding";
import RoofingLanding from "./contractor/roofing/RoofingLanding";

import ExecutiveSnapshot from "./pages/ExecutiveSnapshot";



function App() {
  return (
    <BrowserRouter>
      <Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />

  <Route path="/assessment" element={<ExecutiveBrief />} />
  <Route path="/snapshot" element={<BusinessOpportunitySnapshot />} />

  <Route path="/contractors" element={<ContractorHub />} />
  <Route path="/contractors/hvac" element={<HVACLanding />} />
  <Route path="/contractors/plumbing" element={<PlumbingLanding />} />
  <Route path="/contractors/electrical" element={<ElectricalLanding />} />
  <Route path="/contractors/roofing" element={<RoofingLanding />} />

<Route path="/executive-snapshot" element={<ExecutiveSnapshot />}/>

</Routes>
    </BrowserRouter>
  );
}

export default App;