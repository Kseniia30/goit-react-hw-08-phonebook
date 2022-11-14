import { AddPage } from "pages/AddPage";
import { ContactPage } from "pages/ContactsPage";
import { Layout } from "pages/Layout";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AddPage />} />
          <Route path="contacts" element={<ContactPage/>}/>
        </Route>
      </Routes>
  );
};
