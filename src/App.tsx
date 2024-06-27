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
import Coming from "./component/coming/Coming";
import Stake from "./component/stake/Stake";
import ContactUs from "./component/contactus/ContactUs";
import Withdrawal from "./component/withdraw/Withdrawal";
import OnlineBankWithdrawal from "./component/withdraw/OnlineBankWithdrawal"; // Import the new component
import Transactions from "./component/transactions/Transactions";
import News from "./component/news/News";
import AboutUs from "./component/aboutus/AboutUs";
import AirDrop from "./component/airdrop/AirDrop";
import Deposit from "./component/deposit/Deposit";
import BitcoinWithdrawal from "./component/withdraw/BitcoinWithdrawal";
import UsdtWithdrawal from "./component/withdraw/UsdtWithdrawal";
import FAQ from "./component/landingpage/components/FAQ";
import OnlineBankDeposit from "./component/deposit/OnlineBankDeposit";
import PortfolioManagement from "./component/portfolio/PortfolioManagement";
import BTCDeposit from "./component/deposit/BTCDeposit";
import USDTDeposit from "./component/deposit/USDTDeposit";
import FixedEtf from "./component/etf/FixedEtf";
import Swap from "./component/swap/Swap";
import Buy from "./component/buy/Buy";
import PrivateRoutes from "../utils/privateRoutes";
// import Header from "./component/header/Header";

// import ETFFixed from "./component/etf/EtfFixed";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
      <Route
        path="/dashboard"
        element={
          <>
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/wallet"
        element={
          <>
            <PrivateRoutes>
              <Wallet />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/etf"
        element={
          <>
            <PrivateRoutes>
              <Etf />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/transactions"
        element={
          <>
            <PrivateRoutes>
              <Transactions />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/news"
        element={
          <>
            <PrivateRoutes>
              <News />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/swap"
        element={
          <>
            <PrivateRoutes>
              <Swap />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/deposit"
        element={
          <>
            <PrivateRoutes>
              <Deposit />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/withdrawal"
        element={
          <>
            <PrivateRoutes>
              <Withdrawal />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/etfabout"
        element={
          <>
            <PrivateRoutes>
              <EtfAbout />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/etffinancials"
        element={
          <>
            <PrivateRoutes>
              <EtfFinancials />
            </PrivateRoutes>
          </>
        }
      />

      <Route
        path="/stake"
        element={
          <>
            <PrivateRoutes>
              <Stake />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/online-bank"
        element={
          <>
            <PrivateRoutes>
              <OnlineBankWithdrawal />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/online-bank"
        element={
          <>
            <PrivateRoutes>
              <OnlineBankWithdrawal />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/btc-withdrawal"
        element={
          <>
            <PrivateRoutes>
              <BitcoinWithdrawal />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/usdt-withdrawal"
        element={
          <>
            <PrivateRoutes>
              <UsdtWithdrawal />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/online-deposit"
        element={
          <>
            <PrivateRoutes>
              <OnlineBankDeposit />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/btc-deposit"
        element={
          <>
            <PrivateRoutes>
              <BTCDeposit />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/usdt-deposit"
        element={
          <>
            <PrivateRoutes>
              <USDTDeposit />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/fixed-etf"
        element={
          <>
            <PrivateRoutes>
              <FixedEtf />
            </PrivateRoutes>
          </>
        }
      />
      <Route
        path="/buy"
        element={
          <>
            <PrivateRoutes>
              <Buy />
            </PrivateRoutes>
          </>
        }
      />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/coming" element={<Coming />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/airdrop" element={<AirDrop />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/pmi" element={<PortfolioManagement />} />
      <Route path="/fixed-etf" element={<FixedEtf />} />

      <Route
        path="/online-bank-withdrawal"
        element={
          <>
            <PrivateRoutes>
              <OnlineBankWithdrawal />
            </PrivateRoutes>
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
