import React from 'react';
import Axios from 'axios';
import {tmpserver} from '../../../config/server';
import './login.css';
import {hashHistory, browserHistory} from 'react-router';
export default class LoginPage extends React.Component {

    constructor()
    {
        super();
        this.state={
          adid:'',
          password:'',
          error:false
        }
    }
handleADID =(e)=>{
e.preventDefault();
this.setState({adid:e.target.value,error:false})

}
handlepassword=(e)=>{
e.preventDefault();
this.setState({password:e.target.value,error:false})
}
handlesubmit=(e)=>{
  if(this.state.password === 'wipro@123') {
  Axios.get(`${tmpserver.url}/users?adid=${this.state.adid}`).
    then((response) => {
      console.log(response);
      if(response.data.status){
        localStorage.setItem('adid', JSON.stringify(this.state.adid));
        browserHistory.push('/profile');
      }
      else{
        this.setState({error:true});
      }
    }).
    catch((error) => {
    });
  }
  else {
    this.setState({error: true});
  }


//browserHistory.push('/profile')

}


    render() {
        return (
            <div className="container-login">
                <div className="row">
                    <div className="login-form" id='grad'>
                        <h1>Login</h1>
                        <form onClick={this.handlesubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="ADID" id="ADID" onChange={this.handleADID} />
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="form-group log-status">
                            <input type="password" className="form-control" placeholder="Password" id="Passwod"  onChange={this.handlepassword}/>
                            <i className="fa fa-lock"></i>
                        </div>
                        {this.state.error ?<span className="form-error"><b>Wrong username or password</b></span>:''}
                    <button type="button" className="log-btn" onClick={this.handlesubmit} >Log in</button>
                    </form>
                    </div>
                </div>
            </div>

        )
    }
}
