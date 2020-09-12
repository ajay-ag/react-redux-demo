
// import libs
import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// import components
import routes from './route'
import PublicRoute from './Public'
import Layout from '../Layouts/Public'

const Routes = () => (
    <Router>
        <Layout>
            <Switch>
                {routes.map((route, i) => {
                    return <PublicRoute key={i} {...route} />
                })}
            </Switch>
        </Layout>
    </Router>
)

export default Routes