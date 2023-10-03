import Header from 'components/header/header';
import Hero from 'components/hero/hero';
import React from 'react';
import Collaborators from 'components/сollaborators/Collaborators'
import Provider from 'components/provider/provider';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Collaborators/>
      <Provider/>
    </>
  );
}
