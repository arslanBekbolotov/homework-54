import React from 'react';
import './App.css';
import Block from "./components/Box/Block";

function App() {
  return (
    <div className="App">
        <div className="box">
            <Block hasItem={true} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
            <Block hasItem={false} clicked={true}/>
        </div>

    </div>
  );
}

export default App;
