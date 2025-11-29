import React from 'react'
import Header from '../header'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <Header />
        <main style={{paddingBottom: '3rem'}}>
            {children}
        </main>
    </React.Fragment>
  )
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout