import "../src/css/app.scss";

import {AppProps} from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return <div>
    <Head>
      <meta charSet="utf-8"/>
      <title>Yoonha Hwang</title>
    </Head>

    <Component {...pageProps} />

    <script src="https://unpkg.com/react/umd/react.production.min.js"/>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"/>
    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"/>

    <script>var Alert = ReactBootstrap.Alert;</script>
  </div>
};

export default App;