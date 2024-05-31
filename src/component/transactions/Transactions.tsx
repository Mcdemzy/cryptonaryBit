import { useState } from "react";
import "./transactions.css";
import Folder from "../../assets/folder.png";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

interface Transaction {
  date: string;
  type: string;
  amount: number;
  status: string;
}

const Transactions = () => {
  const [transactions] = useState<Transaction[]>([]);
  const [filter, setFilter] = useState({
    type: "All transaction types",
    status: "All statuses",
    account: "All accounts",
    period: "Total",
  });
  const [showModal, setShowModal] = useState(false);

  const handleFilterChange = (key: keyof typeof filter, value: string) => {
    setFilter({ ...filter, [key]: value });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <article>
      <div className="transaction-history">
        <h1 className="title">Transaction history</h1>
        <div className="filters">
          <div className="filter">
            <label htmlFor="period">Period</label>
            <select
              id="period"
              value={filter.period}
              onChange={(e) => handleFilterChange("period", e.target.value)}
            >
              <option>Total</option>
              <option>Last 3 days</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor="type">Transaction type</label>
            <select
              id="type"
              value={filter.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
            >
              <option>All transaction types</option>
              <option>Deposit</option>
              <option>Withdrawal</option>
              <option>Transfer</option>
              <option>Refund</option>
              <option>Reward</option>
              <option>Rebate</option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={filter.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
              <option>All statuses</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor="account">Account</label>
            <select
              id="account"
              value={filter.account}
              onChange={(e) => handleFilterChange("account", e.target.value)}
            >
              <option>All accounts</option>
            </select>
          </div>
        </div>
        <button className="btn-filter" onClick={() => setShowModal(true)}>
          Filter
        </button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleModalClose}>
                &times;
              </span>
              <div className="filter">
                <label htmlFor="modal-period">Period</label>
                <select
                  id="modal-period"
                  value={filter.period}
                  onChange={(e) => handleFilterChange("period", e.target.value)}
                >
                  <option>Total</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>
              <div className="filter">
                <label htmlFor="modal-type">Transaction type</label>
                <select
                  id="modal-type"
                  value={filter.type}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                >
                  <option>All transaction types</option>
                  <option>Deposit</option>
                  <option>Withdrawal</option>
                </select>
              </div>
              <div className="filter">
                <label htmlFor="modal-status">Status</label>
                <select
                  id="modal-status"
                  value={filter.status}
                  onChange={(e) => handleFilterChange("status", e.target.value)}
                >
                  <option>All statuses</option>
                  <option>Completed</option>
                  <option>Pending</option>
                  <option>Failed</option>
                </select>
              </div>
              <div className="filter">
                <label htmlFor="modal-account">Account</label>
                <select
                  id="modal-account"
                  value={filter.account}
                  onChange={(e) =>
                    handleFilterChange("account", e.target.value)
                  }
                >
                  <option>All accounts</option>
                  <option>Account 1</option>
                  <option>Account 2</option>
                </select>
              </div>
            </div>
          </div>
        )}
        <div className="transactions">
          {transactions.length === 0 ? (
            <div className="no-transactions">
              <img src={Folder} alt="No transactions" className="folder-img" />
              <p>There are currently no transactions</p>
              <p>Your deposits and withdrawals will appear here</p>
              <Link to="/wallet">
                <button className="btn-deposit">Deposit</button>
              </Link>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <Footer />
      </div>{" "}
      <Navbar />
    </article>
  );
};

export default Transactions;
