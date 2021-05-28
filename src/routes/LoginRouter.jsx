import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from "../pages/login";
import AppRouter from "./AppRouter";


const LoginRouter = () => {
    return (
        <Router>
            <AppRouter />
            <Switch>
                <Route exact path="login" component={login} />
            </Switch>
        </Router>
    )
}

export default LoginRouter;