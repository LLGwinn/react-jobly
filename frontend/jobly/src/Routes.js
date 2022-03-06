import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import CompaniesList from './CompaniesList';
import Company from './Company';
import JobsList from './JobsList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';
import NotFound from './NotFound';

function Routes() {
    return(
        <Switch>
            <Route exact path='/companies/:handle'>
                <Company />
            </Route>
            <Route exact path='/companies'>
                <CompaniesList />
            </Route>
            <Route exact path='/jobs'>
                <JobsList />
            </Route>
            <Route exact path='/login'>
                <LoginForm />
            </Route>
            <Route exact path='/signup'>
                <SignupForm />
            </Route>
            <Route exact path='/profile'>
                <ProfileForm />
            </Route>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes;