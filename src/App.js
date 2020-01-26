import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';
import Main from './pages/Main';
import CompletedTasks from './pages/CompletedTasks';
import './App.scss';

export default function App() {
    return (
        <Router>
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
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/completed-tasks">
                    <CompletedTasks />
                </Route>
            </Switch>
        </Router>
    );
}