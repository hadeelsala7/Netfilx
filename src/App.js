import React from 'react';
import { FaqsContainer } from './container/faqs';
import { FooterConatainer } from './container/footer';
import JumbotronContainer from './container/jumbotron'

export default function App() {
  return (
    //May2021
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterConatainer />
    </>
  );
}