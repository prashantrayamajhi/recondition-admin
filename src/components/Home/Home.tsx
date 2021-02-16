// components
import Navbar from './../Navbar/HomeNav'
import Welcome from './../Welcome/Welcome'
import About from './../About/About'
import Banner from './../Banner/Banner'
import Services from './../Services/Services'
import Testimonials from './../Testimonials/Testimonials'

export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <Banner />
      <Services />
      <Testimonials />
    </>
  )
}
