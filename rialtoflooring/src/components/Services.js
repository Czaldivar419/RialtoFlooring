import React from 'react';

import { ServicesSection, ServiceTitle, ServiceItem, ServiceIcon,
ServicesTitle, ServicesList } from './styled/homepage.styled';


function Services() {
    return (
      <ServicesSection>
<ServicesTitle>Our Services</ServicesTitle>
<ServicesList>
<ServiceItem>
<ServiceIcon src="/service-1.png" alt="Service 1" />
<ServiceTitle>Hardwood Flooring</ServiceTitle>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices euismod massa, vel ultricies ex venenatis in.</p>
</ServiceItem>
<ServiceItem>
<ServiceIcon src="/service-2.png" alt="Service 2" />
<ServiceTitle>Laminate Flooring</ServiceTitle>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices euismod massa, vel ultricies ex venenatis in.</p>
</ServiceItem>
<ServiceItem>
<ServiceIcon src="/service-3.png" alt="Service 3" />
<ServiceTitle>Tile Flooring</ServiceTitle>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices euismod massa, vel ultricies ex venenatis in.</p>
</ServiceItem>
</ServicesList>
    </ServicesSection>
    );
  }
  
  export default Services;