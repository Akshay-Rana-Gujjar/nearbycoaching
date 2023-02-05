import React, { useEffect } from "react";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomNavBar from "../components/BottomNavBar";
import "../utils/firebase";
import useIsMobile from "../hooks/useIsMobile";
import Footer from "../components/Footer";
import StoreProvider from "../provider/StoreProvider";

Bugsnag.start({
  apiKey: "758735c5bcd55b21ae443aaa05a03e46",
  plugins: [new BugsnagPluginReact()],
});

function MyApp({ Component, pageProps }) {
  const ErrorBoundary = Bugsnag.getPlugin("react").createErrorBoundary(React);

  useEffect(() => {
    require("bootstrap");
    return () => {};
  }, []);

  const isMobile = useIsMobile();

  return (
    <ErrorBoundary>
      <div>
        <StoreProvider>
          <>
            <Component {...pageProps} isMobile={isMobile} />
            <Footer />
            {isMobile && <BottomNavBar />}
          </>
        </StoreProvider>
      </div>
    </ErrorBoundary>
  );
}

export default MyApp;
