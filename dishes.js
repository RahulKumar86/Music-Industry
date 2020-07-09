import React, { Component } from 'react';
import art7 from './art7.png';
import in1 from './in1.png';

import './App.css';
class DISHES extends Component{
    render()
    {
return(
    <div className="App">
        <hr style={{border:"1px dotted white"}}/>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                  <img className="opa" src={art7} alt="loading"/>

                </div>
                <div className="col-md-2">
                  <table>
                      <tr><th>COMPANY</th></tr>
                      <tr><td><small>About</small></td></tr>
                      <tr><td><small>Jobs</small></td></tr>
                      <tr><td><small>Records</small></td></tr>
                  </table>
                </div>
                <div className="col-md-2">
                  <table>
                      <tr><th>COMMUNITIES</th></tr>
                      <tr><td><small>For Artist</small></td></tr>
                      <tr><td><small>Developers</small></td></tr>
                      <tr><td><small>Brands</small></td></tr>
                      <tr><td><small>Investors</small></td></tr>
                  </table>
                </div>
                <div className="col-md-2">
                      <table>
                          <tr><th>USEFUL LINKS</th></tr>
                          <tr><td><small>Help</small></td></tr>
                          <tr><td><small>Web Player</small></td></tr>
                          <tr><td><small>Mobile App</small></td></tr>
                      </table>
                </div>
                <div className="col-md-3">

                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <br/>
                    <small>Legal</small>&nbsp;&nbsp; &nbsp;&nbsp; <small>Privacy Center</small>&nbsp;&nbsp; &nbsp;&nbsp; <small>Privacy Policy</small>&nbsp;&nbsp; &nbsp;&nbsp; <small>Cookies</small>&nbsp;&nbsp; &nbsp;&nbsp; <small>About Ads</small>
                </div>
                <div className="col-md-2">
                    <br/><small><b>INDIA</b></small>
                    <img src={in1} height="20px" width="40px" alt="loading"/>
                </div>
            </div>
        </div>
 
 {//<hr style={{border:"1px dotted white"}}/>
    }
</div>
);
}
}
export default DISHES;