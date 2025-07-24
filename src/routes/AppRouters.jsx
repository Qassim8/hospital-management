import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import RootLayout from "../pages/RootLayout";
import Dashboard from "../pages/Dashboard";
import Doctors from "../pages/Doctors";
import Patients from "../pages/Patients";
import Apointments from "../pages/Apointments";
import Departments from "../pages/Departments";
import Pharmacy from "../pages/Pharmacy";
import AddDoctor from "../pages/AddDoctor";
import AddPatient from "../pages/AddPatient";
import AddAppointment from "../pages/AddAppointment";
import AddDepartment from "../pages/AddDepartment";
import AddItems from "../pages/AddItems";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<RootLayout />}>
        <Route path="home" element={<Dashboard />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="patients" element={<Patients />} />
        <Route path="apointments" element={<Apointments />} />
        <Route path="departments" element={<Departments />} />
        <Route path="pharmacy" element={<Pharmacy />} />
        <Route path="adddoctor" element={<AddDoctor />} />
        <Route path="addpatient" element={<AddPatient />} />
        <Route path="addappointment" element={<AddAppointment />} />
        <Route path="adddepartment" element={<AddDepartment />} />
        <Route path="addpharmacy" element={<AddItems />} />
      </Route>
    </Routes>
  );
};
export default AppRouters;
