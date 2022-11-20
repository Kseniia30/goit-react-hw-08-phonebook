import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logged } from 'redux/authorization/selectors';




export const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
    const isLoggedIn = useSelector(logged);
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component
};