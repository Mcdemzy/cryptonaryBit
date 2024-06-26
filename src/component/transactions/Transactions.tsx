import { useState, useEffect } from "react";
import "./transactions.css";
import Folder from "../../assets/folder.png";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { getTransactions } from "../../../utils/services";

interface Transaction {
  date: string;
  type: string;
  amount: number;
  status: string;
  currency: string;
}

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await getTransactions();
        if (res.ok) {
          const transactionResponse = await res.json();
          setTransactions(transactionResponse);
        }
      } catch (error) {
        alert("Error loading transactions");
        console.log(error);
      }
    };
    fetchTransactions();
  }, []);

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

  const filterTransactions = () => {
    return transactions.filter((transaction) => {
      const matchesType =
        filter.type === "All transaction types" ||
        transaction.type === filter.type;
      const matchesStatus =
        filter.status === "All statuses" ||
        transaction.status === filter.status;
      // Assuming account and period filters are not yet implemented
      return matchesType && matchesStatus;
    });
  };

  const handleClearTransactions = () => {
    if (
      window.confirm("Are you sure you want to clear all transaction history?")
    ) {
      localStorage.removeItem("transactions");
      setTransactions([]);
    }
  };

  return (
    <article>
      <div className="transaction-history">
        <div className="header-container">
          <h1 className="title">Transaction history</h1>
          <button
            className="btn-clear"
            onClick={handleClearTransactions}
            disabled={transactions.length === 0}
          >
            Clear
          </button>
        </div>
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
              <option>Stake</option>
              <option>Swap</option>
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
                  <option>Stake</option>
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
              <Link to="/deposit">
                <button className="btn-deposit">Deposit</button>
              </Link>
            </div>
          ) : (
            <div className="table-container">
              <table className="transaction-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filterTransactions().map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.date}</td>
                      <td>{transaction.type}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.currency}</td>
                      <td>{transaction.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <Footer />
      </div>
      <Navbar />
    </article>
  );
};

export default Transactions;
