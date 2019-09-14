// Packages and Libraries
import React from 'react';
import { Route, Link } from 'react-router-dom';
//Components
import Home from './components/Home'
// import Dashboard from './components/Dashboard'
import  CreateProduct  from './components/CreateProduct'
import Login from './components/Login'
import Signup from './components/Signup'
import  ProtectedRoute from './components/ProtectRoute'
//helper functions
import { login, getProfile, signUp } from './services/apiService'
//CSS
import './App.css';
import authService from './services/authService';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSignedIn: false,
      user: {}
    }
  }


  async componentDidMount() {
    try{
      const fetchUser = await getProfile()

      this.setState(state => {
        return {
          isSignedIn: authService.isAuthenticated(),
          user: fetchUser
        }

      })

    } catch(e) {
      throw e
    }
  }

loginUser = async (credentials) => {
  try {
    const user = await login(credentials)

    this.setState(state => {
      return {
        isSignedIn: true,
        user: user
      }
    })
  }
  catch (e) {
    throw e
  }
}


signOutUser = () => {
  authService.signOut()

  this.setState(state => {
    return {
      isSignedIn: false,
      user: {}
    }
  })
}

signUpUser = async (credentials) => {
  
  try {
    await signUp(credentials)
    const newUser = {email: credentials.email, password: credentials.password}
    this.loginUser(newUser)
  } catch (e) {
    throw e
  }
}

  render() {
    const { isSignedIn , user} = this.state
    
    return (
      <div className="App">
  
        <nav>
          <div><Link to="/">Home</Link></div>
          {
            isSignedIn &&
            
            <div className=""><Link className="" to="/product/create">Create product</Link>  </div>
          }
          {
            !isSignedIn ? (
              <div><Link to="/login">Login</Link></div>
            ) : (
              <button onClick= {this.signOutUser}>Sign Out</button>
            )
          
          }
          

          {!isSignedIn ? (
              <div><Link to="/signup">Sign up</Link></div>
            ) : (
              null
            )
          }
        </nav>

       
       
      
  
        <main>
          <Route exact path="/" component={Home} />
          <ProtectedRoute path="/product/create" 
          user={user}
          component={CreateProduct} />
          <Route 
            path="/login"
            render={(props) => <Login  {...props} handleLogin={this.loginUser} isSignedIn={isSignedIn}/>} />
          <Route 
            path='/signup' 
            render = {(props) => <Signup {...props} handleSignUp={this.signUpUser} isSignedIn={isSignedIn} />}
             />
        </main>
      
         
   
      </div>
    );
  }
}

export default App;