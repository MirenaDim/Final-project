import React, { Component } from "react";
// must be ontop
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// import { Link } from "react-router-dom";
import Header from "../Header/Header";
import MenuToggleButton from "../SideMenu/MenuToggleButton";
import SideMenu from "../SideMenu/SideMenu";
import BackShadow from "../BackShadow/BackShadow";
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage"
import Culture from "../SideMenuDetails/Culture/Culture";
import Eating from "../SideMenuDetails/Eating/Eating";
import Vacations from "../SideMenuDetails/Vacations/Vacations";
import MyVouchers from '../MyVouchers/MyVouchers'
import Profile from '../Profile/profile'
import Footer from '../Footer/Footer'

// import { NavLink} from "react-router-dom";





class App extends Component {
  state = {
    sideMenuOpen: false
  };
  sideMenuToggleOnClick = prevState => {
    const sideMenuOpen = !prevState.sideMenuOpen;
    this.setState({ sideMenuOpen });
  };

  sideMenuBack = () => {
    this.setState({ sideMenuOpen: false });
  };

  render() {
    let backShadow = null;
    if (this.state.sideMenuOpen) {
      backShadow = <BackShadow onClick={this.sideMenuBack} />;
    }
    return (
      <BrowserRouter>
        <div>
          <Header />
          {/* <MenuToggleButton onClick={this.sideMenuToggleOnClick} /> */}
            {/* <SideMenu show={this.state.sideMenuOpen} onMouseOver={() => this.sideMenuToggleOnClick()} onMouseLeave={() => this.sideMenuToggleOnClick()} /> */}
          <div className="wrapper">
            <SideMenu show={this.state.sideMenuOpen} onClick={this.sideMenuToggleOnClick} />
            {backShadow}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/loginPage" component={LoginPage} />
            <Route exact path="/category/:categoryType" component={Home} />
            <Route exact path="/myProfile" component={Profile} />
              <Route exact path="/myVouchers" component={MyVouchers} />
            {/* Page Not Found */}
            <Route
              render={() => <p className="pageNotFound"> Page Not Found</p>}
            />
          </Switch>
            
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
