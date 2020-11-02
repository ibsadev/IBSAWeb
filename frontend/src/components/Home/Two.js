import React, { Component } from 'react'
import styled from 'styled-components'

const TwoHeading3 = styled.h3`
   padding: 35px 5px 35px 5px;
`;

export default class Two extends Component {
   render() {
      return (
         <section id="two" className="wrapper style2 special"> 
					<div className="container">
						<header className="major inline-item-up show-on-scroll" style={{marginBottom: 30}}>
							<h2><u>What We Do</u></h2>
						</header>
						<div className="row 150%">
							<div className="6u 12u$(xsmall)">
								<div className="image fit captioned inline-item-left show-on-scroll">
                           <a href="#">
									   <div id="carousel1" className="carousel slide" data-ride="carousel">
                                 <div className="carousel-inner">
                                 <div className="carousel-item active"  style={{overflow: "hidden"}}>
                                    <img className="d-block w-100" src="images/ibsa_p1.jpg" alt="First slide" />
                                 </div>
                                 <div className="carousel-item"  style={{overflow: "hidden"}}>
                                    <img className="d-block w-100" src="images/ibsa_p2.jpg" alt="Second slide" />
                                 </div>
                                 <div className="carousel-item"  style={{overflow: "hidden"}}>
                                    <img className="d-block w-100" src="images/ibsa_p3.jpg" alt="Third slide" />
                                 </div>
                                 <div className="carousel-item"  style={{overflow: "hidden"}}>
                                    <img className="d-block w-100" src="images/ibsa_p4.jpg" alt="Third slide" />
                                 </div>
                                 </div>
                                 <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                 <span className="sr-only">Previous</span>
                                 </a>
                                 <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
                                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                 <span className="sr-only">Next</span>
                                 </a>
									  </div>
									   <TwoHeading3>See past events</TwoHeading3>
								   </a>
                        </div>
							</div>
							<div className="6u$ 12u$(xsmall)">
                        <a href="#">
                           <div className="image fit captioned inline-item-right show-on-scroll">
                              <div id="carousel2" className="carousel slide" data-ride="carousel" id="carousel2">
                                 <div className="carousel-inner">
                                 <div className="carousel-item active" style={{overflow: "hidden"}}>
                                    <img className="d-block w-100" src="images/ibsa_f1.jpg" alt="First slide" />
                                 </div>
                                 <div className="carousel-item" style={{overflow: "hidden"}}>
                                    <img className="d-block w-100" src="images/ibsa_f2.jpg" alt="Second slide" />
                                 </div>
                                 <div className="carousel-item" style={{overflow: "hidden"}}>
                                    <img className="d-block w-100" src="images/ibsa_f3.jpg" alt="Third slide" />
                                 </div>
                                 <div className="carousel-item" style={{overflow: "hidden"}}>
                                    <img className="d-block w-100" src="images/ibsa_f4.jpg" alt="Third slide" />
                                 </div>
                                 </div>
                                 <a className="carousel-control-prev" href="#carousel2" role="button" data-slide="prev">
                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                 <span className="sr-only">Previous</span>
                                 </a>
                                 <a className="carousel-control-next" href="#carousel2" role="button" data-slide="next">
                                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                 <span className="sr-only">Next</span>
                                 </a>
                              </div>
                              <TwoHeading3>Register for upcoming events</TwoHeading3>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
				</section>
      )
   }
}
