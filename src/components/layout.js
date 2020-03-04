/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col h-screen">
      <div className="h-16">
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>
      <div
        className="flex-grow flex flex-col justify-center items-center p-4 md:p-0"
      >
        <main
          className="md:w-1/2 p-5 bg-abpink-100 opacity-90" 
        >{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
