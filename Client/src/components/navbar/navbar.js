import React,{Component} from 'react'
import './navbar.css'
export default class Navbar extends Component
{
	constructor(props)
	{
		super(props)
	}
	render()
	{
		return(
           <div>
             	 <nav className="navbar navbar-fixed">
        			<div className="container">
     				 		<div className="navbar-header">
	            				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		            				<span className="sr-only">Toggle navigation</span>
		            				<span className="icon-bar"></span>
		            				<span className="icon-bar"></span>
		        					<span className="icon-bar"></span>
	            				</button>
	            				<a className="navbar-brand" href="#">Webnent</a>
      						</div>
			            <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
			          		<ul className="nav navbar-nav">
			            		<li  onClick={this.AllJobs}><a href="#AllJobs">SOLUTION</a></li>
					            <li><a href="#JobsInQueue" onClick={this.JobsInQueue}>SERVICES</a></li>
					            <li><a href="#Accepted" onClick={this.AcceptedJobs}>PRODUCTS</a></li>
					            <li><a href="#Rejected" onClick={this.RejectedJobs}>PORTFOLIO</a></li>
					            <li><a href="#Rejected" onClick={this.RejectedJobs}>ABOUT US</a></li>
					            <li><a href="#Rejected" onClick={this.RejectedJobs}>CONTACT</a></li>
			          		</ul>

			        	</div>
        			</div>
      			</nav>
           </div>
	   )
	}
}