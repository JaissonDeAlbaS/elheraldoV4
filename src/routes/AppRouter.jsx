import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import admin from '../pages/admin'
import login from '../pages/login'
import news from '../pages/news'
import signup from '../pages/signup'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
                <Route exact path="/adminnews" component={admin} />
                <Route exact path="/news" component={news} />
                <Route exact path="*">
                    <Redirect to="/login" />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter