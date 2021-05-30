import "../src/css/app.scss";

import {AppProps} from "next/app";
import Head from "next/head";
import {Catchphrase, Host, Name} from "../src/data";

const App = ({ Component, pageProps }: AppProps) => {
  return <div>
    <Head>
      <meta charSet={"utf-8"}/>
      <title>{Name}</title>
      <meta name={"title"} content={Name}/>
      <meta name={"description"} content={Catchphrase}/>

      <meta property={"og:type"} content={"website"}/>
      <meta property={"og:url"} content={Host}/>
      <meta property={"og:title"} content={Name}/>
      <meta property={"og:description"} content={Catchphrase}/>
      <meta property={"og:image"} content={Host + "/preview.png"}/>
  
      <meta property={"twitter:card"} content={"summary_large_image"}/>
      <meta property={"twitter:url"} content={Host}/>
      <meta property={"twitter:title"} content={Name}/>
      <meta property={"twitter:description"} content={Catchphrase}/>
      <meta property={"twitter:image"} content={Host + "/preview.png"}/>
      <meta property={"twitter:image:alt"} content={"A portrait of Yoonha Hwang"}/>
      
      <link rel={"apple-touch-icon"} sizes={"180x180"} href={"/apple-touch-icon.png"}/>
      <link rel={"icon"} type={"image/png"} sizes={"32x32"} href={"/favicon-32x32.png"}/>
      <link rel={"icon"} type={"image/png"} sizes={"16x16"} href={"/favicon-16x16.png"}/>
      <link rel={"manifest"} href={"/site.webmanifest"}/>
      <link rel={"mask-icon"} href={"/safari-pinned-tab.svg"} color={"#9966cc"}/>
      <meta name={"msapplication-TileColor"} content={"#9966cc"}/>
      <meta name={"theme-color"} content={"#ffffff"}/>
    </Head>

    <Component {...pageProps} />

    <script src={"https://unpkg.com/react/umd/react.production.min.js"}/>
    <script src={"https://unpkg.com/react-dom/umd/react-dom.production.min.js"}/>
    <script src={"https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"}/>

    <script>var Alert = ReactBootstrap.Alert;</script>
  </div>
};

export default App;