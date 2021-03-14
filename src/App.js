// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import axios from 'axios';

// CSS
import './App.css';

// Components
import Signup from './components/Signup';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import Search from './components/Search';
import ProfileUpdate from './components/ProfileUpdate';
import PostUpdate from './components/PostUpdate';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [appState, setAppState] = useState({
    currentUser: {},
    isLoading: true
  });
  const {currentUser, isLoading} = appState;


  useEffect(() => {
  

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      setAppState({...appState, isLoading: false});
      console.log('====> Authenticated is now FALSE');
    } else {
      fetchUser()
    }
  }, []);

  const fetchUser = () => {
    const token = jwt_decode(localStorage.getItem('jwtToken'));
    setAuthToken(localStorage.getItem('jwtToken'));
    const { REACT_APP_SERVER_URL } = process.env;
    const profileURL = `${REACT_APP_SERVER_URL}/users/profile/${token.id}`
    axios.get( profileURL )
      .then (res => {
        console.log(res.data);
          const userData = res.data;
          nowCurrentUser({
            bio: userData.bio,
            skills: userData.skills,
            company: userData.company,
            website: userData.website,
            location: userData.location,
            ...userData.user,
            id: userData.user._id,
          })
      })
  }

  const nowCurrentUser = (userData) => {
    setIsAuthenticated(true);
    setAppState({...appState, isLoading: false, currentUser: userData});
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      setAppState({...appState, currentUser: null});
      setIsAuthenticated(false);
    }
  }
  
  return (
    
      <div className="App">
        <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
        <div className="container mt-5">
          {!isLoading && <Switch>
            <Route path='/signup' component={Signup} />
            <Route 
              path="/login"
              render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>}
            />
            
            <Route path="/profile"><Profile user={currentUser} /></Route>
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route path='/postUpdate' component={PostUpdate}/>
            <Route path="/profileUpdate"><ProfileUpdate user={currentUser} fetchUser={fetchUser} /></Route>
            <Route path='/search' component={Search} />
          </Switch>}
        </div>
        <Footer />
      </div>
    
  );
}

export default App;
