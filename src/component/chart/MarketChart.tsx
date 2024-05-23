import { useEffect } from "react";

const TradingViewMarketOverviewUpdated = () => {
  let script: HTMLScriptElement | null = null;

  useEffect(() => {
    const container = document.getElementById("tradingview-widget-container");

    if (container) {
      // Remove any existing scripts
      const existingScript = container.querySelector("script");
      if (existingScript) {
        container.removeChild(existingScript);
      }

      // Add new script
      script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        colorTheme: "light",
        dateRange: "12M",
        showChart: true,
        locale: "en",
        largeChartUrl: "",
        isTransparent: false,
        showSymbolLogo: true,
        showFloatingTooltip: false,
        width: "100%",
        height: "700",
        plotLineColorGrowing: "rgba(41, 98, 255, 1)",
        plotLineColorFalling: "rgba(41, 98, 255, 1)",
        gridLineColor: "rgba(240, 243, 250, 0)",
        scaleFontColor: "rgba(19, 23, 34, 1)",
        belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
        belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
        belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
        symbolActiveColor: "rgba(41, 98, 255, 0.12)",
        tabs: [
          {
            title: "Indices",
            symbols: [
              { s: "CRYPTOCAP:BCH" },
              { s: "CRYPTOCAP:BNB" },
              { s: "CRYPTOCAP:BTC" },
              { s: "CRYPTOCAP:ETH" },
              { s: "CRYPTOCAP:SOL" },
              { s: "CRYPTOCAP:TRX" },
              { s: "CRYPTOCAP:USDT" },
            ],
            originalTitle: "Indices",
          },
          {
            title: "Forex",
            symbols: [
              { s: "BINANCE:BTCUSDT" },
              { s: "BITSTAMP:ETHUSD" },
              { s: "COINBASE:SOLUSD" },
              { s: "BINANCE:BNBUSD" },
              { s: "COINBASE:USDTUSD" },
              { s: "BINANCE:TRXUSD.P" },
            ],
            originalTitle: "Forex",
          },
        ],
      });
      container.appendChild(script);
    }

    // Cleanup function to remove the script when the component unmounts or re-renders
    return () => {
      if (container && script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      id="tradingview-widget-container"
    >
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewMarketOverviewUpdated;
