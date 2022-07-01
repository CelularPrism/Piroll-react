import React from 'react';
import { Author, Banner, NeedAProject, Statistic } from '../Components/About';

function About() {
  return (
    <React.Fragment>
      <Banner />
      <Statistic />
      <Author />
      <NeedAProject />
    </React.Fragment>
  );
}

export default About;
