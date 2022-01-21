import React, { useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login'
import Checkout from './Checkout';
import { auth } from './firebase'
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51KJvjGSD23NhTWP05ptWtbKaFEasxkwckZDH2oRNYdVSW7GXnUFVf9l7aIK7n0k42sX6dgoyYQ0kCEvp3dMkDpQy00TnbzBDM0');

function App() {
	const [{}, dispatch] = useStateValue();
  useEffect(() => {
	  auth.onAuthStateChanged(authUser => {
		  console.log('THE USER IS : ', authUser);
		  if (authUser) {
			  dispatch({
				  type: 'SET_USER',
				  user: authUser
			  })
		  } else {
			  dispatch({
				  type: 'SET_USER',
				  user: null
			  })
		  }
	  })
  }, [])
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
