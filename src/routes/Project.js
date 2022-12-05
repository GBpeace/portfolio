import React from 'react';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';

import Navbar from '../components/Navbar';
import Workcard from '../components/Workcard';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS" text="here are my some projects."/>
      <Workcard/>
      <Footer/>
    </div>
  )
}

export default Project