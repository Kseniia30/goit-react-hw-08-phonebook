import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logged } from 'redux/authorization/selectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(logged);
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};