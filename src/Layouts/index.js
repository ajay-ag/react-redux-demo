
//import libs
import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// import components
import PublicLayout from './Public'


function Layout(props) {
    const { children } = props
    return <PublicLayout {...props}>{children}</PublicLayout>
}

export default withRouter(Layout)