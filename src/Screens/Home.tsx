//whatsapp: + 92 300 0825124
//contact:  +92 300 0512401
import Navbar from '../components/NavBar'
import Footer from '../components/Footer';
import InfiniteScrollText from '../components/InfiniteScroll';
import AstrologyService from '../components/AstrologyService';
import Contact from '../components/Contact';
import AboutSection from '../components/AboutSection';
import FloatingWhatsApp from '../components/FloatingWhatsapp';
import IntroSection from '../components/IntroSection'
import Reviews from '../components/Reviews';
import Services from '../components/Services';
// import IstikharaServices from '../components/IstikharaServices'
import Stats from '../components/Stats';
import StorySection from '../components/StorySection';
export default function Home() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <Stats/>
      <Contact />
      <StorySection/>
      {/* <TwoImages /> */}
      <InfiniteScrollText />
      <Services />
      <AstrologyService />
      <Reviews />
      <AboutSection />
      <FloatingWhatsApp number='+923000825124' />
      {/* <IstikharaServices/> */}
     
      <Footer />
    </>
  );
}


// function TwoImages() {
//   return <div className='flex flex-row flex-wrap'>
//     <div className="w-full box-border lg:w-1/2 p-1">
//       <Image
//         src={img}
//         alt="Left Side Image"
//         width={700}
//         height={700}
//         className="object-cover w-full" />
//     </div>
//     <div className="w-full lg:w-1/2 p-1 hidden sm:block">
//       <Image
//         src={img2}
//         alt="Right Side Image"
//         width={700}
//         height={700}
//         className="object-cover w-full" />
//     </div>
//   </div>;
// }


