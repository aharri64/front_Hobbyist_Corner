// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

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


const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('jwtToken');
  console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login"/>
  }} />
}  

function App() {
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL
  console.log(REACT_APP_SERVER_URL)
  
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  
  useEffect(() => {
    let token;
    
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('===> nowCurrent is here.');
    console.log(userData)
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }
  
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="container mt-5">
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route 
            path="/login"
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>}
          />
          <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} />
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route path='/profileUpdate' component={ProfileUpdate}/>
          <Route path="/postUpdate" component={PostUpdate} />
          <Route path='/search' component={Search} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
