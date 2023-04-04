import React from "react";

import { AboutUsSection, AboutUsTitle, 
    AboutUsDescription, AboutUsImage } from '../components/styled/homepage.styled';


function About() {
    return (
        <AboutUsSection>
        <AboutUsTitle>About Us</AboutUsTitle>
        <AboutUsDescription>
          Rialto Flooring is a leading flooring company specializing in providing high-quality flooring services to residential and commercial clients. With over 10 years of experience in the industry, we have built a reputation for delivering exceptional results and outstanding customer service.
        </AboutUsDescription>
        <AboutUsImage src="/about-us.png" alt="About Us" />
      </AboutUsSection>
    );
  }
  
  export default About;