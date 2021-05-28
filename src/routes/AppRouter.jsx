import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import admin from '../pages/admin'
import login from '../pages/login'
import news from '../pages/news'
import signup from '../pages/signup'

const AppRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/login" component={login} />
                <Route exact path="/signup" component={signup} />
                <Route exact path="/adminnews" component={admin} />
                <Route exact path="/news" component={news} />

                <Redirect to="/login" />
            </Switch>
        </>
    )
}

export default AppRouter