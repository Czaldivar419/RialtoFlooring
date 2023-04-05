import React from 'react';

import { ServicesSection, ServiceTitle, ServiceItem, ServiceIcon,
ServicesTitle, ServicesList } from './styled/homepage.styled';


function Services() {
    return (
      <ServicesSection id='Services'>
<ServicesTitle>Our Services</ServicesTitle>
<ServicesList>
<ServiceItem>
<ServiceIcon src="realhardwood.jpg" alt="Service 1" />
<ServiceTitle>Hardwood Flooring</ServiceTitle>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices euismod massa, vel ultricies ex venenatis in.</p>
</ServiceItem>
<ServiceItem>
<ServiceIcon src="reallaminate.jpg" alt="Service 2" />
<ServiceTitle>Laminate Flooring</ServiceTitle>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices euismod massa, vel ultricies ex venenatis in.</p>
</ServiceItem>
<ServiceItem>
<ServiceIcon src="realtile.jpg" alt="Service 3" />
<ServiceTitle>Tile Flooring</ServiceTitle>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices euismod massa, vel ultricies ex venenatis in.</p>
</ServiceItem>
</ServicesList>
    </ServicesSection>
    );
  }
  
  export default Services;