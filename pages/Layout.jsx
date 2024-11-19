import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            {/*<Footer/>*/}
        </div>
    );
};

export default Layout;