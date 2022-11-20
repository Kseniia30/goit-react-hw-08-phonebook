import { AddPage } from "pages/AddPage";
import { ContactPage } from "pages/ContactsPage";
import { Layout } from "pages/Layout";
import { Route, Routes } from "react-router-dom";
import { LogInForm } from "./Auth/LogInForm";
import { SignUpForm } from "./Auth/SignUpForm";

export const App = () => {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact index element={<AddPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="login" element={<LogInForm />} />
          <Route path="signup" element={<SignUpForm/>}/>
        </Route>
      </Routes>
  );
};


