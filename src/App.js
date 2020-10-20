import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { useStyles } from './App.styles';
import UserProfile from "./components/UserProfile";
import ProtectedComponent from "./components/ProtectedComponent";
import withAuth from "./hoc/withAuth";


import Index from './pages/Index';
import Admin from './pages/Admin';
import Login from './pages/Login';


const ProtectedAdminPageWithHOC = withAuth(Admin);


function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position={'static'}>
                <Toolbar>
                    <Link to={'/'} className={classes.menuLink}>Home</Link>
                    <Link to={'/admin'} className={classes.menuLink}>Admin</Link>
                    <Link to={'/admin-hoc'} className={classes.menuLink}>Admin with HOC</Link>
                    <Link to={'/admin-render-props'} className={classes.lastMenuLink}>Admin with RenderProps</Link>
                    <UserProfile/>
                </Toolbar>
            </AppBar>
            <div>
                <Switch>
                    <Route path={'/'} component={Index} exact={true}/>
                    <Route path={'/admin'} component={Admin}/>
                    <Route path={'/admin-hoc'} component={ProtectedAdminPageWithHOC}/>
                    <Route path={'/admin-render-props'} render={() => {
                        return <ProtectedComponent render={(user => {
                            return <Admin/>
                        })}/>
                    }}/>/>
                    <Route path={'/login'} component={Login}/>
                </Switch>
            </div>
        </React.Fragment>
    )
}

export default App;

// 02 - Render prop pattern
/*
/// PUT THIS ROUTER TO SHOW RENDR PROPS PATTERN
<Route path={'/admin'}
       render={() => {
           return <ProtectedComponent render={(user => {
               console.log(user);
               return <Admin/>
           })}/>
       }}/>
*/