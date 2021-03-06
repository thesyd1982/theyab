import React, {
  Component
} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {
  Route,
  Switch
} from 'react-router-dom';

import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up-page.component';
import {
  auth,
  createUserProfileDocument
} from './firebase/firebase.utils';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  unsubscribeAuth = null;
  componentDidMount() {


    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: userAuth.uid,
              ...snapshot.data()
            }
          });
        });

      }
      this.setState({
        currentUser: userAuth
      });
    });

  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }


  render() {
    return ( <
      div >
      <
      Header currentUser = {
        this.state.currentUser
      }
      /> <
      Switch >
      <
      Route exact path = '/'
      component = {
        HomePage
      }
      /> <
      Route path = '/shop'
      component = {
        ShopPage
      }
      /> <
      Route path = '/signin'
      component = {
        SignInAndSignUpPage
      }
      /> < /
      Switch > <
      /div>
    );
  }
}

export default App;