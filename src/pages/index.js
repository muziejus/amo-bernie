import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
 <Layout>
    <SEO title="Home" />
    <p className="text-l">Buttons, sweaters, t-shirts, canvas totes, and stickers to come soon. Follow us on <a href="http://twitter.com/amobernieus">Twitter</a> or <a href="http://instagram.com/amobernieus">Instagram</a> to stay informed. Or, sign up below.</p>
    <form className="mb-0 w-full" method="post" netlify-honeypot="bot-field" data-netlify="true" action="/thanks">
      <div className="flex items-center border-b border-b-2 border-abgreen-500 py-2 w-full">
        <input className="hidden" type="hidden" name="bot-field" />
        <label className="flex-grow" for="email"> 
          <span className="sr-only">E-mail</span>
          <input 
            className="appearance-none bg-transparent border-none w-full text-abgreen-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text" 
            name="email" 
            id="email" 
            placeholder="E-mail address"
          />
        </label>
        <button class="flex-shrink-0 bg-abgreen-500 hover:bg-abgreen-700 border-abgreen-500 hover:border-abgreen-700 text-sm border-4 text-abpink-500 py-1 px-2" type="submit">
          Sign Up
        </button>
        <button class="flex-shrink-0 border-transparent border-4 text-abgreen-500 hover:text-abgreen-800 text-sm py-1 px-2" type="button">
          Cancel
        </button>
      </div>
    </form>
  </Layout>
)

export default IndexPage
