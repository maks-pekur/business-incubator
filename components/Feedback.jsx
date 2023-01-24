import React, { useEffect } from "react";

export const Feedback = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://cdn.bitrix24.pl/b23660321/crm/site_button/loader_3_sfd6kn.js" +
      "?" +
      ((Date.now() / 60000) | 0);
    document.getElementsByTagName("script")[0].parentNode.appendChild(script);
  }, []);

  return <></>;
};
