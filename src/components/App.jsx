import { AddPage } from "pages/AddPage";
import { ContactPage } from "pages/ContactsPage";
import { Layout } from "pages/Layout";
import { Route, Routes } from "react-router-dom";
import { LogInForm } from "./Auth/LogInForm";
import { SignUpForm } from "./Auth/SignUpForm";
import { PrivateRoute } from "./RouteTypes/PrivateRoute";
import { PublicRoute } from "./RouteTypes/PublicRoute";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<PublicRoute redirectTo="/" component={<LogInForm />} />} />
        <Route path="/signup" element={<PublicRoute redirectTo="/" component={<SignUpForm />} />}/>
        <Route path="/" element={<PrivateRoute redirectTo="/login" component={<AddPage />} />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactPage />} />} />
        </Route>
      </Routes>
  );
};


