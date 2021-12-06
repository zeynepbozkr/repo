import "../styles/globals.css";
import Layout from "../components/Layout";
import StoreProvider from "../utils/store-provider";
import "../store";
import "../utils/promise";
import interceptors from "../core/interceptors";

//import "../utils/promise";
// objecti arraye dönüştürüyor

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
