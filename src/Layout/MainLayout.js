import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import routes from '../routes';





export default class MainLayout extends React.Component {
    render() {
        return (

            <div class="culmn">
                <HeaderComponent />
                <HashRouter>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (<Route
                                key={idx} path={route.path}
                                exact={route.exact} name={route.name}
                                render={props => (<route.component {...props} />)}
                            />) : (null);
                        },
                        )}
                        <Redirect from="/" to="/main-content" />
                    </Switch>
                </HashRouter>
                <FooterComponent />
            </div>

        )
    }
}