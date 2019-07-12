import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import ButtonBasic from './components/ButtonBasic';
import './App.css';


const LabApp = _ => {

  const [ Counter, add ] = useState(2);


  const addOneBasic = () => {

    add(Counter + 1);

  };

  const addOne = useCallback( e => {

    // add(Counter + 1); // It can not be done!

    add(Math.random());

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        current value: { Counter }

        <Button callback={(addOne)} />
        <br />
        <ButtonBasic callback={(addOneBasic)} />

      </header>
    </div>
  );
}

export default LabApp;
