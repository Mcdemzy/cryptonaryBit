import { useEffect } from "react";

const TradingViewTimelineWidget = () => {
  useEffect(() => {
    const container = document.getElementById(
      "tradingview-timeline-widget-container"
    );

    if (container) {
      // Remove any existing scripts
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      // Add new script
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        feedMode: "all_symbols",
        isTransparent: false,
        displayMode: "regular",
        width: "100%",
        height: 700,
        colorTheme: "dark",
        locale: "en",
      });
      container.appendChild(script);

      // Cleanup function to remove the script when the component unmounts or re-renders
      return () => {
        if (container) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        }
      };
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      id="tradingview-timeline-widget-container"
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

export default TradingViewTimelineWidget;
