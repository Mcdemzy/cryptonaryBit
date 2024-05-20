import { Routes, Route } from "react-router-dom";
import LandingPage from "./component/landingpage/LandingPage";
import Signup from "./component/signup/Signup";
import Signin from "./component/signin/Signin";
import Dashboard from "./component/dashboard/Dashboard";
import Etf from "./component/etf/Etf";
import EtfAbout from "./component/etf/EtfAbout";
// import Navbar from "./component/landingpage/components/Navbar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/etf" element={<Etf />} />
        <Route path="/etfabout" element={<EtfAbout />} />
      </Routes>
      {/* <LandingPage /> */}
    </>
  );
};

export default App;
