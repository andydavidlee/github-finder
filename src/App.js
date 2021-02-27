import { Component } from 'react';
import './App.css';
// Global syle sheet can go here.
import Navbar from './components/layout/Navbar';
import Layout from './components/layout/Layout';

// Class based
class App extends Component {

  // oldDip = () => 'ICT50110'

  render() {

    // Created a variable
    // const name = 'John Doe';
    // const x = true;
    // const loading = true;
    // const showName= true;
    // const newdip = () => 'ICT50120';
    // if (loading) {
    //   return <h4>loading...</h4>
    // }
    // const number = [1, 2, 3]

    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <Layout />
        {/* Able to add a variable in curly braces for JSX */}
        {/* <h2>{name}</h2> */}
        {/* Change to upper case letters */}
        {/* <h2>{name.toUpperCase()}</h2> */}
        {/* Turnery operators */}
        {/* <h2>{x?'Yes' : 'No'}</h2> */}
        {/* {loading?<h4>loading...</h4>:<h4>not loading...</h4>} */}
        {/* {loading&& <h4>loading...</h4>} */}
        {/* {<h3>Hello {showName ? name : null}</h3>} */}
        {/* {<h3>Hello {showName && name}</h3>} */}
        {/* <h3>This is our new dip Qual code {newdip()}</h3> */}
        {/* <h3>This is the old dip Qual code {this.oldDip()}</h3> */}
      </div>
    );
  }
}

export default App;
