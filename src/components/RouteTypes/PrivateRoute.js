import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { logged } from 'redux/authorization/selectors';


export default function PrivateRoute({children, redirectTo = '/', ...routeProps}) {
    const isLoggedIn = useSelector(logged);
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <redirectTo to={redirectTo} />}
        </Route>
    );
}