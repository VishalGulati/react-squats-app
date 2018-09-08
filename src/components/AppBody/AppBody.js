import React, { Component } from 'react';
import './AppBody.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Notifications from './Notifications/Notifications';
import Discover from './Discover/Discover';
import Me from './Me/Me';
import LeftPanel from './LeftPanel/LeftPanel';

class AppBody extends Component {
    render() {
        return (
            <div className="app-body-container row">
                <div className='col-sm-4 left-panel'>
                    <LeftPanel />
                </div>
                <div className="col-sm-7 right-panel">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/notifications' component={Notifications} />
                        <Route path='/discover' component={Discover} />
                        <Route path='/me' component={Me} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default AppBody;
