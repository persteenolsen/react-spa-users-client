import React from 'react';


class AboutPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                   
        };
    }

    componentDidMount() {
     
    }

    render() {

        return (
         
		   <div className="container">
                        
			<div className="row">
                            
			 <div className="col-xs-auto col-md-auto" >
		                     
			   <br/> 
			   <h3>Description</h3>
           
               This React SPA Client work together with a secure Node.js and Express Web API serving as a Role based Membership System.
			   <br/><br/>
			
			   <b>Main functionality of Users</b>
			   <ul>
			    <li>Users are able to register an account and after verify the email, the users will be able to login to the system</li>
			    <li>After a successfully login the users can update own profiles</li>
			    <li>The users can recive new passwords by the forgot password functionality</li>
			   </ul>
			  
			   <b>Main functionality of Administrators</b>
			   <ul>
			    <li>Administrators have access to the same functionality as the users</li>
			    <li>In addition Administrators are able to list, create, update and delete the users</li>
			   </ul>
			
               <b>Technology used for implementing security</b>        
               <ul>
             	 <li>The Passwords of the users and administrators are encrypted by BCRYPT before stored in the database</li>
                 <li>The system is using a JSON Web Token ( JWT ) for securing the endpoints of the Web API</li>
			     <li>The Web API is secured by CORS allowing only the subdomain containing the React SPA client making HTTPS request</li>
				 <li>Frontend and backend form input validation</li>
                 <li>The above security is making the Web API and the data secure for the users of the system</li>
               </ul> 
          

               <b>Technology and hosting used for the React SPA client - The frontend</b>  
               <ul>
				<li>The frontend are representing the V for Views due to the MVC pattern</li>
                <li>React, HTML, CSS, JavaScript ES5, ES6 and ES7</li>
				<li>Formik and Yup for frontend form input validation</li>
                <li>Traditionel Bootstrap 4 by CDN for the responsive design</li>
	            <li>Manuel configuration of the Webpack 4 serving as a module bundler</li>
			    <li>Babel for transpiling JavaScript React ES6 to JavaScript ES5 ready for browsers</li>
			    <li>React BrowserRouter for navigation</li>
                <li>Hosted at a traditional Webhotel as a ES5 bundle and a index.html loading the Bootstrap by CDN</li>
              </ul>
          
		      <b>Technology, structure and hosting used for the Node.js Web API - The backend</b>  
              <ul>
               <li>Node.js and Express are used for the Web API backend</li>
			   <li>Nodemailer for sending emails according to verify email and forgot password</li>
			   <li>JavaScript and regular expression for backend form input validation</li>
		       <li>JavaScript ES5, ES6 and ES7</li>
			   <li>Classes are used for a better overview and more clear syntax of the code</li>
			   <li>Promises are used for making asynchronous code synchronous and then be able to get the result of a SQL call before sending an Email</li>
			   <li>The MVC pattern is implemented by a folder structure representing a Model, Controllers and Services</li>
			   <li>The Views of the MVC pattern are represented by the React frontend</li>
			   <li>The input form validation take place in a User Model called from the JS Controllers</li>
		       <li>The JS Controllers are handling the requests, responses and calling the JS Services</li>
		       <li>The JS Services are performing SQL calls to the MySQL database and returning the result to the JS Controllers</li>
               <li>Hosted as a Cloud Service at Micosoft Azure App Service on a free service plan using Windows and iisnode</li>
              </ul>
          
		      <b>Database</b>  
		      <ul>
		       <li>MySQL</li>
		      </ul>
         
		     <b>Texteditor</b>  
		     <ul>
              <li>Visual Studio Code</li>
             </ul>

           </div>

	      </div>
		
		</div>
	   
	   
      );

    }
}

export { AboutPage };