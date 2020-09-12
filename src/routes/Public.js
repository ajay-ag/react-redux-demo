import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

const PublicRoutes = (props) => {
    const { component: Component, ...rest } = props
    return <Route {...rest}
        render={props => {
            return <Suspense fallback={<div>Loading...</div>}>
                <Component {...props} />
            </Suspense>
        }}

    />
}

export default PublicRoutes