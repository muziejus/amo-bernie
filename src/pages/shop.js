import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ShopPage = () => (
 <Layout>
    <SEO title="Shop" />
    <div 
    >
      <h2 className="text-2xl m-0">Shop</h2>
      <p className="text-l mb-0">Our shop isn’t open yet. <Link to="/">Sign up</Link> with your email address or follow us on <a href="http://twitter.com/amobernieus">Twitter</a> or <a href="http://instagram.com/amobernieus">Instagram</a> to stay informed.</p>
    </div>
  </Layout>
)

export default ShopPage
