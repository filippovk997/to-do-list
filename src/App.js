import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

import Main from './pages/Main';
import CompletedTasks from './pages/CompletedTasks';
import PageNotFound from './pages/PageNotFound';

import './App.scss';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="nav">
                        <ul>
                            <li>
                                <NavLink id="link-currient-tasks" className="link" to="/">Current tasks</NavLink>                        
                            </li>
                            <li>
                                <NavLink id="link-completed-tasks" className="link" to="/completed-tasks">Completed tasks</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Main />
                </Route>
                <Route exact path="/completed-tasks">
                    <div className="nav">
                        <ul>
                            <li>
                                <NavLink id="link-currient-tasks" className="link" to="/">Current tasks</NavLink>                        
                            </li>
                            <li>
                                <NavLink id="link-completed-tasks" className="link" to="/completed-tasks">Completed tasks</NavLink>
                            </li>
                        </ul>
                    </div>
                    <CompletedTasks />
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
        </Router>
    );
}