import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar' //this is not the right spot!!!
import Wrapper from './components/Wrapper' //this is not the right spot!!!
import FormWrapper from './components/FormWrapper' //this is not the right spot!!!

function App() {
  const [state, setState] = useState("");
  return (
    <div className="App">
      <Wrapper.Provider value={{state, setState}}>
        <Navbar/>
        <FormWrapper/>
      </Wrapper.Provider>
      {/* <Form /> */}
    </div>
  );
}

export default App;
