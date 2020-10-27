import React from 'react';
import MemberList from './components/aboutComponents/MemberList';
import Header from './components/Header';
import Footer from './components/Footer';
import Description from './components/aboutComponents/Description';
import Banner from './components/aboutComponents/Banner';

import './styles/About.css'

export default () => (
  <div>
    <Header />
    <Banner />
    <Description />
    <MemberList />
    <Footer />
  </div>
)