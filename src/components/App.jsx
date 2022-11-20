import { AddPage } from "pages/AddPage";
import { ContactPage } from "pages/ContactsPage";
import { Layout } from "pages/Layout";
import { useEffect } from "react";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCurrentUser } from "redux/authorization/operations";
import { currentUser } from "redux/authorization/selectors";
import { LogInForm } from "./Auth/LogInForm";
import { SignUpForm } from "./Auth/SignUpForm";
import { PrivateRoute } from "./RouteTypes/PrivateRoute";
import { PublicRoute } from "./RouteTypes/PublicRoute";

export const App = () => {
  const isCurrentUser = useSelector(currentUser)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])
  return (
    isCurrentUser ? <img src="https://www.stopfake.org/content/uploads/2020/12/web-4746871_1280-1068x550.png" alt="cheking" /> : <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={
              <PublicRoute restricted>
                <LogInForm/>
              </PublicRoute>
            } />
            <Route path="signup" element={
              <PublicRoute restricted>
                <SignUpForm/>
              </PublicRoute>
            } />
            <Route path="/addcontacts" element={
              <PrivateRoute>
                <AddPage/>
              </PrivateRoute>
            } />
            <Route path="/contacts" element={
              <PrivateRoute>
                <ContactPage/>
              </PrivateRoute>
            } />
            </Route>
        </Routes>
      </Suspense>
    </>
  );
};


