import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import NavBar from '../../components/common/NavBar/NavBar';
import NewsFrame from '../../components/common/NewsFrame/NewsFrame';
import BottomNavBar from '../../components/common/BottomNavBar/BottomNavBar';
import SectionHeader from '../../components/common/SectionHeader/SectionHeader';

export default function HelpPage() {
  return (
    <>
      <Carousel />
      <NavBar navType={'help'} />
      <SectionHeader
        firstHeadText='지금 가장'
        secondHeadText='뜨거운 캠페인이에요'
        padding={true}
      ></SectionHeader>
      <NewsFrame type={'help'} sorted={'hottest'} />
      <SectionHeader
        firstHeadText='새로 시작된'
        secondHeadText='캠페인이에요'
        padding={true}
      ></SectionHeader>
      <NewsFrame type={'help'} sorted={'newest'} />
      <BottomNavBar />
    </>
  );
}
