import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
 <Layout>
    <SEO title="Home" />
    <div 
      className="p-5 bg-abpink-100 opacity-90" 
    >
      <h1 className="text-2xl m-0">Welcome!</h1>
      <p className="text-l mb-0">Buttons, sweaters, t-shirts, canvas totes, and stickers to come soon. In the meantime, follow us on Twitter to stay informed.</p>
    </div>
  </Layout>
)

export default IndexPage
