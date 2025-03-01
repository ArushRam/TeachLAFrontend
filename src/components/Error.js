import firebase from 'firebase/app';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { GH_REPO_NAME } from '../constants';
import * as cookies from '../lib/cookies.js';
import Footer from './common/Footer';
import 'firebase/auth';
import '../styles/Page.scss';

class Error extends React.Component {
  render() {
    return (
      <div className={`full-container theme-${cookies.getThemeFromCookie()}`}>
        <div className="page-container">
          <h2>Uh oh, something went wrong!</h2>
          <h1>
            Error:
            {this.props.errorMsg}
          </h1>
          <br />
          <Button color="primary" size="lg" target="_blank" href={`${GH_REPO_NAME}/issues`}>
            Let Us Know!
          </Button>
          &nbsp;
          <Link to={this.props.returnTo || "/"}>
            <Button color="success" size="lg">
              Back to safety
            </Button>
          </Link>
          &nbsp;
          {this.props.isValidUser && (
            <Button color="danger" size="lg" onClick={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          )}
          <Footer />
        </div>
      </div>
    );
  }
}
export default Error;
