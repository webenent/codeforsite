var express = require('express');
var app = express.Router();
var Linkedin = require('node-linkedin')('86j5b1i21hy8i9', 'H5nhB27d5SQ8M4Jr');
var UserProfile = require('../models/userprofileinformationmodel');


app.get('/', function(req, res) {
    // This will ask for permisssions etc and redirect to callback url.
    var scope = ['r_basicprofile', 'r_emailaddress'];
    Linkedin.setCallback(req.protocol + '://' + req.headers.host + '/linkedin/oauth/linkedin/callback?adid='+req.query.adid);
    Linkedin.auth.authorize(res, scope);
});

app.get('/oauth/linkedin/callback', function(req, res) {
    console.log(req.query.adid);
    console.log('inside callback');
    Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, results) {
        if (err){
          console.log(err);
          res.send('linkedin connection error');
        }
        else if(results==null){
          res.send('Proxy error');
        }
        else{
          var linkedinVariables = {
              'accessToken': null,
              'client': null
          };
          linkedinVariables.accessToken = results.access_token;
          linkedinVariables.client = Linkedin.init(linkedinVariables.accessToken);
          linkedinVariables.client.people.me(function(err, $in) {
            console.log('adid '+req.session);
            let linkedin = $in;
            linkedin.islinkedtolinkedin = true;
            console.log(linkedin);
            UserProfile.update({adid: 'vi356349'},{
              linkedin:linkedin
            },function(err){
                  if(err){
                    res.send('Linkedin connection error');
                    console.log(err);
                  }
                  res.redirect('http://localhost:3001/profile');
              });
          });
        }
    });
});


module.exports = app;
