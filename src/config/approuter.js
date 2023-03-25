import { AppRegistration } from "@mui/icons-material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SMSelect from "../components/SMSelect";
import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import Registration from "../screens/Registration";

import Signup from "../screens/Signup";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         
          <Route path="dashboard/*" element={<Dashboard/>} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="select" element={<SMSelect />} />
          <Route path="registration" element={<Registration />} />
       
        </Routes>
      </BrowserRouter>
    </>
  );
}
