import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BerniePage = () => (
 <Layout>
    <SEO title="Bernie" />
    <div 
    >
      <h2 className="text-2xl m-0 text-right">من هو عمه برني؟</h2>
      <p className="text-l">“Amo Bernie” is how Representative Rashida Tlaib and others have transliterated “عمه برني,” or “uncle Bernie” in Arabic.</p>
      <p className="text-l">When you buy something from our shop, the proceeds go to:</p>
      <ul>
        <li>The Bernie Sanders campaign</li>
        <li>Rashida Tlaib’s reelection campaign</li>
        <li>Ilhan Omar’s reelection campaign</li>
      </ul>
    </div>
  </Layout>
)

export default BerniePage
