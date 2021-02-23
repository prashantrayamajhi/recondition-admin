import Navbar from './../Navbar/HomeNav'
import Welcome from './../Welcome/Welcome'
import About from './../About/About'
import Banner from './../Banner/Banner'
import Services from './../Services/Services'
import Testimonials from './../Testimonials/Testimonials'
import LatestProduct from './../LatestProducts/LatestProducts'
import Contact from './../Contact/Contact'
import Footer from './../Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <Banner />
      <Services />
      {/* <LatestProduct /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
