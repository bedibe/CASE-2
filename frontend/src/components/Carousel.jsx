import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'

function BootstrapCarousel(){
return (
    <div >
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://www.indavoula.com.br/wp-content/webp-express/webp-images/uploads/2021/05/planejamento-de-viagem-blog-inda-vou-la@2x.jpg.webp"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://www.indavoula.com.br/wp-content/webp-express/webp-images/uploads/2021/05/ebooks-blog-inda-vou-la@2x.jpg.webp"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default BootstrapCarousel