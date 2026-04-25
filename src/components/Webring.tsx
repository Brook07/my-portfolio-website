import { useEffect } from "react";

const Webring = () => {
  useEffect(() => {
    const scriptSrc = "https://ringring.rajatdahal.com.np/webring.js";
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div id="webring" />;
};

export default Webring;