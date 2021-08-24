import React, { useEffect } from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";

import './App.css';

const APIkey = '6917ed5aebd1b49dc91f310fad260be92e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

  useEffect(() => {
    alanBtn({
      key: APIkey,
      onCommand: ({ commandData }) => {
        if (commandData === 'testCommand') {
          alert('Welcome to News App');
        }
      }
    });
  }, []);


  return (
    <div>
      <h1>News App ALAN AI</h1>
    </div>
  );
}

export default App;
