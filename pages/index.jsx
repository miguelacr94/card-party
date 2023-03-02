import { useEffect } from "react";
import CustomInvitations from "../core/components/home/CustomInvitations";
import InvitationsShowcase from "../core/components/home/InvitationsShowcase";
import BannerHome from "../core/components/shared/Banners/BannerHome";
import TypeCards from "../core/components/shared/Cards/TypeCards";
import InvitationCard from "../core/components/shared/InvitationCard";
import Wrapper from "../core/components/shared/Wrapper";
import MainLayout from "../core/layouts/MainLayout";
import AOS from 'aos';
import Us from "../core/components/Informations/Us";
import MostWanted from "../core/components/home/MostWanted";
import Steps from "../core/components/home/Steps";
import Testimonials from "../core/components/home/Testimonials";


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);


  return (
    <MainLayout>


      <main className="flex flex-col w-full ">
        <div className="w-full  mt-0 md:h-[600px]   pt-1 flex">
          <BannerHome />
        </div>
        <div className="w-full flex justify-center pt-12">
          <Us />
        </div>
        <div id='typeCards' className="w-full h-full mt-24">
          <TypeCards />
        </div>

        <div data-aos="fade-up w-full "
          className="flex-col items-center  w-full">
          <div className="w-full max-w-screen-xl m-auto flex justify-center items-center -auto">
            <Steps />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <MostWanted />
          </div>



        </div>



        <InvitationsShowcase />
        <CustomInvitations />
        <div className="w-full">
          <Testimonials />
        </div>

      </main>
    </MainLayout>
  );
};

export default Home;
