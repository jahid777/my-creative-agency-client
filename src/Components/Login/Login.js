import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import logo from '../../images/logos/logo.png';
import googleIcon from '../../images/logos/google.png';
import './Login.css';
import {UserContext} from '../../App';

//ata sidebarer import kore nisi jate refresh korle email ta state theke haraia na jay
export const app = firebase.initializeApp(firebaseConfig);

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  console.log(loggedInUser.email);

  const handleGoogleSign = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then((result) => {
        // console.log(result);
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { gmailName: displayName, email, photoURL };
        setLoggedInUser(signedInUser);
        history.replace(from); 
        // sessionStorage.setItem('info',signedInUser.email)      
        storeAuthToken();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };


  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img style={{ height: "100px" }} src={logo} alt="" />
      </div>
      <div className="box-design" style={{ textAlign: "center" }}>
        <h2 style={{ paddingTop: "80px" }}>Login With</h2>
        <div onClick={handleGoogleSign} className="google-sign-btn">
          <div className="google-div">
            <img className="google-icon" src={googleIcon} alt="" />
          </div>
          <div className="text-div">
            <span className="google-text">Continue With Google</span>
          </div>
        </div>

        <p style={{ marginTop: "30px", fontSize: "15px" }}>
          Don't have an account? <Link to="/">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
