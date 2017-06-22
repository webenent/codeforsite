import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Route, Router} from 'react-router';
import Login from './components/login';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import CardContainer from './components/cardcontainer'
export default class Home extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Router history={browserHistory}>
			<Route path='/' component={Login} />
			<Route path='/navbar' component={Navbar}/>
			<Router path ='/jumbotron' component={Jumbotron}/>
			<Router path ='/cardcontainer' component={CardContainer}/>	
			</Router>
			/*<RecommendedJobs />*/
		)
	}
}

ReactDOM.render(
	<Home />,
	document.getElementById('root')
);
