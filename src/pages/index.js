import * as React from "react"
import { Link } from "gatsby"

import whaleGIF from "../gifs/whales.gif"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Adopt a whale today</h1>
    <p>Whales are our friends.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={whaleGIF} alt="Whale from BBC America" />
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
