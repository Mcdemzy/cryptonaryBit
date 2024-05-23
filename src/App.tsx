import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./component/landingpage/LandingPage";
import Signup from "./component/signup/Signup";
import Signin from "./component/signin/Signin";
import Dashboard from "./component/dashboard/Dashboard";
import Etf from "./component/etf/Etf";
import EtfAbout from "./component/etf/EtfAbout";
import EtfFinancials from "./component/etf/EtfFinancials";
import Wallet from "./component/wallet/Wallet";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Bch from "./component/coins/Bch";
import Coming from "./component/coming/Coming";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={
          <>
            <SignedIn>
              <Dashboard />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/etf" element={<Etf />} />
      <Route path="/etfabout" element={<EtfAbout />} />
      <Route path="/swap" element={<Coming />} />
      <Route path="/etffinancials" element={<EtfFinancials />} />
      <Route path="/bch" element={<Bch />} />
      <Route
        path="/wallet"
        element={
          <>
            <SignedIn>
              <Wallet />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
