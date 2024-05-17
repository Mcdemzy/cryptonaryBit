import "./chart.css";

const MyChart = () => {
  return (
    <>
      <article className="chart__page">
        <div className="chart__bitcoin">
          <p>BITCOIN (BTC)</p>
        </div>

        <div className="main__chart-container">
          <h1>
            $63,695.<span>50</span>
          </h1>
          <h3>
            Change <span>+0.86%</span>
          </h3>
          <div className="main__chart-display">
            {/* Render the Line plot */}
          </div>
        </div>
      </article>
    </>
  );
};

export default MyChart;
