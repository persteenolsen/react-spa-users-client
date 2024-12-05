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
           
               The React SPA Client work together with a secure Node.js and Express Web API serving as a Role based Membership System.
			   <br/><br/>

			   <b>Last updated</b>
			   <ul>
				  <li>05-12-2024</li>
			   </ul>

			   <b>GitHub</b>
			   <ul>
			     <li><a href="https://github.com/persteenolsen/react-spa-users-client" target="_blank">The React SPA Client - The frontend</a></li>
				 <li><a href="https://github.com/persteenolsen/node-express-users-api" target="_blank">The Web API - The backend</a></li>
			   </ul>
              	
             
			   <b>Main functionality of Users</b>
			   <ul>
			    <li>Users are able to register an account and after verify the email, the users will be able to login to the system</li>
			    <li>After a successfully login the users can update own profiles</li>
			    <li>The users can receive new passwords by the forgot password functionality by reseting their password before a given time like 24 hours</li>
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
				 <li>Frontend validation</li>
				 <li>Backend validation to controle form input, prevent xss and sql attacks by removing whitespaces, 
					 allowing only limited length of input, letters and numbers only</li>
                 <li>The above security is making the Web API and the data secure for the users of the system</li>
               </ul> 
          

               <b>Technology and hosting used for the React SPA client - The frontend</b>  
               <ul>
				<li>The frontend are representing the V for Views due to the MVC pattern</li>
                <li>React, HTML and CSS</li>
				<li>Mainly JavaScript ES5, ES6 and ES7 but in some cases up to ES10</li>
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
		       <li>Mainly JavaScript ES5, ES6 and ES7 but in some cases up to ES10</li>
			   <li>Classes are used for a better overview and more clear syntax of the code</li>
			   <li>Promises are used for making asynchronous code synchronous and then be 
				   able to get the result of a SQL call before sending an Email</li>
			   <li>One test example of using the async / await keywords together with Promises to change the sequence 
				   just a bit making a SQL part of the code execute synchronous</li>
			   <li>The MVC pattern is implemented by a folder structure representing a Model, Controllers and Services</li>
			   <li>The Views of the MVC pattern are represented by the React frontend</li>
			   <li>The input form validation take place in a User Model called from the JS Controllers</li>
		       <li>The JS Controllers are handling the requests, responses and calling the JS Services</li>
		       <li>The JS Services are performing SQL calls to the MySQL database and returning the result to the JS Controllers</li>
               <li>Hosted as a Cloud Service at Micosoft Azure App Service on a free service plan using Windows and iisnode</li>
              </ul>
          
		     <b>Type of database</b>  
		     <ul>
		       <li>MySQL</li>
		     </ul>
			 <b>Name of the database table</b>  
		     <ul>
		       <li>node_crud_users_jwt</li>
		     </ul>
			 <b>Name and properties of the table columns</b>  
		     <ul>
		       <li>id - bigInt - primary key - auto_increment</li>
			   <li>title - varchar</li>
			   <li>email - varchar</li>
			   <li>passwordhash - varchar</li>
			   <li>firstName - varchar</li>
			   <li>lastName - varchar</li>
			   <li>acceptterms - varchar</li>
			   <li>role - varchar</li>
			   <li>isVerified - varchar</li>
			   <li>dateCreated- varchar</li>
			   <li>verificationToken - varchar</li>
			   <li>resetToken - varchar</li>
			   <li>resetTokenExpiry - varchar</li>
		     </ul>

         
		     <b>Texteditor</b>  
		     <ul>
              <li>Visual Studio Code</li>
             </ul>

			 <b>Versions for the development stack of the Membership system</b>  
		     <ul>
			  <li>Node Version: 20</li>
              <li>React 16.8.6 for the frontend client</li>
			  <li>Bootstrap 4.4.1 for the responsive design of the frontend delivered by CDN</li>
			  <li>Express 4.16.3 for the backend Web API</li>
			  <li>Webpack 4.29.6 for the module bundler</li>
			  <li>MySQL 5.7 as database</li>
             </ul>
             			 		   
			   			   
			 <b>Testing</b>  
		       <ul>
		        <li>Test Driven Developement and Unit Testing all the way developing the system</li>
		       </ul>

           </div>

	      </div>
		
		</div>
	   
	   
      );

    }
}

export { AboutPage };