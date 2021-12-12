import "bootstrap/dist/css/bootstrap-grid.min.css"; // Add this line
import "../styles/globals.css";
import "react-tooltip/dist/index.js";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
