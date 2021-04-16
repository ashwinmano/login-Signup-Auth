import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import RevenueAnalytics from './revenueanalyics';
import { PieChart } from 'react-minimal-pie-chart';
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <div className="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Congratulations John</h5>
                <p>Best Seller of the month</p>
                <h1>89k</h1>
                <p className="primary">You have done 57.6%more sales today</p>
                <i class="fas fa-trophy"></i>
                <a href="/" class="btn btn-primary">view sales</a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card small">
              
                <h5 class="card-title">Visits of 2019</h5>
                <PieChart
                  data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                  ]}
                />;
             
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">New Product </h5>
                <h1 class="card-text">1.2K </h1>
                
              </div>
            </div>
          </div>
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">New User </h5>
                <h1 class="card-text">45.6K </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-sm-5"> 
              <RevenueAnalytics />
            </div>
            <div class="col-sm-3">
            <div class="card">
            <div class="stats-info stats-info1">
                <div class="panel-heading">
                    <h4 class="panel-title">Browser Stats</h4>
                </div>
                <div class="panel-body panel-body2">
                    <ul class="list-unstyled">
                        <li>Google Chrome<div class="text-success pull-right">12%<i class="fa fa-level-up"></i></div></li>
                        <li>Firefox<div class="text-success pull-right">15%<i class="fa fa-level-up"></i></div></li>
                        <li>Internet Explorer<div class="text-success pull-right">18%<i class="fa fa-level-up"></i></div></li>
                        <li>Safari<div class="text-danger pull-right">17%<i class="fa fa-level-down"></i></div></li>
                        <li>Opera<div class="text-danger pull-right">10%<i class="fa fa-level-down"></i></div></li>
                        <li>Mobile &amp; tablet<div class="text-success pull-right">14%<i class="fa fa-level-up"></i></div></li>
                        <li class="last">Others<div class="text-success pull-right">5%<i class="fa fa-level-up"></i></div></li> 
                    </ul>
                </div>
            </div>
              </div>
            </div>
            <div class="col-sm-4">
            <div class="card">
              
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="/" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
            
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
