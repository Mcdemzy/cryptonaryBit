import React, { useEffect } from "react";
import Intercom from "@intercom/messenger-js-sdk";

const IntercomComponent: React.FC = () => {
  useEffect(() => {
    Intercom({
      app_id: "qc9mhz0r",
    });
  }, []);

  return <></>;
};

export default IntercomComponent;
