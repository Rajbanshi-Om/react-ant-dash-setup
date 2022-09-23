import { Navigate, Outlet } from "react-router-dom"
import Cookies from "js-cookie"
import PageLayout from "../Layout"
const useAuth =  () => {
    const token = Cookies.get('token')
    const user = { loggedIn: token === undefined ? false : true }
    return user && user.loggedIn
}


const ProtectedRoute = () => {
    const isAuth = useAuth()
    return isAuth   ?
        <PageLayout >
            <Outlet />
        </PageLayout>
        : <Navigate to='/signin'  />
}

export default ProtectedRoute;