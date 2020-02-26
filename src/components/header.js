import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = useState(false)
  
  return (
  <header
    className="flex items-center justify-between flex-wrap p-4 bg-abgreen-500"
  >
    <div className="flex items-center flex-shrink-0 mr-4">
      <h1>
        <Link
          className="text-abpink-500 no-underline"
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
   <div className="block lg:hidden">
      <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-abpink-500 border-abpink-800 hover:text-abpink-200 hover:border-abpink-500">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
      <div className="text-sm lg:flex-grow">
        <Link to="/shop/" className="block mt-4 lg:inline-block lg:mt-0 text-abpink-500 hover:text-abpink-200 mr-4">
          Shop
        </Link>
        <Link to="/about/" className="block mt-4 lg:inline-block lg:mt-0 text-abpink-500 hover:text-abpink-200 mr-4">
          About
        </Link>
        <Link to="/bernie/" className="block mt-4 lg:inline-block lg:mt-0 text-abpink-500 hover:text-abpink-200 mr-4">
          عمہ برنی
        </Link>
      </div>
    </div> 
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
