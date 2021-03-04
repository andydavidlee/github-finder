import { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search'
import axios from 'axios';

// Class based
class App extends Component {

  state = {
    users:[],
    loading: false
  }

  async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users:res.data, loading: false })
    // console.log(res.data)
  }

  // oldDip = () => 'ICT50110'
  handleSearchUsers = async (text) => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users:res.data.items, loading: false })
  }
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
        <div className= "container" >
          <Search searchUsers={this.handleSearchUsers} />
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
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
