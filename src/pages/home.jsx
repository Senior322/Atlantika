import Hero from 'components/hero/hero';
import React from 'react';
import Collaborators from 'components/сollaborators/Collaborators';
import Provider from 'components/provider/provider';
import Question from 'components/question/question';

export default function Home() {
  return (
    <>
      <Hero />
      <Collaborators />
      <Provider />
      <Question />
    </>
  );
}
