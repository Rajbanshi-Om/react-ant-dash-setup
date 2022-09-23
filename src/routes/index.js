import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import AgentsPage from "../pages/Agents";
import HomePage from "../pages/Home";
import NotFoundPage from "../pages/NotFound";
import ProfilePage from "../pages/Profile";
import SignInPage from "../pages/SignIn";

const AllRouting = () => {
    return ( 
        <Routes>
            <Route element={<ProtectedRoute/>}>
                 <Route path='/'  element={ <HomePage/> }  />
                 <Route path='profile'  element={ <ProfilePage/> }  />
                 <Route path='agents'  element={ <AgentsPage/> }  />
            </Route>

            <Route path='signin' element={<SignInPage />} />
            <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
     );
}
 
export default AllRouting;