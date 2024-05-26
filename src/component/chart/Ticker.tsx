import { useEffect, useRef, memo } from "react";

function TradingViewTickerTape() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = "";

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            {
              "description": "",
              "proName": "CRYPTOCAP:BCH"
            },
            {
              "description": "",
              "proName": "CRYPTOCAP:BNB"
            },
            {
              "description": "",
              "proName": "CRYPTOCAP:BTC"
            },
            {
              "description": "",
              "proName": "CRYPTOCAP:ETH"
            },
            {
              "description": "",
              "proName": "CRYPTOCAP:SOL"
            },
            {
              "description": "",
              "proName": "CRYPTOCAP:TRX"
            },
            {
              "description": "",
              "proName": "CRYPTOCAP:USDT"
            }
          ],
          "showSymbolLogo": true,
          "isTransparent": false,
          "displayMode": "adaptive",
          "colorTheme": "light",
          "locale": "en"
        }`;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
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
}

export default memo(TradingViewTickerTape);
