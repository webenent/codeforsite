import React,{Component} from 'react';	
var image1 = require('../../images/photo-md.jpg');
var image2 = require('../../images/jobDetails.jpg');
var image3 = require('../../images/mail.gif');
export default class Jumbotron extends Component

{
  constructor()
  {
  	super()
  	{

  	}
  }
  render()
  {
  	return(

   <div>
     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="item active">
      <img className="d-block img-fluid" src={image1} alt="First slide"/>
    </div>
    <div className="item">
      <img className="d-block img-fluid" src={image1} alt="Second slide"/>
    </div>
    <div className="item">
      <img className="d-block img-fluid" src={image1} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
   </div>
  		)
  }
}