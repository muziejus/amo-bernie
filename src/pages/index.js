import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
 <Layout>
    <SEO title="Home" />
    <div 
    >
      <h2 className="text-2xl m-0">Welcome!</h2>
      <p className="text-l mb-0">Buttons, sweaters, t-shirts, canvas totes, and stickers to come soon. In the meantime, follow us on Twitter to stay informed.</p>
    </div>
  </Layout>
)

export default IndexPage
