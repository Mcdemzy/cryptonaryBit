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
import EtfNews from "./component/etf/EtfNews";
import Wallet from "./component/wallet/Wallet";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Bch from "./component/coins/Bch";
import Coming from "./component/coming/Coming";
import Stake from "./component/stake/Stake";
import ContactUs from "./component/contactus/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
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
      <Route
        path="/etf"
        element={
          <>
            <SignedIn>
              <Etf />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/etfabout"
        element={
          <>
            <SignedIn>
              <EtfAbout />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/etffinancials"
        element={
          <>
            <SignedIn>
              <EtfFinancials />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/news"
        element={
          <>
            <SignedIn>
              <EtfNews />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/stake"
        element={
          <>
            <SignedIn>
              <Stake />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/swap" element={<Coming />} />
      <Route path="/coming" element={<Coming />} />
      <Route path="/bch" element={<Bch />} />
      <Route path="/contactus" element={<ContactUs />} />
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
