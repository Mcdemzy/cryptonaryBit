import { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "PYTH:EZBC",
      width: "100%",
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      // Clean up the script when the component unmounts
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        className="tradingview-widget-container__widget"
        ref={containerRef}
      ></div>
    </div>
  );
};

export default TradingViewWidget;
