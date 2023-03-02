import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import { InitialHeader } from "../components/shared/Header/InitialHeader";
import SideBarCart from "../components/shared/Ui/Sidebar/SideBarCart";
import SidebarMobile from "../components/shared/Ui/Sidebar/SidebarMobile";
import useOpen from '../utils/hoocks/useOpen'

const MainLayout = ({ children, head }) => {

  return (
    <>
      {head && head}
      <div className="flex flex-col w-full  bg-white">
        <div className="fixed shadow-2xl z-50 ">
          <InitialHeader />
          <Header />
          <SidebarMobile />
          <SideBarCart />
        </div>
        <div className="md:mt-28 mt-24">
          <div className="flex justify-center flex-grow w-full ">{children}
          </div>
          <Footer />
        </div>
      </div>


    </>
  );
};

export default MainLayout;
