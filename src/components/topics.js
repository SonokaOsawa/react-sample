import {Switch, Route, Link, useRouteMatch} from 'react-router-dom'
export const Topics = () => {
    const match = useRouteMatch();
    return (
        <div>
            <h2>中項目（ネスト項目）</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/component`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v.State</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.url}/component`}>
                    <h3>components</h3>
                </Route>
                <Route path={`${match.url}/props-v-state`}>
                    props-v-state
                </Route>
            </Switch>
        </div>
    );
}