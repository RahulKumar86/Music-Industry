import React, { Component } from 'react';
import './App.css';

import {Button, Card, CardFooter, CardBody, CardHeader} from 'reactstrap';
import art6 from './art6.jpg';
import art7 from './art7.png';

import ms1 from './ms1.jpg';
import ms3 from './ms3.jpg';
import ms4 from './ms4.jpg';
import ms5 from './ms5.jpg';
import ms6 from './ms6.jpg';
import ms7 from './ms7.jpg';
import ms8 from './ms8.jpg';
import ms9 from './ms9.jpg';

import DISHES from './shared/dishes';



class Webp extends Component {
    render(){
        return(
            <div>
          <div className="App">
              <div className="cent">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-9">
                         <h4 className="cent"><b><mark>Music Industry</mark></b></h4>
              </div>
              <div className="col-md-3">
              Search:<input type="text"/>
              </div>
              </div>
              </div>
              <hr style={{border:"1px dotted white"}}/>
              
              <Button bsStyle="success">Home</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Button bsStyle="success">Categories</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Button bsStyle="success">Blog</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button bsStyle="success">Styles</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button bsStyle="success">About</Button><br/>
              
              </div><hr style={{border:"1px dotted white"}}/>
             { //<marquee direction="left" bgcolor="black">Welcome to Music Industry</marquee>
    }
              <div className="container">
                  <div className="row">
                      <div className="col-md-2">
                     <b><ins>Musical Genre</ins></b><br/>
                     <ul>
                         <li>Jass</li><br/>
                         <li>Pop</li><br/>
                         <li>Rock</li><br/>
                         <li>Classical</li><br/>
                         <li>Orchestra</li>
                         
                         
                     </ul>
                      </div>
                      <div className="col-md-7">
                          <img className="opa" src={art6} opacity="0.2" height="100%" width="100%" alt="loading"/>
                      </div>
                      <div className="col-md-3">
                          <img className="opa" src={art7} height="100%" alt="loading"/>
                      </div>
                      
                  </div>
              </div><hr style={{border:"1px dotted white"}}/>
          </div>
          <pre>         <b><ins>ENGLISH SONGS:</ins></b></pre>
          
          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                  <a href="https://www.youtube.com/embed/bkx9kCdaaMg"><Card>
                  <CardHeader>
                      
                      <img src={ms1} width="100%" alt="loading"/>
                      </CardHeader>
                      <CardBody>MIDNIGHT MEMORIES</CardBody>
                      <CardFooter><small>ONE DIRECTION</small></CardFooter>
                  </Card>
                  </a>
                  
                  </div>
                  <div className="col-md-3">
                      <a href="https://www.youtube.com/embed/X2BYmmTI04I">
                  <Card>
                      <CardHeader>
                      
                          <img src={ms3} width="100%" alt="loading"/>
                          </CardHeader>
                      <CardBody>SHE LOOKS SO PERFECT
                      
                      
                      </CardBody>
                      <CardFooter><small>5 SECONDS OF SUMMER</small></CardFooter>
                  </Card></a>
                  </div>
                  <div className="col-md-3">
                      <a href="https://www.youtube.com/embed/e-ORhEE9VVg">
                  <Card>
                  <CardHeader>
                      
                      <img src={ms5} height="213px" width="100%" alt="loading"/>
                      </CardHeader>
                      <CardBody>BLANK SPACE </CardBody>
                      <CardFooter><small>TAYLOR SWIFT</small></CardFooter>
                  </Card></a>
                  </div>
                  <div className="col-md-3">
                  <a href="https://www.youtube.com/embed/Rw51atxA-Jg">
                  <Card>
                  <CardHeader>
                  
                      <img src={ms4} width="100%" alt="loading"/>
                      
                      </CardHeader>
                      <CardBody>4 HOURS PEACEFUL PLAYLIST</CardBody>
                      <CardFooter><small>RELAX CHILLOUT MUSIC</small></CardFooter>
                  </Card></a><br/>
                  </div>

              </div>
          </div>
            
 <pre>          <b><ins>HINDI SONGS:</ins></b></pre>

<div className="container">
              <div className="row">
                  <div className="col-md-3">
                      <a href="https://www.youtube.com/embed/Vx7YkKpt-J4">
                  <Card>
                  <CardHeader>
                      
                      <img src={ms6} width="100%" alt="loading"/>
                      </CardHeader>
                      <CardBody>CHIDIYA</CardBody>
                      <CardFooter><small>VILEN</small></CardFooter>
                  </Card></a>
                  
                  </div>
                  <div className="col-md-3">
                      <a href="https://www.youtube.com/embed/0VwgpYJ4q38">
                  <Card>
                  <CardHeader>
                      
                      <img src={ms7} height="213px" width="100%" alt="loading"/>
                      </CardHeader>
                      <CardBody>URVASHI
                      
                      
                      </CardBody>
                      <CardFooter><small>HONEY SINGH</small></CardFooter>
                  </Card></a>
                  </div>
                  <div className="col-md-3">
                      <a href="https://www.youtube.com/embed/PAW_Gd3QVww">
                  <Card>
                  <CardHeader>
                      
                      <img src={ms8} height="213px" width="100%" alt="loading"/>
                      </CardHeader>
                      <CardBody>LAAL BINDI </CardBody>
                      <CardFooter><small>AKULL</small></CardFooter>
                  </Card></a>
                  </div>
                  <div className="col-md-3">
                      <a href="https://www.youtube.com/embed/koCIa6kGRsw">
                  <Card>
                  <CardHeader>
                      
                      <img src={ms9} width="100%" alt="loading"/>
                      </CardHeader>
                      <CardBody>EXCUSE ME GIRL</CardBody>
                      <CardFooter><small>ARJUN FT. REKHA SAWHNEY</small></CardFooter>
                  </Card></a> <br/>
                  </div>
              </div>
          </div>
         
               <DISHES/>
      





          </div>


        )
    }


}
export default Webp;