import React  from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';



function Home() {
    return (
      <div>
        <Header />
      <Banner />
      <Services />
      <Testimonials />
      <Footer />
        
      </div>
    )
  }

export default Home;
