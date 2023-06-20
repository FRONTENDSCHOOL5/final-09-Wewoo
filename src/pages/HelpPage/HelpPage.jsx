import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import NavBar from '../../components/common/NavBar/NavBar';

export default function HelpPage() {
  return (
    <div>
      <Carousel />
      <NavBar navType={'help'} />
    </div>
  );
}
