import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { logged } from 'redux/authorization/selectors';


export default function PublicRoute({children, restricted = false, redirectTo = '/', ...routeProps}) {
    const isLoggedIn = useSelector(logged);
    const shouldRedirect = isLoggedIn && restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
}