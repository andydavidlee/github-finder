import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Global style sheet for whole application
// import './App.css';
import'../src/sass/style.css'
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About'
import Singleuser from './components/users/Singleuser'
// import { Layout } from './components/layout/Layout';

class App extends React.Component {
  state = {
    users: [],
    userdetails: {},
    loading: false,
    msg:'',
    type: '',
  }
  // async componentDidMount() {
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
  //   this.setState({ loading: true })

  //   const res = await axios.get(`https://api.github.com/users?per_page=3&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ users: res.data, loading: false })
  //   // console.log(res.data)
  // }
  handleSearchUsers = async (text) => {
    try {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false })
  } catch (error) {
    console.log(error);
  }
}
// Get single user
   getUser = async username => {
     try {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ userdetails: res.data, loading: false })
    console.log(res)
  } catch (error) {
    console.log(error)
  }
  }
      // Clear users from state
    handleclearUsers=()=> {
        this.setState({users:[], loading:false})
    }
    // Set Alert
    handlesetAlert=(msgfromSearch, typefromSearch)=>{
      this.setState({ msg:msgfromSearch, type: typefromSearch })
      setTimeout(() => this.setState({msg:'', type:''}), 5000);
    }
  render() {
    const {users, loading, userdetails } = this.state;
    return (
      <Router>
      <div className="App" >
        <Navbar title="Github Finder" />
        <div className="container-xl px-3">
        <Alert msg={this.state.msg} type={this.state.type}/>
        <Switch>
          {/* First Route */}
            <Route exact path='/' render={props=>(
              <Fragment>
                <Search searchUsers={this.handleSearchUsers} clearUsers={this.handleclearUsers} showClear={this.state.users.length>0?true:false} setAlert={this.handlesetAlert} />
                <Users loading={loading} users={users} />
              </Fragment>
            )} />
          {/* Second Route */}
            <Route exact path='/about' components={About} />
            <Route exact path='/user/:login' render= {props => (
              <Singleuser {...props} getUser={this.getUser} userdetails={userdetails} loading={loading}/>
            )} />
        </Switch>
        </div>
      </div>
    </ Router>
    );
  }
}
export default App;
