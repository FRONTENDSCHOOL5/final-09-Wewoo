import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import NavBar from '../../components/common/NavBar/NavBar';
import NewsFrame from '../../components/common/NewsFrame/NewsFrame';

export default function HelpPage() {
  return (
    <div>
      <Carousel />
      <NavBar navType={'help'} />
      <NewsFrame type={'help'} sorted={'hottest'} />
      <NewsFrame type={'help'} sorted={'newest'} />
    </div>
  );
}
