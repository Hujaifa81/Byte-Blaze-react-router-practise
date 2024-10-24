
import Footer from './Footer';
import Nav from './Nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className='h-[68px]'>
            <Nav></Nav>
            </div>
            <div className='min-h-[calc(100vh-120px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;